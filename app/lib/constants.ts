// Single source of truth for all landing page content and configuration
// POSITIONING: Real-time location intelligence platform with data moat

export const SITE_CONFIG = {
  name: "Perched",
  url: "https://perched.app",
  description:
    "Real-time WiFi, noise, and busyness data from thousands of verified users. Know before you go. Never arrive to a bad spot again.",
  email: "hello@perched.app",
  demoUrl: "https://demo.perched.app",
  appStoreUrl: "#", // Update when live
} as const;

export const HERO = {
  headline: "Never Arrive to a Bad Spot Again",
  subheadline: "Real-time WiFi, noise, and busyness data from thousands of verified users. Know before you go.",
  primaryCTA: "Download Free",
  secondaryCTA: "See How It Works",
  trustIndicators: [
    "1,000+ active students",
    "500+ spots with real-time data",
    "Updated every 5 minutes",
  ],
} as const;

export const PROBLEM = {
  headline: "We've All Been There",
  subheadline: "The average student wastes 2 hours per week finding good study spots. That's 80 hours per year.",
  painPoints: [
    {
      emoji: "📶",
      title: "Bad WiFi",
      description: "Arrive at a coffee shop, no WiFi. Wasted 20 minutes.",
    },
    {
      emoji: "🔊",
      title: "Too Loud",
      description: "Need quiet focus, walk into chaos. Leave frustrated.",
    },
    {
      emoji: "🪑",
      title: "Too Crowded",
      description: "No outlets, no seats. Time wasted searching.",
    },
  ],
} as const;

export const SOLUTION = {
  headline: "Know Before You Go",
  subheadline: "Real-Time Intelligence from Real People",
  features: [
    {
      icon: "metrics",
      title: "Real-Time Metrics",
      description: "WiFi quality (1-5 scale), noise level, busyness, and power outlets—all updated live.",
      metrics: ["📶 WiFi Quality", "🔊 Noise Level", "👥 Busyness", "🔌 Outlets"],
    },
    {
      icon: "crowd",
      title: "Crowd-Sourced Data",
      description: "Every check-in updates the intelligence. See what it's like RIGHT NOW, not last week.",
    },
    {
      icon: "predict",
      title: "Predictive Recommendations",
      description: "'Usually busy right now—try Blue Bottle instead.' Smart filters for exactly what you need.",
    },
    {
      icon: "live",
      title: "Live Activity Feed",
      description: "See where friends are RIGHT NOW. Social proof drives quality data collection.",
    },
  ],
  tagline: "The More We Grow, The Smarter We Get—Our Data Is Impossible to Replicate",
} as const;

export const NETWORK_EFFECTS = {
  headline: "The Perched Advantage",
  subheadline: "A Data Moat That Grows Stronger Every Day",
  flywheel: [
    "More Users",
    "More Check-Ins",
    "Better Data",
    "Better Predictions",
    "More Value",
  ],
  differentiators: [
    {
      icon: "database",
      title: "Proprietary Dataset",
      description: "Google can't buy this data. Foursquare doesn't have it. We own it.",
      stats: ["10,000+ check-ins", "Updated every 5 min", "Real-time accuracy"],
    },
    {
      icon: "network",
      title: "Network Effects",
      description: "First-mover advantage in real-time workspace intelligence. Dataset compounds over time.",
      stats: ["More history = better predictions", "Community-driven accuracy"],
    },
    {
      icon: "platform",
      title: "Platform Play",
      description: "Not just an app—it's an intelligence API for developers and businesses.",
      stats: ["B2B API live", "Enterprise ready", "Multiple revenue streams"],
    },
  ],
} as const;

export const B2B_PLATFORM = {
  headline: "Beyond Consumer",
  subheadline: "A Platform for Location Intelligence",
  api: {
    title: "B2B API",
    subtitle: "For Developers & Businesses",
    description: "Integrate real-time spot data into your app. Delivery routing, urban planning, real estate valuation.",
    tiers: [
      { name: "Free", requests: "100 req/hr", price: "$0" },
      { name: "Pro", requests: "10k req/hr", price: "$299/mo" },
      { name: "Enterprise", requests: "Unlimited", price: "Custom" },
    ],
    cta: "Explore API Docs",
  },
  dashboard: {
    title: "Business Dashboard",
    subtitle: "For Coffee Shop Owners",
    description: "Understand your customers like never before. Check-in trends, peak hours, competitive benchmarking.",
    features: ["Check-in analytics", "Peak hours insights", "Customer demographics", "Competitor intel"],
    price: "$99-299/mo",
    cta: "Request Demo",
  },
  revenue: {
    headline: "Revenue Potential",
    streams: [
      { name: "Consumer Premium", value: "$4.99/mo", potential: "$2M ARR" },
      { name: "B2B API", value: "Usage-based", potential: "$1M+ ARR" },
      { name: "Business Dashboard", value: "$99-299/mo", potential: "$1.8M ARR" },
    ],
    total: "$5M+ ARR in 18 months",
  },
} as const;

