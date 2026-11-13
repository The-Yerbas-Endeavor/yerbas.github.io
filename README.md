# Yerbas.org website

Official source for [yerbas.org](https://yerbas.org), built with Jekyll and hosted on GitHub Pages.

The production website is maintained from the `gh-pages` branch. **GitHub's actual Pages publishing-source setting must be confirmed in repository Settings → Pages before deploying.** The repository default branch is `main`, which should not be treated as the production source solely because it is the default.

## Website development

The site uses the existing Jekyll / Minima build pipeline, shared layouts in `_layouts/`, includes in `_includes/`, and content in `_pages/`. Shared visual styles for the modernization are in `assets/css/yerbas-modern.css`.

Create a feature branch from `gh-pages`, not `main`. Make changes in the feature branch and open a **draft pull request targeting `gh-pages`**.

To build locally (with a compatible Ruby/Bundler environment):

```sh
bundle install
bundle exec jekyll build --trace
bundle exec jekyll serve
```

The local site is normally available at `http://127.0.0.1:4000/`. Before merging, GitHub Actions must pass the Jekyll build and Chromium browser, accessibility, page and internal-link checks. Screenshots and the compiled site are available as CI artifacts.

## Deployment and rollback

Read [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md) and [RELEASE-REVIEW.md](RELEASE-REVIEW.md) before promotion. A successful CI run does **not** authorize production deployment. Explicit human approval is required to merge the draft PR.

The `CNAME` file in the publishing branch must remain `yerbas.org`. Do not change DNS, GitHub Pages publishing configuration or production settings as part of an ordinary visual update.

Before merge, record the exact `gh-pages` commit SHA and the intended merge commit. If the deployed version has to be rolled back, make a **new revert commit or restore the prior tree in a new commit**, then allow Pages to publish it; avoid force-pushing or deleting history.

## Contributing

Use the current [website repository](https://github.com/The-Yerbas-Endeavor/yerbas.github.io) to report issues and propose pull requests. Refer to the [Core repository](https://github.com/The-Yerbas-Endeavor/yerbas) for consensus changes, [Core releases](https://github.com/The-Yerbas-Endeavor/yerbas/releases) for software downloads, and [Yerbas documentation](https://docs.yerbas.org/) for operator guides. Verify version-dependent documentation against the current Core release before publishing it as active instructions.

Historical technical articles may remain in the site as archives and should be labeled accordingly. Do not promise contributor bounties, live market data, compatible wallet builds or current Smartnode requirements without verifying the source and obtaining appropriate project approval.

## Community

Connect through the [community page](https://yerbas.org/community/) or the project's [GitHub organization](https://github.com/The-Yerbas-Endeavor).
