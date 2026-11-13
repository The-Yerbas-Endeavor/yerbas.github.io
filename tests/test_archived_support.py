"""Guardrails for inherited mobilewallet/support HTML files.

The pages are intentionally retained at old URLs but must not be presented
as current instructions or actively indexed. This is source/compiled-output
validation; crawlers determine eventual deindexing.
"""
from html.parser import HTMLParser
from pathlib import Path
from unittest import TestCase, main

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "mobilewallet" / "support"
OUTPUT = ROOT / "_site" / "mobilewallet" / "support"


class PageSignals(HTMLParser):
    def __init__(self):
        super().__init__()
        self.noindex = False
        self.warning = False
        self.in_warning = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            self.noindex = "noindex" in attrs.get("content", "").lower()
        if tag == "aside" and attrs.get("role") == "note":
            self.in_warning = True

    def handle_endtag(self, tag):
        if tag == "aside":
            self.in_warning = False

    def handle_data(self, data):
        if self.in_warning and ("Archived" in data or "archived" in data):
            self.warning = True


class LegacyArchiveTests(TestCase):
    def test_every_legacy_support_page_is_labeled(self):
        pages = sorted(SOURCE.rglob("*.html"))
        self.assertEqual(len(pages), 54, "Expected source inventory of 54 HTML files")
        for path in pages:
            with self.subTest(file=str(path.relative_to(ROOT))):
                content = path.read_text(encoding="utf-8")
                signals = PageSignals()
                signals.feed(content)
                self.assertTrue(signals.noindex, "Missing robots noindex")
                self.assertTrue(signals.warning, "Missing visible archived-content notice")
                self.assertNotIn("http://ajax.googleapis.com", content)
                self.assertNotIn("http://cdnjs.cloudflare.com", content)
                compiled = OUTPUT / path.relative_to(SOURCE)
                if OUTPUT.exists():
                    self.assertTrue(compiled.is_file(), "Missing generated HTML")
                    rendered = compiled.read_text(encoding="utf-8")
                    self.assertIn('name="robots"', rendered)
                    self.assertIn("noindex", rendered)


if __name__ == "__main__":
    main()
