// Perched Landing Page - Clean, honest, minimal
// A social check-in app for discovering third places

export const SITE = {
  name: "Perched",
  tagline: "Find your spot. Share the vibe.",
  description: "A social check-in app for discovering cafes, parks, libraries, and other third places where life happens beyond home and work.",
  email: "perchedappteam@gmail.com",
  instagram: "https://instagram.com/perchedapp",
  tiktok: "https://tiktok.com/@perchedapp",
  privacy: "https://spot-app-ce2d8.web.app/privacy-policy.html",
  terms: "https://spot-app-ce2d8.web.app/terms-of-service.html",
} as const;

export const HERO = {
  headline: "Find your spot. Share the vibe.",
  subheadline: "Discover cafes, parks, and cozy corners through friends who've actually been there.",
  cta: "Download on TestFlight",
  ctaUrl: "#", // Update when live
} as const;

export const FEATURES = [
  {
    icon: "checkin",
    title: "Check in",
    description: "Share where you're hanging out with photos, captions, and workspace ratings (WiFi, noise, outlets).",
  },
  {
    icon: "discover",
    title: "Discover spots",
    description: "Find nearby third places on the map with real ratings from people you trust.",
  },
  {
    icon: "feed",
    title: "See what's good",
    description: "Your feed shows where friends are and what they think. React, save, plan your next visit.",
  },
  {
    icon: "insights",
    title: "Spot insights",
    description: "Get the real scoop on any place—busyness, WiFi quality, vibe—from community check-ins.",
  },
] as const;

export const ABOUT = {
  headline: "Third places matter",
  text: "We spend too much time at home and at work. The best moments happen in between—at the coffee shop where you finally finished that project, the park bench where you had that conversation, the library corner that became your second office. Perched helps you find more of those spots.",
} as const;

export const PREMIUM = {
  headline: "Premium",
  price: "$4.99/mo",
  yearlyPrice: "$49.99/yr",
  description: "Coming soon",
  features: [
    "Advanced filters",
    "Custom spot lists",
    "Export your history",
    "Ad-free experience",
  ],
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Perched`,
  madeWith: "Made with care in Houston",
} as const;

// Brand colors from the app
export const COLORS = {
  purple: "#8B5CF6",
  purpleDark: "#7C3AED",
  purpleDeep: "#6D28D9",
  pink: "#EC4899",
  background: "#FBFAF8",
  text: "#1F2937",
  textMuted: "#6B7280",
  white: "#FFFFFF",
} as const;

export const SEO = {
  title: "Perched — Find your spot. Share the vibe.",
  description: "A social check-in app for discovering cafes, parks, libraries, and other third places. See where friends hang out and find your next favorite spot.",
  keywords: [
    "third places",
    "cafe finder",
    "social check-in",
    "workspace finder",
    "coworking spots",
    "study spots",
  ],
} as const;
