import Link from 'next/link';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-yield-text-dim">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-1">Not affiliated with Mojang Studios or Microsoft.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-yield-text-dim transition hover:text-yield-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
