import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Wiki' };

const SECTIONS = [
  {
    id: 'gameplay-loop',
    title: 'The gameplay loop',
    body: 'Place a generator, let it produce, sell the output, upgrade or unlock the next tier, then prestige for a permanent multiplier. See the homepage for the full nine-step loop.',
  },
  {
    id: 'generators',
    title: 'Generators',
    body: 'Fourteen tiers from Wheat to Celestial. Every player starts with one free Wheat generator. Production accrues even while you\'re offline.',
  },
  {
    id: 'islands',
    title: 'Islands',
    body: 'Your personal production area. Non-raidable by default — invite friends to co-op, or visit other players\' islands (permission-gated) to see how they\'ve built.',
  },
  {
    id: 'prestige',
    title: 'Prestige',
    body: 'Once your balance crosses a threshold, reset it for a permanent, compounding sell-value multiplier. Prestige count is the long-term leaderboard stat, not raw balance.',
  },
];

export default function WikiPage() {
  return (
    <>
      <PageHero eyebrow="Reference" title="Wiki" description="The short version of everything. More detail lands here as systems ship." />
      <div className="container-page space-y-8 pb-20">
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id} className="card scroll-mt-24">
            <h2 className="font-display font-bold">{section.title}</h2>
            <p className="mt-2 text-sm text-yield-text-dim">{section.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
