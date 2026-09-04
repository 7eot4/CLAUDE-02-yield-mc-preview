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
