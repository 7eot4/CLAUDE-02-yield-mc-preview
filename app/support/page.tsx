import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Need help?" title="Support" description="Ban appeals, bug reports, purchase issues, general questions." />
      <div className="container-page grid gap-6 pb-20 sm:grid-cols-3">
        <div className="card">
          <h2 className="font-display font-bold">Discord</h2>
          <p className="mt-2 text-sm text-yield-text-dim">
            Fastest response — open a support ticket in the #support channel. See /discord.
          </p>
        </div>
        <div className="card">
          <h2 className="font-display font-bold">Bug reports</h2>
          <p className="mt-2 text-sm text-yield-text-dim">
            Found an exploit or a dupe? Report it privately via Discord rather than in public chat
            — see /rules §1. Exploit reports are taken seriously and never punished.
          </p>
        </div>
        <div className="card">
          <h2 className="font-display font-bold">Purchases</h2>
          <p className="mt-2 text-sm text-yield-text-dim">
            Store issues (missing delivery, billing questions) are handled through Tebex support
            and #support on Discord — see /store for purchase details.
          </p>
        </div>
      </div>
    </>
  );
}
