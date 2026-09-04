import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Store' };

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="Ranks, cosmetics, vouchers"
        description="Powered by Tebex. Nothing here changes generator production, sell value, or storage — see docs/MONETIZATION.md for the full policy."
      />
      <div className="container-page pb-20">
        {/*
          Real Tebex Headless API embed is a docs/ROADMAP.md follow-up - this
          is the layout shell where it mounts, not a fake checkout flow.
        */}
        <div className="card flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
          <p className="text-yield-text-dim">The embedded store isn&apos;t connected yet.</p>
          <p className="max-w-md text-sm text-yield-text-dim">
            Once Tebex Headless API credentials are configured (see <code className="rounded bg-white/10 px-1">.env.example</code>),
            the live catalog mounts here, styled to match this page instead of redirecting to a
            separate checkout skin.
          </p>
          <Link href="/ranks" className="btn-secondary mt-2">
            See the rank ladder
          </Link>
        </div>
      </div>
    </>
  );
}
