# Yerbas.org production release checklist

**Review-only instructions.** They do not authorize a merge, deployment, force push, GitHub Pages setting change, or DNS edit.

## 1. Pre-merge evidence

- [ ] Review the actual dark/light screenshots at 1440px desktop, 768px tablet, and 375px mobile. Compare the real site with the approved design; check horizontal overflow and content density.
- [ ] Check keyboard-only navigation (Tab/Shift+Tab, Escape, focus visibility), screen reader landmarks, link descriptions, PDF accessibility and contrast with a human reviewer. Automated axe checks do not replace these tests.
- [ ] Confirm the latest PR commit has green Jekyll, Chromium, axe-core and internal-link checks. Review any dependency/build warnings separately.
- [ ] Verify current wallet downloads and mandatory release guidance through official GitHub Core releases.
- [ ] Review `RELEASE-REVIEW.md` for remaining Smartnode, technical-reference and external exchange/pool caveats. Do not claim on-chain agreement from snapshots taken at different times.
- [ ] Check existing bookmarked URLs and document PDFs. Confirm that any removed or renamed public paths have working redirects.
- [ ] Confirm no private API tokens, RPC credentials, wallet keys or local machine addresses are present in source or logs.

## 2. Confirm deployment configuration

- [ ] In GitHub repository **Settings → Pages**, record the actual build/deployment source and branch/folder. **This has not been independently verified through the available GitHub connector.**
- [ ] Confirm custom domain is `yerbas.org`, HTTPS is enabled, and `CNAME` in the Pages source contains exactly `yerbas.org`.
- [ ] Confirm the correct PR base is `gh-pages`, while the repository default branch is `main`.
- [ ] Verify that merging to `gh-pages` really triggers the existing Pages publishing mechanism. The current PR test workflow builds artifacts; it does **not** deploy them.
- [ ] Capture existing DNS records and Pages settings for reference, without changing them.

## 3. Release authorization

- [ ] Record approved PR number, title, reviewer, and the latest successfully tested head SHA.
- [ ] Record the pre-merge production `gh-pages` SHA:
  `git rev-parse origin/gh-pages`
- [ ] Obtain explicit approval from the site owner to merge. Draft status alone does not count as approval.
- [ ] Merge without force-pushing and without modifying `CNAME`, domain settings or DNS.

## 4. Post-deployment verification

- [ ] Verify the root and canonical routes: `/`, `/wallet/`, `/smartnode-setup/`, `/assets/`, `/pools/`, `/projects/`, `/community/`, `/whitepaper/`, `/halving/`.
- [ ] Confirm CSS, icons, hero images and PDFs load over HTTPS.
- [ ] Check both themes, stored preference, mobile menu, keyboard escape and at least one real mobile browser.
- [ ] Verify no new 404s or JavaScript errors and ensure no unintended caching of old CSS.
- [ ] Check wallet links still point to official releases, and that exchange/pool directory warnings are visible.
- [ ] Record the final deployed commit SHA and review completion.

## 5. Rollback procedure (if approved deployment fails)

**Use a new commit, not a force push.** Identify the exact problematic merge commit and the saved known-good production SHA before performing the rollback.

For a simple single-parent merge/commit, a normal `git revert` may work. For a merge commit, `git revert -m 1 <merge-sha>` requires confirming that parent 1 is the intended `gh-pages` parent. If commits are complex, restore the known-good tree in a **new** branch and open a reviewed PR against `gh-pages`. Do not blindly run `git reset --hard` or force-push production.

After a revert is merged and Pages republishes, recheck the domain, canonical routes and static assets. Keep a record of the failure for future releases.
