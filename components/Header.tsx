import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { getServerIp } from '@/lib/env';
import { CopyIpButton } from './CopyIpButton';

export function Header({ discordInviteUrl }: { discordInviteUrl: string }) {
  const serverIp = getServerIp();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-yield-bg/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${SITE_NAME} home`}>
          <Image src="/icon.svg" alt="" width={32} height={32} priority />
          <span className="font-display text-lg font-bold tracking-wide">{SITE_NAME}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-yield-text-dim transition hover:text-yield-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CopyIpButton serverIp={serverIp} />
          </div>
          <a href={discordInviteUrl || '/discord'} className="btn-primary">
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}
