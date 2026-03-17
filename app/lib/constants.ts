export type ShowcaseImage = {
  src: string;
  alt: string;
};

export const SITE = {
  name: "Perched",
  description:
    "Perched helps you discover coffee shops and third places with real-time check-ins on noise, crowd level, price, quality, and vibe.",
  email: "perchedappteam@gmail.com",
  instagram: "https://instagram.com/perchedapp",
  tiktok: "https://tiktok.com/@perchedapp",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const HERO = {
  title: "Perched",
  tagline: "Find your spot. Share the vibe.",
  subline:
    "Check in at cafes, libraries, parks, and co-working spaces to share live signals and help people find the right spot.",
  cta: "Available on App Store Soon",
  ctaUrl: "#",
} as const;

export const SHOWCASE_IMAGES: readonly ShowcaseImage[] = [
  {
    src: "/screenshots/explore-map.png",
    alt: "Perched explore map screen with nearby spots and discovery filters.",
  },
  {
    src: "/screenshots/explore-ranking.png",
    alt: "Perched recommendations screen with ranked spots and work scores.",
  },
  {
    src: "/screenshots/spot-detail.png",
    alt: "Perched spot detail screen with work score, crowd level, and community tags.",
  },
  {
    src: "/screenshots/check-in-tags.png",
    alt: "Perched check-in screen with caption, tags, and visit intent.",
  },
  {
    src: "/screenshots/feed-overview.png",
    alt: "Perched community feed showing recent activity and check-ins.",
  },
  {
    src: "/screenshots/profile-overview.png",
    alt: "Perched profile screen showing check-ins, saved spots, and streak progress.",
  },
] as const;

export const FEATURES = [
  "Find the best coffee shops and study spots nearby, rated by real people in real time",
  "Know before you go: see how busy, loud, and pricey a spot is right now",
  "Share your favorite third places with friends",
  "Build a social map of your city's best spots",
] as const;

export const FOOTER = {
  madeWith: "Made in Houston",
} as const;

export const SEO = {
  title: "Perched | Find your spot. Share the vibe.",
  description: SITE.description,
  keywords: [
    "Perched app",
    "coffee shops",
    "third places",
    "check-ins",
    "study spots",
    "workspace finder",
  ],
} as const;
