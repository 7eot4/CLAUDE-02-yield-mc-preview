/**
 * Small, centralized readers for the env vars this site cares about
 * (see .env.example at the repo root). Keeping the fallbacks here means no
 * component has to know what a "safe default" looks like during local dev
 * before a real .env.local exists.
 *
 * NEXT_PUBLIC_* vars are inlined by Next.js at build time, so it's safe to
 * call these from both Server and Client Components. `DISCORD_INVITE_URL`
 * deliberately has no NEXT_PUBLIC_ prefix (see .env.example's comment) and
 * must only ever be read in a Server Component - see lib/env.ts's
 * `getDiscordInviteUrl` and pass the resolved string down as a prop to any
 * Client Component that needs it (see components/Header.tsx).
 */

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}

export function getServerIp(): string {
  return process.env.NEXT_PUBLIC_SERVER_IP || 'play.yield.example';
}

/** Server-only. Do not import this into a file marked "use client". */
export function getDiscordInviteUrl(): string {
  return process.env.DISCORD_INVITE_URL || '';
}

/**
 * Mirrors next.config.mjs's own GITHUB_PAGES/repoName logic exactly - needed
 * here too because `next/image` only auto-prefixes `src` with `basePath`
 * when going through its optimization loader, and static export sets
 * `images.unoptimized: true` (no server available to run that loader),
 * which silently disables the auto-prefixing. Any hardcoded public/ asset
 * path passed to next/image must be run through this helper, or it 404s on
 * GitHub Pages while looking correct in local dev/Docker (where basePath is
 * empty, so the missing prefix goes unnoticed).
 */
export function withBasePath(path: string): string {
  const isGithubPagesExport = process.env.GITHUB_PAGES === 'true';
  return isGithubPagesExport ? `/CLAUDE-02-yield-mc-preview${path}` : path;
}
