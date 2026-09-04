import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Vote' };

// Real vote-site listings are an operational detail set up post-launch (need
// the server actually running and listed on each site first) - placeholder
// structure only, per docs/ROADMAP.md.
const VOTE_SITES: { name: string; href: string }[] = [];

export default function VotePage() {
  return (
    <>
      <PageHero
        eyebrow="Support the server for free"
        title="Vote"
        description="Voting is free and rewards currency, cosmetics, and vote-party progress."
      />
      <div className="container-page pb-20">
        {VOTE_SITES.length === 0 ? (
          <div className="card">
            <p className="text-sm text-yield-text-dim">
              Vote links go live once the server is listed on each site — check back after launch,
              or watch Discord for the announcement.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {VOTE_SITES.map((site) => (
              <li key={site.href} className="card">
                <a href={site.href} className="font-display font-bold text-yield-green hover:underline">
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
