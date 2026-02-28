export const SITE = {
  name: "Perched",
  tagline: "Find your spot. Share the vibe.",
  description:
    "Perched helps you discover coffee and work spots through real check-ins, map/list exploration, and social context from friends and campus.",
  email: "perchedappteam@gmail.com",
  instagram: "https://instagram.com/perchedapp",
  tiktok: "https://tiktok.com/@perchedapp",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const HERO = {
  headline: "Coffee discovery with real-time context.",
  subheadline:
    "Explore by list or map, rank spots by coffee intent and vibe fit, and decide faster with live check-in signals.",
  cta: "Open Perched",
  ctaUrl: "https://perched.app",
  secondaryCta: "Contact Support",
  secondaryCtaUrl: `mailto:${SITE.email}`,
  chips: [
    "List and map explore",
    "Intent + vibe ranking",
    "Personalized recommendations",
    "Social feed scopes",
  ],
} as const;

export const PILLARS = [
  {
    title: "Explore With Map + List",
    description:
      "Switch between list and map views, with clustered map markers and quick recentering for nearby spots.",
  },
  {
    title: "Intent-Based Discovery",
    description:
      "Filter by coffee intents and let vibe-aware ranking prioritize the spots that best match your goal.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get recommendations tuned to your check-in patterns, preferred conditions, and current context.",
  },
  {
    title: "Social + Campus Context",
    description:
      "Use Friends features, feed scopes, and campus context to see where people are actually going.",
  },
] as const;

export const FEATURE_ROWS = [
  {
    title: "Explore with clustering",
    description:
      "Explore supports map/list toggle and clustered markers so busy areas stay readable.",
  },
  {
    title: "Coffee intents and vibe-aware ranking",
    description:
      "Discovery intent chips (like coffee quality, deep work, quiet reading, and group study) blend with vibe scoring to rank results.",
  },
  {
    title: "Personalized recommendation engine",
    description:
      "Recommendation cards use personalized and collaborative scoring with intent-aware reasons.",
  },
  {
    title: "Friends tab + request workflows",
    description:
      "Friends supports searching by name, handle, and email, accepting requests, and syncing contacts.",
  },
  {
    title: "Feed scopes and trending spots",
    description:
      "Feed switches between Everyone, Campus, and Friends scopes with trending spots and campus-only context.",
  },
  {
    title: "Rich check-ins",
    description:
      "Check-ins capture noise, crowd, drink quality, drink price, WiFi, outlets, laptop-friendliness, and parking details.",
  },
  {
    title: "Spot intelligence",
    description:
      "Spot detail surfaces Work Score, confidence, highlights, use cases, crowd forecast, and friends here now.",
  },
  {
    title: "Onboarding personalization",
    description:
      "Onboarding asks for location and coffee intents so discovery is personalized from day one.",
  },
] as const;

export const FOOTER = {
  copyright: `(c) ${new Date().getFullYear()} Perched`,
  madeWith: "Built for students, remote workers, and coffee-driven teams.",
} as const;

export const SEO = {
  title: "Perched | Coffee Discovery and Spot Intelligence",
  description:
    "Perched helps you discover cafes and work spots with map/list explore, coffee-intent ranking, social feed scopes, and rich check-in intelligence.",
  keywords: [
    "coffee discovery app",
    "work score cafes",
    "social check-ins",
    "campus feed",
    "study spots",
    "cafe recommendations",
  ],
} as const;

