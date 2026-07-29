export type ProductId = 'daily' | 'week' | 'ritual' | 'morning' | 'travel' | 'gift';

export type Product = {
  id: ProductId;
  name: string;
  line: string;
  bottles: number;
  once: number;
  subPrice: number | null;
  label: string;
  notes: string;
  img: string;
};

export const CATALOG: Record<ProductId, Product> = {
  daily: {
    id: 'daily',
    name: 'The Daily Shot',
    line: 'One 25 ml bottle',
    bottles: 1,
    once: 8,
    subPrice: null,
    label: 'New',
    notes: 'Bright · Herbaceous · Peppery',
    img: '/assets/bottle-hero.jpg',
  },
  week: {
    id: 'week',
    name: 'The Week',
    line: 'Seven 25 ml bottles',
    bottles: 7,
    once: 49,
    subPrice: 42,
    label: 'Bestseller',
    notes: 'Bright · Herbaceous · Smooth',
    img: '/assets/pack-seven.png',
  },
  ritual: {
    id: 'ritual',
    name: 'The Ritual',
    line: 'Thirty 25 ml bottles',
    bottles: 30,
    once: 195,
    subPrice: 165,
    label: 'Best value',
    notes: 'Bright · Herbaceous · Mineral',
    img: '/assets/pack-thirty.png',
  },
  morning: {
    id: 'morning',
    name: 'The Morning Set',
    line: '30 bottles · linen pouch · ritual card',
    bottles: 30,
    once: 240,
    subPrice: 205,
    label: 'Limited',
    notes: 'The complete ritual',
    img: '/assets/pack-pouch.png',
  },
  travel: {
    id: 'travel',
    name: 'The Travel Ritual',
    line: 'Seven shots · zipped travel case',
    bottles: 7,
    once: 65,
    subPrice: null,
    label: 'Travel',
    notes: 'Sunshine you can carry',
    img: '/assets/pack-travel.png',
  },
  gift: {
    id: 'gift',
    name: 'The Gift of Good Mornings',
    line: 'Five shots · gift box · ribbon · card',
    bottles: 5,
    once: 79,
    subPrice: null,
    label: 'Giftable',
    notes: 'Give a better morning',
    img: '/assets/pack-gift.png',
  },
};

export const PRODUCT_IDS = Object.keys(CATALOG) as ProductId[];
export const CORE_PRODUCT_IDS: ProductId[] = ['daily', 'week', 'ritual'];

export const isProductId = (value: string | undefined): value is ProductId =>
  !!value && value in CATALOG;

/** Free-delivery threshold, in euro. */
export const FREE_SHIPPING_THRESHOLD = 49;
export const FLAT_SHIPPING = 6;

export const ANNOUNCEMENTS = [
  'Complimentary delivery on subscriptions',
  'Made with Tuscan EVOO & Amalfi lemon',
  'Take your Mediterranean minute',
  'One shot. One ritual. Every day.',
];

export const ACCORDIONS = [
  {
    id: 'taste',
    title: 'The taste',
    body: 'Bright Amalfi lemon leads, softened by cold-pressed Tuscan olive oil, with a herbaceous wild-mint finish and a whisper of fleur de sel. Rounded, peppery, and unmistakably Mediterranean.',
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    body: 'Tuscan extra virgin olive oil, Amalfi lemon, wild mint, fleur de sel. Full ingredient list and quantities are placeholder pending final formulation.',
  },
  {
    id: 'howto',
    title: 'How to take it',
    body: 'Take one 25 ml shot directly, or pour into an AMUR glass. Enjoy slowly or as a quick ritual. We do not recommend mixing into hot drinks.',
  },
  {
    id: 'when',
    title: 'When to take it',
    body: 'Most enjoy AMUR first thing — before breakfast, before work, or after movement. It is designed to sit within a balanced daily routine.',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    body: 'Nutritional values, allergens, and dietary information are placeholder and will be confirmed for the final product.',
  },
  {
    id: 'delivery',
    title: 'Delivery & returns',
    body: 'Ships in 2–4 days. Complimentary delivery on subscriptions. Returns handled per our (placeholder) returns policy.',
  },
];

export const RITUAL_STEPS = [
  {
    n: '01',
    label: 'Open',
    dur: 8,
    copy: 'Take the bottle out. Break the seal. That is the hardest part of the day, done.',
  },
  {
    n: '02',
    label: 'Breathe',
    dur: 12,
    copy: 'One slow breath through the nose. Citrus and cut grass, before anything else reaches you.',
  },
  {
    n: '03',
    label: 'Take the shot',
    dur: 10,
    copy: 'All 25 ml at once. Let it coat, then swallow. A peppery catch at the back is the good part.',
  },
  {
    n: '04',
    label: 'Pause',
    dur: 20,
    copy: 'Twenty seconds of nothing. No screen, no scroll. Let the day wait for you.',
  },
  {
    n: '05',
    label: 'Begin',
    dur: 10,
    copy: 'Now go. You have already done one thing well, and it is not yet seven.',
  },
];

export const RITUAL_TOTAL = RITUAL_STEPS.reduce((total, step) => total + step.dur, 0);

export const MORNING_SCHEDULE = [
  { offset: 0, title: 'Wake', note: 'Curtains open. Light before screens.', tag: 'Rise', hero: false },
  {
    offset: 10,
    title: 'AMUR, 25 ml',
    note: 'Fasted, undiluted, all at once. The ritual.',
    tag: 'The shot',
    hero: true,
  },
  { offset: 25, title: 'Water', note: 'A full glass, room temperature.', tag: 'Hydrate', hero: false },
  {
    offset: 45,
    title: 'Breakfast',
    note: 'Protein and fibre. The fat has had its window.',
    tag: 'Eat',
    hero: false,
  },
  {
    offset: 90,
    title: 'Move',
    note: 'Walk, Pilates, or the stairs. Anything counts.',
    tag: 'Move',
    hero: false,
  },
];

export const SUB_PLANS: { id: ProductId; name: string; line: string; badge: string | null }[] = [
  { id: 'week', name: 'The Week', line: 'Seven shots monthly', badge: null },
  { id: 'ritual', name: 'The Ritual', line: 'Thirty shots monthly', badge: 'Most popular' },
  { id: 'morning', name: 'The Morning Set', line: 'Thirty shots + objects', badge: null },
];

export const eur = (amount: number) => `€${amount.toFixed(0)}`;

export const priceOf = (id: ProductId, mode: 'once' | 'sub') => {
  const product = CATALOG[id];
  return mode === 'sub' && product.subPrice ? product.subPrice : product.once;
};

export const savingsPercent = (id: ProductId) => {
  const product = CATALOG[id];
  return product.subPrice ? Math.round((1 - product.subPrice / product.once) * 100) : 0;
};
