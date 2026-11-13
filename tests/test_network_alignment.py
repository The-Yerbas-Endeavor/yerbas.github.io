"""Offline unit tests for the read-only network alignment checker."""
import importlib.util
from pathlib import Path
from unittest import TestCase, main
from unittest.mock import patch

module_path = Path(__file__).resolve().parents[1] / "ops" / "verify-network-alignment.py"
spec = importlib.util.spec_from_file_location("alignment", module_path)
alignment = importlib.util.module_from_spec(spec)
spec.loader.exec_module(alignment)
HASH_A = "a" * 64
HASH_B = "b" * 64


class AlignmentTests(TestCase):
    def test_parse_hash_accepts_plain_or_json(self):
        self.assertEqual(alignment.parse_hash(HASH_A), HASH_A)
        self.assertEqual(alignment.parse_hash('"' + HASH_A + '"'), HASH_A)
        self.assertEqual(alignment.parse_hash('{"hash":"' + HASH_A + '"}'), HASH_A)

    def test_parse_hash_rejects_invalid(self):
        for response in ("", "not-a-hash", "{}", "null", "a" * 63):
            with self.assertRaises(ValueError):
                alignment.parse_hash(response)

    def test_matching_nodes(self):
        local = '{"chain":"main","blocks":1200,"initialblockdownload":false}'
        explorer = '{"chain":"main","blocks":1201,"initialBlockDownload":false}'
        with patch.object(alignment, "rpc", side_effect=[local, HASH_A]), \
             patch.object(alignment, "fetch", side_effect=[explorer, HASH_A]), \
             patch("sys.argv", ["check"]):
            self.assertEqual(alignment.main(), 0)

    def test_different_hashes(self):
        local = '{"chain":"main","blocks":1200}'
        explorer = '{"chain":"main","blocks":1201}'
        with patch.object(alignment, "rpc", side_effect=[local, HASH_A]), \
             patch.object(alignment, "fetch", side_effect=[explorer, HASH_B]), \
             patch("sys.argv", ["check"]):
            self.assertEqual(alignment.main(), 2)

    def test_incomplete_public_data(self):
        local = '{"chain":"main","blocks":1200}'
        explorer = '{"chain":"main","blocks":1201}'
        with patch.object(alignment, "rpc", side_effect=[local, HASH_A]), \
             patch.object(alignment, "fetch", side_effect=[explorer, "{}"]), \
             patch("sys.argv", ["check"]):
            self.assertEqual(alignment.main(), 3)

    def test_explorer_must_be_https(self):
        with patch("sys.argv", ["check", "--explorer", "http://example.com"]):
            with self.assertRaises(SystemExit) as context:
                alignment.main()
            self.assertEqual(context.exception.code, 2)


if __name__ == "__main__":
    main()