export const COMPARISON = {
  headline: "Why Perched Beats the Alternatives",
  tagline: "Google tells you WHERE. Perched tells you HOW IT IS RIGHT NOW.",
  competitors: ["Google Maps", "Foursquare", "Yelp", "Perched"],
  features: [
    { name: "Real-Time WiFi Quality", google: false, foursquare: false, yelp: false, perched: true },
    { name: "Real-Time Noise Level", google: false, foursquare: false, yelp: false, perched: true },
    { name: "Real-Time Busyness", google: "partial", foursquare: false, yelp: false, perched: true },
    { name: "See Friends Right Now", google: false, foursquare: false, yelp: false, perched: true },
    { name: "Crowd-Sourced from Students", google: false, foursquare: false, yelp: "partial", perched: true },
    { name: "Predictive Recommendations", google: "partial", foursquare: false, yelp: false, perched: true },
    { name: "Update Frequency", google: "Hours/Days", foursquare: "Months", yelp: "Months", perched: "Minutes" },
  ],
} as const;

export const HOW_IT_WORKS = {
  headline: "3 Steps to Never Waste Time Again",
  subheadline: "Find your perfect spot in under a minute",
  steps: [
    {
      number: 1,
      title: "Discover Nearby Spots",
      description: "See spots on the map with real-time metrics. Filter by: Good WiFi, Quiet, Not Busy, Has Outlets.",
      icon: "map",
    },
    {
      number: 2,
      title: "Check Real-Time Intelligence",
      description: "See what it's like RIGHT NOW from recent check-ins. Read comments: 'Super quiet today!' or 'WiFi is slow.'",
      icon: "metrics",
    },
    {
      number: 3,
      title: "Check In & Contribute",
      description: "Rate WiFi, noise, and busyness (takes 10 seconds). Earn XP, build streaks, help thousands of others.",
      icon: "checkin",
    },
  ],
} as const;

// Gamification repositioned as engagement driver for data collection
export const GAMIFICATION = {
  headline: "Gamification That Builds Better Data",
  subheadline: "Fun features that keep you coming back—and make our intelligence smarter",
  message: "Every check-in makes Perched smarter for everyone.",
  features: [
    {
      icon: "streak",
      title: "Streaks & Badges",
      description: "Build daily check-in streaks like Duolingo. Unlock badges: Explorer, Local Legend, Campus Ambassador.",
    },
    {
      icon: "friends",
      title: "Friend Discovery",
      description: "See where friends are RIGHT NOW with 'Here Now' status. Social proof encourages quality check-ins.",
    },
    {
      icon: "leaderboard",
      title: "Leaderboards",
      description: "Campus leaderboards for top explorers. Weekly challenges drive engagement and data collection.",
    },
  ],
  streakTiers: [
    { days: 3, tier: "bronze", emoji: "🥉" },
    { days: 7, tier: "silver", emoji: "🥈" },
    { days: 30, tier: "gold", emoji: "🥇" },
    { days: 100, tier: "platinum", emoji: "💎" },
  ],
} as const;

export const SOCIAL_PROOF = {
  headline: "Trusted by Students at Top Universities",
  campuses: ["Rice University", "UT Austin", "UCLA", "Stanford", "MIT"],
  stats: [
    { value: "1,000+", label: "Active Users" },
    { value: "10,000+", label: "Check-Ins" },
    { value: "500+", label: "Verified Spots" },
    { value: "4.8★", label: "Average Rating" },
  ],
  testimonials: [
    {
      quote: "I used to waste so much time finding quiet coffee shops. Perched solved that.",
      name: "Sarah",
      campus: "Rice '25",
    },
    {
      quote: "The WiFi ratings are insanely accurate. I never show up to a spot with bad internet anymore.",
      name: "Mike",
      campus: "UT Austin '24",
    },
    {
      quote: "Seeing where my friends are in real-time is a game-changer for study sessions.",
      name: "Emily",
      campus: "UCLA '26",
    },
  ],
} as const;

