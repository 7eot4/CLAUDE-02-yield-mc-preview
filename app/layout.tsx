import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getDiscordInviteUrl, getSiteUrl, withBasePath } from '@/lib/env';
import { SITE_NAME, TAGLINE_PRIMARY } from '@/lib/constants';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} — ${TAGLINE_PRIMARY}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Yield is a Minecraft Gens/generator-economy server: place generators, sell production, upgrade, prestige, and compete — without pay-to-win and without forced PvP.',
  openGraph: {
    title: `${SITE_NAME} — ${TAGLINE_PRIMARY}`,
    description:
      'Place generators, sell production, upgrade, prestige, and compete — without pay-to-win and without forced PvP.',
    // The brand mark at social-preview size (docs/BRAND.md §10) - a
    // proper 1200x630 designed banner is a LAUNCH-CHECKLIST follow-up for
    // a human designer, not something this pass fakes as finished.
    images: [{ url: withBasePath('/og-image.png'), width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} — ${TAGLINE_PRIMARY}`,
    images: [withBasePath('/og-image.png')],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const discordInviteUrl = getDiscordInviteUrl();

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header discordInviteUrl={discordInviteUrl} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
