#!/usr/bin/env python3
"""Read-only Yerbas node vs public explorer chain identity check.

Does not modify blockchain state, contact exchange private APIs, or expose RPC.
Requires a locally configured yerbas-cli, plus the public explorer HTTP API.
A hash match proves agreement at ONE height only, not network-wide consensus.
"""
import argparse
import json
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request

DEFAULT_EXPLORER = "https://explorer.yerbas.org"


def rpc(cli, method, *args):
    result = subprocess.run(
        [cli, method, *[str(x) for x in args]],
        check=True, capture_output=True, text=True, timeout=15,
    )
    return result.stdout.strip()


def fetch(base_url, path):
    request = urllib.request.Request(
        base_url.rstrip("/") + path,
        headers={"User-Agent": "YerbasWebsite-ReadOnly-Review/1.0"},
    )
    with urllib.request.urlopen(request, timeout=12) as response:
        if response.status != 200:
            raise RuntimeError("Public API returned HTTP %s" % response.status)
        return response.read(1048576).decode("utf-8").strip()


def parse_hash(payload):
    try:
        value = json.loads(payload)
    except json.JSONDecodeError:
        value = payload
    if isinstance(value, dict):
        value = value.get("hash") or value.get("blockhash")
    if not isinstance(value, str):
        raise ValueError("Could not interpret explorer block hash response")
    hash_value = value.strip().lower()
    if len(hash_value) != 64 or any(c not in "0123456789abcdef" for c in hash_value):
        raise ValueError("Invalid explorer block hash representation")
    return hash_value


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cli", default="yerbas-cli", help="Local CLI executable")
    parser.add_argument("--explorer", default=DEFAULT_EXPLORER,
                        help="Public explorer origin (HTTPS only)")
    args = parser.parse_args()

    parsed = urllib.parse.urlparse(args.explorer)
    if parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password or parsed.query or parsed.fragment:
        parser.error("--explorer must be an HTTPS origin without credentials")
    try:
        local = json.loads(rpc(args.cli, "getblockchaininfo"))
        if local.get("chain") != "main":
            raise ValueError("Local node is not on mainnet")
        local_height = local.get("blocks")
        if not isinstance(local_height, int) or local_height < 0:
            raise ValueError("Invalid local block height")

        explorer = json.loads(fetch(args.explorer, "/api/v1/status"))
        if explorer.get("chain") != "main":
            raise ValueError("Explorer does not report mainnet")
        public_height = explorer.get("blocks")
        if not isinstance(public_height, int) or public_height < 0:
            raise ValueError("Invalid public block height")
        height = min(local_height, public_height)
        local_hash = rpc(args.cli, "getblockhash", height).lower()
        public_hash = parse_hash(fetch(
            args.explorer, "/api/getblockhash?index=" + str(height)
        ))
        print("Comparison height:", height)
        print("Local tip:", local_height, "| explorer tip:", public_height)
        print("Local block hash:", local_hash)
        print("Explorer block hash:", public_hash)
        if local_hash != public_hash:
            print("MISMATCH: Nodes disagree at the same height. Investigate.")
            return 2
        print("MATCH at height", height)
        if abs(local_height - public_height) > 6:
            print("WARNING: Tip heights differ by more than six blocks.")
        if local.get("initialblockdownload") or explorer.get("initialBlockDownload"):
            print("WARNING: A node reports initial synchronization in progress.")
        print("Note: A single matching height does not prove that all pools, "
              "exchanges or explorers share the same chain tip.")
        return 0
    except (OSError, ValueError, RuntimeError, subprocess.SubprocessError,
            urllib.error.URLError, json.JSONDecodeError) as exc:
        print("INCONCLUSIVE:", type(exc).__name__, str(exc), file=sys.stderr)
        return 3


if __name__ == "__main__":
    sys.exit(main())
