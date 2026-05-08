export const SITE = {
  name: "Perched",
  description:
    "Perched helps you discover coffee shops and third places with real-time check-ins on noise, crowd level, price, quality, and vibe.",
  email: "perchedappteam@gmail.com",
  instagram: "https://instagram.com/perchedapp",
  tiktok: "https://tiktok.com/@perchedapp",
} as const;

export const HERO = {
  title: "find your spot. share the vibe.",
  subline:
    "Check in at cafes, libraries, parks, and co-working spaces to share live signals and help people find the right spot.",
  cta: "Download on the App Store",
  ctaUrl: "https://apps.apple.com/us/app/perched-find-great-spots/id6759113835",
} as const;

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
