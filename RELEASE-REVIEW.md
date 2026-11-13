# Yerbas.org redesign — release review

Date: 2026-11-12 (Pacific)
Pull request: https://github.com/The-Yerbas-Endeavor/yerbas.github.io/pull/4
Production branch: `gh-pages` (must remain unchanged until approval)

## Verified in source and CI

- Uses existing GitHub Pages Jekyll architecture and preserves `CNAME`.
- Compiled-site checks, Chromium browser behavior, axe-core WCAG A/AA checks on redesigned sections, and internal-link checks passed in CI as documented in the PR.
- Homepage, wallet, mining, network, projects, exchanges, and community entry points were redesigned.
- The GitHub Releases API reported latest Yerbas Core `v4.0.1.4` published 2026-11-10. The site intentionally links to the releases listing rather than hardcoding that version or asset filenames.

## Public external links checked

- `https://gatevia.io/exchange/YERB_DOGE`: page responded with exchange interface, but a public HTTP response does not verify deposits, withdrawals, order-book liquidity or the active pairing.
- `https://trade.nestex.one/spot/YERB_USDT`: direct deep link could not be fetched by external inspection. The NestEx trading site lists YERB in its market overview; confirm exact trade page in a human browser.
- `https://www.mining-dutch.nl/pools/yerbas.php`: mining pool page describes active Yerbas mining and server endpoints; live pool functionality not independently tested.
- `https://kriptokyng.com/pools/yerb`: page title identifies Yerbas mining; live payouts not independently tested.
- `https://docs.yerbas.org/`: reachable, but still advertises required release `v3.2.0.15`. Current version-sensitive instructions **must not** be treated as authoritative.
- `https://coinpaprika.com/coin/yerb-yerbas/`: could not be fetched by the external inspection tool; leave as an unverified directory entry.

## Open release blockers

1. **Operator documentation:** Verify smartnode registration, collateral, and wallet version compatibility directly against current consensus/release notes. The documentation website is stale.
2. **Technical pages:** Review `/halving/`, `/assets/`, `/whitepaper/`, `/ledger/`, and `/wcc/`. These pages retain historical explanations. In `/halving/` the row for blocks 10,000,000–11,000,000 lists total reward 6 YERB, but its subshares total 6.4 YERB; verify actual consensus before correcting any values.
3. **Trading venues and pools:** Confirm exact deep links, custody status, YERB markets, deposit/withdrawal availability, and pool operation with the respective operators; never represent listed third-party venues as endorsed.
4. **Accessibility:** Automated axe checks do not replace manual screen-reader and keyboard traversal testing, or a human visual contrast review.
5. **Deployment:** Confirm GitHub Pages publishing source and custom-domain behavior, and obtain explicit approval before merging PR #4.

## Safe rollout

- Keep PR #4 as a draft pending the open items.
- Do not merge, modify `gh-pages`, deploy, change `CNAME`, or touch DNS until review sign-off.
- After approval: verify a clean CI run at the exact merge SHA, deploy, then verify canonical routes, desktop/mobile themes, and external links.

This file documents checks and uncertainty, not a claim that the project content or external services are fully verified.
