import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Battle Pass' };

const EXAMPLE_TIERS = [
  { tier: 1, free: 'Currency boost token', premium: 'Exclusive particle trail' },
  { tier: 5, free: 'Cosmetic tag', premium: 'Auto-sell voucher (2h)' },
  { tier: 15, free: 'Title', premium: 'Generator skin' },
  { tier: 30, free: 'Voucher bundle', premium: 'Exclusive island theme' },
];

export default function BattlePassPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal"
        title="Battle Pass"
        description="Free and premium tracks, every season. Rewards are cosmetics, titles, and vouchers — never a head start free players can't eventually match."
      />
      <div className="container-page pb-20">
        <div className="card mb-8">
          <p className="text-sm text-yield-text-dim">
            Season 1 has not started yet — this page shows the intended structure
            (<code className="rounded bg-white/10 px-1">docs/MONETIZATION.md</code> §4), not live content.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-yield-text-dim">
              <tr>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Free track</th>
                <th className="px-4 py-3 font-medium text-yield-gold">Premium track</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLE_TIERS.map((row) => (
                <tr key={row.tier} className="border-t border-white/10">
                  <td className="px-4 py-3 text-yield-green">{row.tier}</td>
                  <td className="px-4 py-3 text-yield-text-dim">{row.free}</td>
                  <td className="px-4 py-3">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
