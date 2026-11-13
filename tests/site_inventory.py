#!/usr/bin/env python3
"""Static output inventory: local links, missing assets, duplicate IDs.

Writes a machine-readable report and fails CI on missing local references
or duplicate IDs. Does not check external HTTP availability or document truth.
"""
import json
import posixpath
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
REPORT = ROOT / "site-inventory.json"
ALLOWED_HOSTS = {"yerbas.org", "www.yerbas.org", "127.0.0.1", "localhost"}


class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.references = []
        self.ids = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        for attribute in ("href", "src"):
            if attribute in attrs and tag in ("a", "link", "img", "script", "iframe", "source"):
                self.references.append((tag, attribute, attrs[attribute]))


def resolve_link(page_route, raw):
    raw = raw.strip()
    if not raw or raw.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
        return None
    uri = urlparse(urljoin("https://yerbas.org" + page_route, raw))
    if uri.scheme not in ("http", "https") or uri.hostname not in ALLOWED_HOSTS:
        return None
    pathname = unquote(uri.path)
    if not pathname.startswith("/"):
        return None
    normalized = posixpath.normpath(pathname)
    if pathname.endswith("/") and normalized != "/":
        normalized += "/"
    return normalized


def output_path(route):
    if route == "/":
        return SITE / "index.html"
    rel = route.lstrip("/")
    path = SITE / rel
    if route.endswith("/"):
        return path / "index.html"
    if path.is_dir():
        return path / "index.html"
    return path


def main():
    if not SITE.is_dir():
        print("Missing compiled _site directory", file=sys.stderr)
        return 2
    records = []
    all_pages = sorted(SITE.rglob("*.html"))
    for page in all_pages:
        route = "/" + page.relative_to(SITE).as_posix()
        if route.endswith("/index.html"):
            route = route[: -len("index.html")]
        parser = Links()
        parser.feed(page.read_text(encoding="utf-8", errors="replace"))
        duplicate_ids = sorted(k for k, v in Counter(parser.ids).items() if v > 1)
        missing = []
        for tag, attr, value in parser.references:
            route_target = resolve_link(route, value)
            if not route_target:
                continue
            file_target = output_path(route_target)
            if not file_target.is_file():
                missing.append({"tag": tag, "attribute": attr, "url": value, "resolved": route_target})
        if duplicate_ids or missing:
            records.append({
                "page": route,
                "archive": route.startswith("/mobilewallet/support/"),
                "duplicate_ids": duplicate_ids,
                "missing_local_resources": missing[:150],
                "missing_count": len(missing),
            })

    counts = {
        "html_pages": len(all_pages),
        "pages_with_findings": len(records),
        "archive_pages_with_findings": sum(x["archive"] for x in records),
        "duplicate_id_pages": sum(bool(x["duplicate_ids"]) for x in records),
        "missing_local_links_or_assets": sum(x["missing_count"] for x in records),
    }
    REPORT.write_text(json.dumps({"summary": counts, "findings": records}, indent=2), encoding="utf-8")
    print("SITE INVENTORY:", json.dumps(counts, sort_keys=True))
    for x in records[:25]:
        targets = ", ".join(y["resolved"] for y in x["missing_local_resources"][:3])
        print("  ", x["page"], "duplicate ids:", x["duplicate_ids"][:5], "missing:", x["missing_count"], targets)
    print("Report saved to", REPORT.name)
    if records:
        print("FAIL: generated HTML contains missing local resources or duplicate IDs", file=sys.stderr)
        return 1
    print("PASS: no missing local resources or duplicate IDs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
