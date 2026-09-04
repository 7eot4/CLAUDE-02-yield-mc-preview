# Yield — public preview

Public, static preview of the marketing website for **Yield**, a Minecraft Gens/generator-economy
server. Deployed via GitHub Pages from this repo's `master` branch (see
`.github/workflows/deploy-pages.yml`).

This is a **snapshot**, not a live mirror: full source, the 15-module Paper plugin suite, and
active development happen in the private companion repo,
[`CLAUDE-02-yield-mc-server`](https://github.com/7eot4/CLAUDE-02-yield-mc-server). This repo
exists only so the website itself has something to point at (per this account's `CLAUDE-NN-*` /
`*-preview` convention) without exposing the private repo's full history or plugin source.

Static-export specifics live in `next.config.mjs` (`GITHUB_PAGES=true` toggles `output: 'export'`
+ the `/CLAUDE-02-yield-mc-preview` base path GitHub Pages project sites require) - see the
original `website/README.md` in the private repo for full development docs.
