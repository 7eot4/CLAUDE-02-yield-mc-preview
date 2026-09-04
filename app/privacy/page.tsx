import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { DraftLegalBanner } from '@/components/DraftLegalBanner';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <div className="container-page pb-20">
        <DraftLegalBanner />
        <div className="max-w-none space-y-6 text-sm text-yield-text-dim">
          <p>
            This Privacy Policy describes what information {SITE_NAME} collects and how it&apos;s
            used, in connection with the Minecraft server, this website, and any associated store.
          </p>
          <h2 className="font-display text-lg font-bold text-yield-text">1. What we collect</h2>
          <p>
            In-game: your Minecraft username and UUID, gameplay data (balance, generators owned,
            prestige level, transaction history — see docs/DATABASE.md), and moderation-relevant
            logs. On the website: standard server logs (IP address, user agent) for security and
            abuse prevention. Server-side analytics (plugins/analytics) are designed to avoid
            collecting IP addresses, chat content, or payment details — see docs/SECURITY.md.
          </p>
          <h2 className="font-display text-lg font-bold text-yield-text">2. What we don&apos;t collect</h2>
          <p>We do not collect payment card details directly — purchases are processed by Tebex under its own privacy policy.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">3. How data is used</h2>
          <p>To operate the server (economy, progression, moderation), to respond to support requests, and to improve the game based on aggregate, anonymized analytics.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">4. Your rights</h2>
          <p>Contact us via /support to request a copy of your data or request deletion, subject to legitimate operational needs (e.g. moderation/fraud records).</p>
          <p className="text-xs">This document is a placeholder pending professional legal review (including applicable EU/GDPR and other regional consumer-protection requirements) and does not constitute legal advice.</p>
        </div>
      </div>
    </>
  );
}
