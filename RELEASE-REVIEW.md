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
2. **Technical pages:** The `/halving/` table has now been replaced with source-backed v4.0.1.4 base subsidy ranges (using previous-block height as in Core). Review `/halving/`, `/assets/`, `/whitepaper/`, `/ledger/`, and `/wcc/`. These pages retain historical explanations. The earlier `/halving/` table incorrectly combined base subsidy with assumed static payout shares and included an arithmetic inconsistency. The replacement separates base subsidy from recipient-specific payments, verified against `src/validation.cpp` and `src/test/subsidy_tests.cpp` in tag v4.0.1.4.
3. **Trading venues and pools:** Confirm exact deep links, custody status, YERB markets, deposit/withdrawal availability, and pool operation with the respective operators; never represent listed third-party venues as endorsed.
4. **Accessibility:** Automated axe checks do not replace manual screen-reader and keyboard traversal testing, or a human visual contrast review.
5. **Deployment:** Confirm GitHub Pages publishing source and custom-domain behavior, and obtain explicit approval before merging PR #4.

## Safe rollout

- Keep PR #4 as a draft pending the open items.
- Do not merge, modify `gh-pages`, deploy, change `CNAME`, or touch DNS until review sign-off.
- After approval: verify a clean CI run at the exact merge SHA, deploy, then verify canonical routes, desktop/mobile themes, and external links.

This file documents checks and uncertainty, not a claim that the project content or external services are fully verified.

## Confirmed protocol-source correction (2026-11-12)

- Inspected tagged `v4.0.1.4` source: `src/validation.cpp` `GetBlockSubsidy` and `src/test/subsidy_tests.cpp`.
- Verified previous-block height boundaries and base YERB subsidies (4.2 through 0.420). Removed the misleading static payment-split columns; actual founder/smartnode payouts have separate consensus conditions.
- Added Chromium table-row and accessibility checks on `/halving/`.
- Source links: https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/validation.cpp and https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/test/subsidy_tests.cpp

## Confirmed Smartnode-source review (2026-11-12)

- Examined tag `v4.0.1.4` `src/chainparams.cpp`, `src/smartnode/smartnode-collaterals.cpp`, and `src/validation.cpp`.
- Mainnet `getCollateral(height)` uses **inclusive upper bounds**. 69,000 YERB is selected at heights 1,096,421–1,369,420; 100,000 YERB is selected at height 1,369,421 onward. These ranges should not be misrepresented as activation heights.
- `isPayableCollateral` is a separate lookup for historical amounts, with an inclusive end-height policy. New registration and payment validity require additional consensus context and network state.
- Mainnet Smartnode reward percentage in `chainparams.cpp` uses 0 through height 4,200 and 20 thereafter. `GetSmartnodePayment` checks the deterministic list for at least 10 nodes and adds a Smartnode share of special transaction fees when eligible.
- Updated `/smartnode-setup/` with a source-backed reference table, explicit version qualification, non-guarantee language, and existing documentation warnings. Added Chromium tests for the eight tiers and 69k/100k boundaries.
- Still required: verify the current network height, registrations and deployment specifics before claiming any amount is presently required for a new Smartnode.

Sources:
- https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/chainparams.cpp
- https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/smartnode/smartnode-collaterals.cpp
- https://github.com/The-Yerbas-Endeavor/yerbas/blob/v4.0.1.4/src/validation.cpp


## Verified whitepaper library correction (2026-11-12)

- The legacy `/whitepaper/` markup contained duplicate `x16r0`, `x16r1`, and `x16r2` IDs, JavaScript manipulating nonexistent `pub`, `GhostRider0`, and `roadMap0` elements, and translation links pointing to files absent from the repository (`Yerbas.German.pdf`, `GhostRider_Whitepaper.German.pdf`, `Roadmap.German.pdf`).
- Replaced the broken language switcher with an accessible static document library. All linked PDFs were verified to exist in the `gh-pages` Git tree: `assets/documents/YerbasWhitePaper.pdf`, `GhostRider_Whitepaper.pdf`, `X16R-Whitepaper.pdf`, and `X16R-Whitepaper.German.pdf`.
- Preserved the `/whitepaper/` URL and original PDF files; no legacy assets were deleted.
- Browser CI now verifies four PDF links return HTTP 200 with a PDF-compatible content type and runs an axe-core accessibility scan for the page.


