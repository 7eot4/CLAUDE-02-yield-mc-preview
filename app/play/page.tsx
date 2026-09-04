import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CopyIpButton } from '@/components/CopyIpButton';
import { getServerIp } from '@/lib/env';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Play' };

export default function PlayPage() {
  const serverIp = getServerIp();

  return (
    <>
      <PageHero
        eyebrow="Getting started"
        title="How to join"
        description="Java Edition, one server address, no launcher plugins required."
      />
      <div className="container-page pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card">
            <h2 className="font-display font-bold">Java Edition</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-yield-text-dim">
              <li>Open Minecraft: Java Edition (a modern release — see /status for the exact supported version).</li>
              <li>Multiplayer → Add Server.</li>
              <li>
                Server address: <span className="font-mono text-yield-text">{serverIp}</span>
              </li>
              <li>Join, and the onboarding flow walks you through claiming your starter generator.</li>
            </ol>
            <div className="mt-4">
              <CopyIpButton serverIp={serverIp} />
            </div>
          </div>

          <div className="card">
            <h2 className="font-display font-bold">Bedrock (mobile / console)</h2>
            <p className="mt-3 text-sm text-yield-text-dim">
              Not supported yet. Java+Bedrock crossplay via Geyser/Floodgate is planned but
              deliberately deferred until the core player-identity model is battle-tested —
              see docs/ARCHITECTURE.md in the project repository for the reasoning. Check back
              here or on Discord for updates.
            </p>
          </div>
        </div>

        <div className="card mt-6">
          <h2 className="font-display font-bold">Before you jump in</h2>
          <p className="mt-3 text-sm text-yield-text-dim">
            Read the <Link href="/rules" className="text-yield-green hover:underline">server rules</Link> —
            it&apos;s short. Questions? <Link href="/support" className="text-yield-green hover:underline">Support</Link> or{' '}
            <Link href="/discord" className="text-yield-green hover:underline">Discord</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
