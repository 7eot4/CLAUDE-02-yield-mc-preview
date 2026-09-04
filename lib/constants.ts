// Shared content constants used across pages/components. Centralizing this
// keeps copy consistent and makes future edits (rank prices, nav links,
// FAQ wording) a one-file change instead of a codebase-wide hunt.

export const SITE_NAME = 'Yield';
export const TAGLINE_PRIMARY = 'What will you Yield?';
export const TAGLINE_SECONDARY = 'Place. Produce. Prestige.';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/play', label: 'Play' },
  { href: '/store', label: 'Store' },
  { href: '/ranks', label: 'Ranks' },
  { href: '/battlepass', label: 'Battle Pass' },
  { href: '/leaderboards', label: 'Leaderboards' },
  { href: '/wiki', label: 'Wiki' },
  { href: '/rules', label: 'Rules' },
  { href: '/status', label: 'Status' },
];

export const FOOTER_LINKS: NavLink[] = [
  { href: '/rules', label: 'Rules' },
  { href: '/support', label: 'Support' },
  { href: '/vote', label: 'Vote' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
];

// The core loop, named directly from the governing spec / docs/ECONOMY.md §3
// ("place -> generate -> sell -> upgrade -> unlock -> prestige -> compete ->
// flex -> repeat").
export type LoopStep = {
  step: string;
  description: string;
};

export const GAME_LOOP: LoopStep[] = [
  { step: 'PLACE GEN', description: 'Drop a generator on your island. Every player starts with one free wheat generator.' },
  { step: 'GENERATE', description: 'It produces resources on a timer, online or offline.' },
  { step: 'SELL', description: 'Cash in what it produces and watch your balance climb.' },
  { step: 'UPGRADE', description: 'Level up owned generators for a bigger payout per cycle.' },
  { step: 'UNLOCK', description: 'Afford the next generator tier and stack a new income stream.' },
  { step: 'PRESTIGE', description: 'Reset your balance for a permanent, compounding sell-value multiplier.' },
  { step: 'COMPETE', description: 'Climb the leaderboards - prestige count, not raw balance, is what lasts.' },
  { step: 'FLEX', description: 'Show it off with cosmetics, island themes, and rank perks.' },
  { step: 'REPEAT', description: 'Every prestige starts the loop again, faster than the last.' },
];

export type Feature = {
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    title: 'Islands, not raid targets',
    description:
      'Your island and generators are non-raidable by default. PvP is opt-in via dedicated zones and events - never forced on players who just want to build.',
  },
  {
    title: 'A generator curve with real math behind it',
    description:
      'Thirteen tiers from wheat to starforged, tuned so income-per-hour grows roughly 2.17x per tier - fast enough to feel like progress, not a wall.',
  },
  {
    title: 'Prestige that actually compounds',
    description:
      'Reset your balance for a permanent sell-value multiplier. First prestige lands inside your first weekend of play.',
  },
  {
    title: 'A store that never sells power',
    description:
      'Ranks and cosmetics are QoL and flex only. Nothing you can buy changes generator production, sell price, or storage beyond what play already grants.',
  },
  {
    title: 'Seasonal battle pass',
    description:
      'Free and premium tracks every season, rewarding cosmetics, titles, and vouchers - never a head start free players can\'t eventually match.',
  },
  {
    title: 'A status page that tells the truth',
    description:
      'A real, working /status page instead of vague uptime claims - because unverifiable marketing is the thing we\'re explicitly not doing.',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is Yield pay-to-win?',
    answer:
      'No. Ranks and cosmetics are status and convenience only - chat tags, cosmetic slots, warp slots, queue priority. Nothing sold in the store increases generator production, sell price, or storage beyond what you can earn through play. See /ranks for the full breakdown.',
  },
  {
    question: 'Can my island get raided?',
    answer:
      'Not by default. Islands and generators are non-raidable unless you opt in to a dedicated PvP zone or event. Players who want a pure tycoon experience get one.',
  },
  {
    question: 'Is Bedrock (mobile/console) supported?',
    answer:
      'Not yet. Java Edition is fully supported today. Bedrock crossplay via Geyser/Floodgate is planned but deliberately deferred until the core player-identity model is battle-tested - see /play for details.',
  },
  {
    question: 'How does prestige work?',
    answer:
      'Once your balance crosses a threshold, you can reset it in exchange for a permanent, compounding sell-value multiplier. Your prestige count - not your raw balance - is what leaderboards track long-term.',
  },
  {
    question: 'Where do I buy ranks or cosmetics?',
    answer:
      'Through the in-browser store at /store, powered by Tebex. Store purchases never affect the in-game economy currency - real money and in-game balance are structurally kept apart.',
  },
];

// Static placeholder leaderboard data for the homepage preview and the
// /leaderboards page. Real leaderboard data wiring (live queries against the
// progression/market plugin data) is a follow-up - this is clearly
// placeholder content, not live numbers.
export type LeaderboardRow = {
  rank: number;
  player: string;
  value: string;
};

export const LEADERBOARD_PLACEHOLDER: LeaderboardRow[] = [
  { rank: 1, player: 'GreenThumb', value: '14 prestiges' },
  { rank: 2, player: 'OreBaron', value: '11 prestiges' },
  { rank: 3, player: 'YieldFarmer', value: '9 prestiges' },
  { rank: 4, player: 'StackedSteve', value: '8 prestiges' },
  { rank: 5, player: 'CompoundKing', value: '7 prestiges' },
];

export type Rank = {
  name: string;
  theme: string;
  price: string;
  perks: string[];
};

// Rank ladder + indicative one-time prices, copied from docs/MONETIZATION.md §1.
export const RANKS: Rank[] = [
  {
    name: 'SPROUT',
    theme: 'First step up from free',
    price: '$4.99',
    perks: [
      'Chat prefix + rank color',
      '+1 cosmetic slot',
      '+1 island warp slot',
      '+1 market listing slot',
    ],
  },
  {
    name: 'GROWER',
    theme: 'Mid-tier',
    price: '$12.99',
    perks: [
      'Everything in Sprout',
      'Additional cosmetic slots',
      '+2 island warp slots',
      '+2 market listing slots',
      'Queue priority on a full server',
    ],
  },
  {
    name: 'BARON',
    theme: 'High-tier - you run this economy',
    price: '$24.99',
    perks: [
      'Everything in Grower',
      'Rank-exclusive join effect',
      'One-time mid-tier cosmetic bundle claim',
      'Higher queue priority',
      'Extra market listing slots',
    ],
  },
  {
    name: 'MOGUL',
    theme: 'Top rank, capped supply per season (optional)',
    price: '$49.99',
    perks: [
      'Everything in Baron',
      'Maximum cosmetic slot allowance',
      'Highest queue priority',
      'Full warp and market listing slot allowance',
      'Cosmetic-only exclusive commands',
    ],
  },
];

export const DISCORD_HREF_FALLBACK = 'https://discord.com';
