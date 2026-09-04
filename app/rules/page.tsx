import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = { title: 'Rules' };

const RULE_SECTIONS = [
  {
    title: '1. Fair play',
    rules: [
      'No cheat clients, X-ray, hacked clients, or unfair automation (auto-clickers used to bypass intended gameplay limits included).',
      'No exploiting bugs, dupes, or economy glitches. Report them instead — see /support. Knowingly exploiting an unpatched bug is treated the same as cheating, whether or not you were the one who found it.',
      'No alt-account abuse (e.g. multiple accounts to bypass per-player limits, farm referral rewards, or evade a ban).',
    ],
  },
  {
    title: '2. Respect other players',
    rules: [
      'No harassment, hate speech, or targeted abuse — in chat, in-game, or on Discord.',
      'No spamming, advertising other servers, or unsolicited real-money trading offers.',
      'Impersonating staff or Yield accounts is not allowed.',
    ],
  },
  {
    title: '3. Building and islands',
    rules: [
      'Islands are private by default — building on or interfering with another player\'s island without permission is not allowed, even where it might technically be possible.',
      'PvP only happens in designated opt-in zones/events. Forcing conflict on players who haven\'t opted in is a rule violation, not just bad manners.',
    ],
  },
  {
    title: '4. Economy and trading',
    rules: [
      'No real-money trading of in-game currency, items, or accounts outside the official store.',
      'No scamming other players in trades or the auction house.',
    ],
  },
  {
    title: '5. Appeals',
    rules: [
      'Every punishment can be appealed — see /support for how to reach staff.',
      'Appeals are reviewed by someone other than the staff member who issued the punishment where possible.',
    ],
  },
];

export default function RulesPage() {
  return (
    <>
      <PageHero eyebrow="Community" title="Server rules" description="Short on purpose. Enforced fairly." />
      <div className="container-page space-y-8 pb-20">
        {RULE_SECTIONS.map((section) => (
          <div key={section.title} className="card">
            <h2 className="font-display font-bold">{section.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-yield-text-dim">
              {section.rules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span className="text-yield-green">–</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
