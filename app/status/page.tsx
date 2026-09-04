import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { getServerIp } from '@/lib/env';

export const metadata: Metadata = { title: 'Status' };

export default function StatusPage() {
  const serverIp = getServerIp();

  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Server status"
        description="A real status page instead of a vague uptime claim — one of the things docs/COMPETITOR-RESEARCH.md found most competitors don't bother building."
      />
      <div className="container-page pb-20">
        {/*
          Real status polling (Minecraft Server List Ping protocol against
          NEXT_PUBLIC_SERVER_IP, or a small API route) is a docs/ROADMAP.md
          follow-up - this is the layout shell, not live data.
        */}
        <div className="card flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-yield-text-dim" aria-hidden />
            <span className="font-display font-bold">Status polling not yet connected</span>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-yield-text-dim">Address</dt>
              <dd className="font-mono">{serverIp}</dd>
            </div>
            <div>
              <dt className="text-yield-text-dim">Players online</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt className="text-yield-text-dim">Version</dt>
              <dd>Paper 26.2</dd>
            </div>
            <div>
              <dt className="text-yield-text-dim">Uptime (30d)</dt>
              <dd>—</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
