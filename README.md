# Yield website

Next.js (App Router) + TypeScript + Tailwind CSS. Design system: `../docs/BRAND.md`. Content
grounded in `../docs/COMPETITOR-RESEARCH.md`, `../docs/ECONOMY.md`, `../docs/MONETIZATION.md`.

## Status: verified via CI, not locally

This was originally written in an environment with **no Node.js installed**, so it was never
built locally by the person/session that wrote it. It's since been verified for real: GitHub
Actions CI (`.github/workflows/ci.yml`) runs `npm install && npm run lint && npm run build` on
every push and currently passes. That run caught two real bugs the no-Node-available authoring
pass couldn't have: the original `next@15.0.3`/`react@19.0.0` pin was an invalid peer-dependency
combination (fixed by bumping both to current versions), and Next.js 16 removed the `next lint`
CLI (migrated to ESLint's flat config, `eslint.config.mjs`). A local `npm run dev` pass on a real
machine is still worth doing before launch to actually look at the pages, not just confirm they
compile.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

Copy `../.env.example` values into `.env.local` for local development (at minimum
`NEXT_PUBLIC_SERVER_IP`; `DISCORD_INVITE_URL` if you want `/discord` to actually redirect).

## Structure

- `app/` - one folder per route (App Router), `layout.tsx` for the shared header/footer/fonts.
- `components/` - shared UI (`Header`, `Footer`, `CopyIpButton` - the only Client Component so
  far, since it needs `navigator.clipboard`).
- `lib/constants.ts` - all page copy that's shared or easy to want to tweak in one place (nav
  links, the game loop steps, rank ladder, FAQ, placeholder leaderboard data).
- `lib/env.ts` - centralized env var readers with sane local-dev fallbacks.

## What's real vs. placeholder

Pages are real, populated content grounded in the project's own docs - not lorem ipsum. Explicitly
marked placeholder/follow-up items (commented in the relevant file):

- Live server status/player count polling (`/status`, homepage) - static shell only.
- Leaderboard data (`/leaderboards`, homepage) - static example rows.
- Tebex store embed (`/store`) - layout shell where the Headless API integration mounts.
- Vote site links (`/vote`) - empty until the server is actually listed post-launch.
- `/terms` and `/privacy` are explicitly labeled DRAFT and need professional legal review before
  they're real policy - see the red banner on both pages.

## Build

```bash
npm run build
npm run lint
```

`Dockerfile` produces a standalone production image (`next.config.mjs`'s `output: 'standalone'`).