## Public external directory review (2026-11-12, Pacific)

- NestEx public `/spot` overview lists YERB; the exact `/spot/YERB_USDT` deep link could not be inspected directly through the public fetcher. Deposits and market depth remain unverified.
- Gatevia `/exchange/YERB_DOGE` loads an exchange interface and Gatevia publicly lists YERB. Its public coin-info page displayed a YERB node running `3.2.0.15` as of 2026-10-30, potentially stale relative to Core v4.0.1.4. Confirm synchronization and wallet deposits/withdrawals with the operator.
- Zpool, Mining-Dutch, KriptoKyng and `pool.yerbas.org` have publicly reachable sites or YERB listings. These pages do not establish current successful payouts, stratum connectivity or consistent chain tips. At inspection, the public Yerbas pool dashboard described its last-found block as 33 days old.
- CoinCodex, LiveCoinWatch and CoinPaprika list YERB. CoinCodex displayed 'No Recent Exchange Data'; LiveCoinWatch displayed 'Last traded 2026-05-26'; CoinPaprika displayed incomplete/zero market fields. None should be treated as a fresh price feed.
- The `/buy-yerbas/`, `/pools/` and `/watch-yerbas/` pages were updated to clearly distinguish third-party directory links from independently verified trading/mining operations.

### Pending third-party verification

- Check NestEx's exact YERB/USDT deep link in an authenticated human browser.
- Confirm Gatevia YERB wallet synchronization, deposits and withdrawals with the venue.
- Compare mining pool chain tips against a known-good synced node and verify stratum/payout operations.
- Confirm live market liquidity and aggregator data timestamps, rather than merely HTTP reachability.

No external listing was removed based solely on incomplete web visibility or stale crawler snapshots.

## Network alignment: evidence and safe verification procedure (2026-11-12 Pacific)

Public snapshots inspected, with **different timestamps**, are not equivalent to a simultaneous chain comparison:

| Source | Height in snapshot | Reported software | Snapshot context |
| --- | ---: | --- | --- |
| Explorer API `/api/v1/status` | 1,159,394 | Yerbas Core 4.0.1.3 | Web retrieval approximately 2026-11-11; reports `initialBlockDownload=false` |
| Gatevia `/dashboard/coin_info` | 1,151,324 | Yerbas Core 3.2.0.15 | Table dated 2026-10-30 |
| Project mining pool dashboard | 1,136,535 | Not reported | Last-found block displayed as approximately 33 days old; may represent historical pool activity, not current network tip |

These figures **must not** be used to claim a fork or synchronized network status because they are not same-time block-hash comparisons. Explorer `/api/getblockcount` may also be cached by third-party crawlers.

### Read-only same-height block-hash check

The added `ops/verify-network-alignment.py` script compares a locally configured Yerbas Core **mainnet** node with the public explorer at the same height. The local `yerbas-cli` must be able to query an already running, trusted node.

```bash
python3 ops/verify-network-alignment.py
```

It performs local `getblockchaininfo` and `getblockhash` RPC calls via `yerbas-cli`, then fetches the explorer's documented `/api/v1/status` and `/api/getblockhash?index=HEIGHT` public APIs. It does **not** expose the local RPC port, create transactions, access a wallet, or send credentials to the explorer.

- Exit 0: hash agrees at the sampled height. This is **not proof** of complete sync or agreement with exchanges/pools.
- Exit 2: hashes disagree at that same height. Investigate before declaring a chain split.
- Exit 3: inconclusive (unavailable RPC, unsupported response format, non-mainnet or other errors). Do not count as a match.
- A matching hash accompanied by height drift or initial sync is reported as a warning.
- Run again at multiple heights and at the same observation time if chain-state diagnosis matters.
- For independent Gatevia or mining-pool verification, obtain a block hash at a common height directly from the operator or a verified API. Their public HTML snapshots do not provide simultaneous proof.

Explorer public endpoint documentation: https://explorer.yerbas.org/info

**Important:** This is a staged read-only diagnostic. We have not run it against the user's local node, so no present-day chain agreement is claimed.