export const FINAL_CTA = {
  headline: "Join the Movement",
  subheadline: "Never Arrive to a Bad Spot Again",
  primaryCTA: "Download Free on App Store",
  secondaryCTA: "Join Waitlist for Android",
  tertiaryCTA: "Explore API for Developers",
  trustNote: "Free forever. Premium features from $4.99/mo. No credit card required.",
} as const;

export const FAQ = {
  headline: "Questions",
  questions: [
    {
      question: "How is Perched different from Google Maps?",
      answer:
        "Google tells you WHERE a place is. Perched tells you HOW IT IS RIGHT NOW. We provide real-time WiFi quality, noise levels, and busyness—data that Google doesn't have and can't easily replicate.",
    },
    {
      question: "How does the real-time data work?",
      answer:
        "When users check in, they rate WiFi quality (1-5 stars), noise level (Quiet/Moderate/Loud), and busyness. This crowd-sourced data is aggregated and shown in real-time. The more users, the more accurate the data.",
    },
    {
      question: "Is Perched free?",
      answer:
        "Yes! The core app is free forever with unlimited check-ins, real-time metrics, and friend features. Premium ($4.99/mo) unlocks advanced filters, predictive recommendations, and exclusive analytics.",
    },
    {
      question: "Do you have a B2B API?",
      answer:
        "Yes! Our API provides real-time location intelligence for developers and businesses. Use cases include delivery routing, urban planning, and real estate valuation. Free tier available for testing.",
    },
    {
      question: "How does Perched protect my privacy?",
      answer:
        "Your exact location is never shared publicly. Friends see 'here now' status (within 2 hours) but not precise coordinates. You control what you share with privacy settings.",
    },
    {
      question: "When is Android coming?",
      answer:
        "We're launching on iOS first to perfect the experience. Join the waitlist for Android—we'll notify you as soon as it's ready!",
    },
  ],
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Perched`,
  email: "hello@perched.app",
  tagline: "Real-time location intelligence for students and remote workers.",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  sections: {
    product: {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Download", href: "#download" },
      ],
    },
    developers: {
      title: "Developers",
      links: [
        { label: "API Documentation", href: "/docs/api" },
        { label: "API Pricing", href: "#b2b" },
        { label: "Status", href: "/status" },
      ],
    },
    business: {
      title: "Business",
      links: [
        { label: "Business Dashboard", href: "#b2b" },
        { label: "Enterprise", href: "mailto:enterprise@perched.app" },
        { label: "Partnerships", href: "mailto:partnerships@perched.app" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "mailto:hello@perched.app" },
      ],
    },
  },
} as const;

export const NAVIGATION = {
  logo: {
    src: "/perched-mark.png",
    alt: "Perched",
    width: 32,
    height: 32,
  },
  links: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "API", href: "#b2b" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Download Free",
} as const;

// Color palette - Bold, trustworthy (blues/purples for intelligence/data)
export const COLORS = {
  // Primary - Intelligence/Data focused
  primary: "#6366F1", // Indigo
  primaryDark: "#4F46E5",
  // Accent - Real-time updates
  accent: "#10B981", // Emerald for "live" indicators
  accentOrange: "#F59E0B", // For warnings/alerts
  // Gradients
  gradientStart: "#6366F1",
  gradientEnd: "#8B5CF6",
  // Neutrals
  white: "#FFFFFF",
  dark: "#0F172A", // Slate-900
  muted: "#64748B", // Slate-500
  border: "#E2E8F0", // Slate-200
  paper: "#F8FAFC", // Slate-50
  ink: "#0F172A",
} as const;

// SEO - Intelligence platform positioning
export const SEO = {
  title: "Perched - Real-Time WiFi, Noise & Busyness Data for Study Spots",
  description:
    "Never arrive to a bad spot again. Get real-time WiFi quality, noise levels, and busyness data from thousands of verified users. Know before you go.",
  keywords: [
    "real-time wifi finder",
    "coffee shop wifi quality",
    "quiet study spots",
    "workspace busyness",
    "location intelligence",
    "crowd-sourced data",
    "study spot finder",
    "coworking space finder",
    "noise level app",
    "wifi rating app",
  ],
} as const;
