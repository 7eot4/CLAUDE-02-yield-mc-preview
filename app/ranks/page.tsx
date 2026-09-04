import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { RANKS } from '@/lib/constants';

export const metadata: Metadata = { title: 'Ranks' };

export default function RanksPage() {
  return (
    <>
      <PageHero
        eyebrow="Store · Ranks"
        title="Status and convenience, never power"
        description="Every rank below is cosmetic/QoL only. No rank changes generator production, sell value, or storage."
      />
      <div className="container-page pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RANKS.map((rank) => (
            <div key={rank.name} className="card flex flex-col gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-yield-green">{rank.name}</h2>
                <p className="text-xs text-yield-text-dim">{rank.theme}</p>
              </div>
              <p className="font-display text-2xl font-bold">{rank.price}</p>
              <ul className="flex-1 space-y-2 text-sm text-yield-text-dim">
                {rank.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-yield-green">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-yield-text-dim">
          Prices are indicative and may change before launch. Every purchase is delivered via the
          Tebex-backed store — see <code className="rounded bg-white/10 px-1">/store</code>.
        </p>
      </div>
    </>
  );
}
