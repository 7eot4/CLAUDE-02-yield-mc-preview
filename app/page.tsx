import Link from 'next/link';
import { CopyIpButton } from '@/components/CopyIpButton';
import {
  FAQ_ITEMS,
  FEATURES,
  GAME_LOOP,
  LEADERBOARD_PLACEHOLDER,
  TAGLINE_PRIMARY,
  TAGLINE_SECONDARY,
} from '@/lib/constants';
import { getServerIp } from '@/lib/env';

export default function HomePage() {
  const serverIp = getServerIp();

  return (
    <>
      {/* Hero */}
      <section className="container-page flex flex-col items-start gap-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-yield-green">
          {TAGLINE_SECONDARY}
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          {TAGLINE_PRIMARY}
        </h1>
        <p className="max-w-xl text-lg text-yield-text-dim">
          Place generators, sell what they produce, upgrade, prestige, and climb the
          leaderboard — on islands that are never raided unless you choose to fight.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <CopyIpButton serverIp={serverIp} />
          <Link href="/play" className="btn-primary">
            How to play
          </Link>
        </div>

        {/*
          Live player count / server status: intentionally a static placeholder for now.
          Real polling (against the Minecraft server's status protocol, or a small API
          route backed by plugins/analytics) is a docs/ROADMAP.md follow-up, not wired
          up in this pass.
        */}
        <div className="card mt-4 flex items-center gap-3 text-sm">
          <span className="h-2 w-2 rounded-full bg-yield-green" aria-hidden />
          <span className="text-yield-text-dim">Server status: see /status — live polling coming soon</span>
        </div>
      </section>

      {/* Game loop */}
      <section className="border-t border-white/10 bg-yield-surface/40 py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The loop</h2>
          <p className="mt-2 max-w-2xl text-yield-text-dim">
            Understandable in your first five minutes. Deep enough to still matter a hundred hours in.
          </p>
          <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
            {GAME_LOOP.map((item, i) => (
              <li key={item.step} className="card flex flex-col gap-1">
                <span className="text-xs font-semibold text-yield-green">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-sm font-bold">{item.step}</span>
                <span className="text-xs text-yield-text-dim">{item.description}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why Yield</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card">
                <h3 className="font-display font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-yield-text-dim">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard preview */}
      <section className="border-t border-white/10 bg-yield-surface/40 py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Leaderboard</h2>
            <Link href="/leaderboards" className="text-sm text-yield-green hover:underline">
              Full leaderboards →
            </Link>
          </div>
          {/* Placeholder rows - real leaderboard data wiring is a docs/ROADMAP.md follow-up. */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
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
      </section>

      {/* Store CTA */}
      <section className="py-16">
        <div className="container-page">
          <div className="card flex flex-col items-start gap-4 bg-yield-gradient text-yield-bg sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold">Support the server, flex a little</h2>
              <p className="mt-1 max-w-xl text-yield-bg/80">
                Ranks and cosmetics only — nothing in the store changes generator production or sell value.
              </p>
            </div>
            <Link
              href="/store"
              className="shrink-0 rounded-lg bg-yield-bg px-5 py-2.5 font-semibold text-yield-text transition hover:bg-black"
            >
              Visit the store
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">FAQ</h2>
          <div className="mt-8 divide-y divide-white/10">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer list-none font-display font-semibold marker:content-none">
                  <span className="flex items-center justify-between">
                    {item.question}
                    <span className="text-yield-text-dim transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-yield-text-dim">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
