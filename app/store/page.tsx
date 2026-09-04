import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { TebexStore } from '@/components/TebexStore';

export const metadata: Metadata = { title: 'Store' };

export default function StorePage() {
  const webstoreToken = process.env.NEXT_PUBLIC_TEBEX_WEBSTORE_TOKEN || '';

  return (
    <>
      <PageHero
        eyebrow="Store"
        title="Ranks, cosmetics, vouchers"
        description="Powered by Tebex. Nothing here changes generator production, sell value, or storage — see docs/MONETIZATION.md for the full policy."
      />
      <div className="container-page pb-20">
        <TebexStore webstoreToken={webstoreToken} />
        <div className="mt-6 text-center">
          <Link href="/ranks" className="btn-secondary">
            See the rank ladder
          </Link>
        </div>
      </div>
    </>
  );
}
