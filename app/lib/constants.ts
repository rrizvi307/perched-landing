export type ShowcaseImage = {
  src: string;
  alt: string;
};

export type StoryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
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
  cta: "Download on the App Store",
  ctaUrl: "https://apps.apple.com/us/app/perched-find-great-spots/id6759113835",
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
    src: "/screenshots/feed-overview.png",
    alt: "Perched community feed showing recent activity and check-ins.",
  },
  {
    src: "/screenshots/marcus-johnson-checkin.png",
    alt: "Perched feed card showing Marcus Johnson's check-in at Boomtown Coffee with a photo and note.",
  },
  {
    src: "/screenshots/achievements.png",
    alt: "Perched achievements screen showing check-in streaks and exploration milestones.",
  },
] as const;

export const CHECKIN_FLOW_IMAGES: readonly StoryImage[] = [
  {
    src: "/screenshots/check-in-flow-vibe.png",
    alt: "Perched check-in flow screen for adding vibe tags, visit intent, and ambiance details.",
    title: "What you add while posting",
    description: "Users tag the visit, their intent, and the feel of the space in a few taps.",
  },
  {
    src: "/screenshots/check-in-flow-spot-intel.png",
    alt: "Perched check-in flow screen for rating noise, crowd level, drink price, drink quality, WiFi speed, and outlet availability.",
    title: "Signals behind the scores",
    description: "Those structured inputs power place scores and make recommendations smarter over time.",
  },
  {
    src: "/screenshots/spot-detail.png",
    alt: "Perched spot detail screen showing a place's work score, crowd level, and community tags.",
    title: "Where that data ends up",
    description: "Check-in signals roll into the place view so people can compare spots faster.",
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
