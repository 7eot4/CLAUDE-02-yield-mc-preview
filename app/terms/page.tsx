import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { DraftLegalBanner } from '@/components/DraftLegalBanner';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <div className="container-page pb-20">
        <DraftLegalBanner />
        <div className="max-w-none space-y-6 text-sm text-yield-text-dim">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of{' '}
            {SITE_NAME} (the &quot;Service&quot;), including the Minecraft server, this website,
            and any associated store. By connecting to the server or using this website, you
            agree to these Terms.
          </p>
          <h2 className="font-display text-lg font-bold text-yield-text">1. Not affiliated with Mojang/Microsoft</h2>
          <p>{SITE_NAME} is an independent, third-party Minecraft server and is not affiliated with, endorsed by, or sponsored by Mojang Studios or Microsoft.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">2. Accounts and conduct</h2>
          <p>You are responsible for activity on your Minecraft account while connected to the Service. See /rules for the full community rules, which are incorporated into these Terms by reference.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">3. Purchases</h2>
          <p>Store purchases are processed by Tebex. Purchases are generally final; see the Refund/payment information referenced in the store checkout flow for specifics.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">4. Termination</h2>
          <p>Access to the Service may be suspended or terminated for violations of these Terms or the server rules, at the operator&apos;s discretion.</p>
          <h2 className="font-display text-lg font-bold text-yield-text">5. Changes</h2>
          <p>These Terms may be updated from time to time. Continued use of the Service after a change constitutes acceptance of the updated Terms.</p>
          <p className="text-xs">This document is a placeholder pending professional legal review and does not constitute legal advice.</p>
        </div>
      </div>
    </>
  );
}
