import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getDiscordInviteUrl } from '@/lib/env';

export const metadata: Metadata = { title: 'Discord' };

export default function DiscordPage() {
  const discordInviteUrl = getDiscordInviteUrl();

  if (discordInviteUrl) {
    redirect(discordInviteUrl);
  }

  return (
    <PageHero
      eyebrow="Community"
      title="Discord invite not configured yet"
      description="Set DISCORD_INVITE_URL in .env once the server's Discord is live — this page will redirect there automatically."
    />
  );
}
