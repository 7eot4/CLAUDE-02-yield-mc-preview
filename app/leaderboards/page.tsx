import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { LEADERBOARD_PLACEHOLDER } from '@/lib/constants';

export const metadata: Metadata = { title: 'Leaderboards' };

export default function LeaderboardsPage() {
  return (
    <>
      <PageHero eyebrow="Compete" title="Leaderboards" description="Prestige count, not raw balance, is what lasts." />
      <div className="container-page pb-20">
        {/* Placeholder data - real wiring against the progression module is a docs/ROADMAP.md follow-up. */}
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-yield-text-dim">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Player</th>
                <th className="px-4 py-3 font-medium">Prestige</th>
              </tr>
            </thead>
            <tbody>
              {LEADERBOARD_PLACEHOLDER.map((row) => (
                <tr key={row.rank} className="border-t border-white/10">
                  <td className="px-4 py-3 text-yield-gold">{row.rank}</td>
                  <td className="px-4 py-3">{row.player}</td>
                  <td className="px-4 py-3 text-yield-text-dim">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
