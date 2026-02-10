// Single source of truth for all landing page content and configuration

export const SITE_CONFIG = {
  name: "Perched",
  url: "https://perched.app",
  description:
    "Find the best coffee shops, libraries, and workspaces near you with real-time WiFi, noise, and busyness data — all from verified students and remote workers.",
  email: "hello@perched.app",
  demoUrl: "https://demo.perched.app",
  launchDate: "February 2025",
} as const;

export const HERO = {
  headline: "Find Your Perfect Spot",
  subheadline: "Real-time WiFi, noise, and busyness data from verified students and remote workers.",
  description:
    "Stop wasting time at bad spots. See WiFi quality, noise levels, and how busy places are before you arrive.",
  primaryCTA: "Join the Waitlist",
  secondaryCTA: "Try Interactive Demo",
  launchNote: "Launching on iOS in February 2025. Be first to know.",
  demoVideoUrl: "https://youtube.com/shorts/1_BXGl4nvM8?si=qffXDiYx1JiOWwFT",
  heroFeatures: [
    {
      icon: "wifi",
      title: "Real-Time Metrics",
      description: "WiFi quality, noise levels, and busyness—before you arrive",
    },
    {
      icon: "users",
      title: "Live Presence",
      description: "See who's at a spot right now with 'here now' status",
    },
    {
      icon: "flame",
      title: "Build Your Streak",
      description: "Daily check-ins like Duolingo with badges and leaderboards",
    },
  ],
} as const;

// New section: Problem Statement
export const PROBLEM = {
  headline: "Tired of Wasting Time at Bad Spots?",
  painPoints: [
    {
      emoji: "🔌",
      title: "No outlets when you arrive",
    },
    {
      emoji: "📶",
      title: "WiFi too slow to get work done",
    },
    {
      emoji: "🔊",
      title: "Too loud to focus",
    },
  ],
} as const;

// New section: See Before You Go (Real-time Intelligence)
export const REAL_TIME = {
  headline: "See Before You Go",
  subheadline: "Perched shows you what matters most",
  features: [
    {
      icon: "wifi",
      title: "Real-Time Metrics",
      description: "Check WiFi quality, noise levels, and busyness before you arrive",
    },
    {
      icon: "users",
      title: "Live Presence",
      description: "See who's at a spot right now with 'here now' status",
    },
    {
      icon: "clock",
      title: "Popular Hours",
      description: "Know when spots are busiest throughout the day",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  headline: "Find Better Spots in 3 Steps",
  subheadline: "It takes 10 seconds to help your community",
  steps: [
    {
      number: 1,
      title: "Explore",
      description: "Browse spots on a map with real-time WiFi, noise, and busyness metrics",
      icon: "map",
    },
    {
      number: 2,
      title: "Check In",
      description: "Rate WiFi, noise, and busyness when you arrive (takes 10 seconds)",
      icon: "camera",
    },
    {
      number: 3,
      title: "Share",
      description: "Help others discover great spots and build your streak",
      icon: "share",
    },
  ],
} as const;

export const SOCIAL_DISCOVERY = {
  headline: "Find Your People",
  subheadline: "Connect with classmates and build your study squad",
  features: [
    {
      icon: "friends",
      title: "Smart Friend Requests",
      description: "See mutual friends before connecting—know who you know",
    },
    {
      icon: "suggestions",
      title: "Classmate Suggestions",
      description: "Discover students from your classes and campus",
    },
    {
      icon: "verified",
      title: "Campus Verified",
      description: "Only real students with .edu email verification",
    },
    {
      icon: "feed",
      title: "Real-time Activity",
      description: "See where your network is studying right now",
    },
  ],
} as const;

export const GAMIFICATION = {
  headline: "Stay Motivated",
  subheadline: "Turn studying into a game with streaks and achievements",
  streaks: [
    {
      days: 3,
      title: "Getting Started",
      tier: "bronze",
      emoji: "🥉",
    },
    {
      days: 7,
      title: "Building Momentum",
      tier: "silver",
      emoji: "🥈",
    },
    {
      days: 30,
      title: "Habit Formed",
      tier: "gold",
      emoji: "🥇",
    },
    {
      days: 100,
      title: "Elite Explorer",
      tier: "platinum",
      emoji: "💎",
    },
  ],
  achievements: [
    {
      id: "explorer",
      name: "Explorer",
      description: "Check in at 10 different spots",
      emoji: "🗺️",
    },
    {
      id: "night-owl",
      name: "Night Owl",
      description: "Check in after 10 PM",
      emoji: "🦉",
    },
    {
      id: "social-butterfly",
      name: "Social Butterfly",
      description: "Check in with friends 5 times",
      emoji: "🦋",
    },
    {
      id: "loyal-regular",
      name: "Loyal Regular",
      description: "Visit the same spot 20 times",
      emoji: "❤️",
    },
  ],
  reactions: ["🔥", "☕", "📚", "🎉", "❤️", "👍"],
} as const;

// Updated: Campus Launch section with transparency
export const CAMPUS_LAUNCH = {
  headline: "Rolling Out Campus by Campus",
  subheadline: "Starting at top universities this February",
  description: "We're launching first at select campuses to build the best experience. Want us at your campus? Join the waitlist and we'll notify you when we arrive.",
  campuses: [
    "Rice University",
    "UT Austin",
    "UCLA",
    "Stanford",
    "MIT",
  ],
  cta: "Request Your Campus",
} as const;

export const VIBE_TAGS = {
  headline: "Filter by What Matters",
  subheadline: "Find exactly what you need",
  tags: [
    { name: "Fast WiFi", emoji: "📶" },
    { name: "Quiet", emoji: "🤫" },
    { name: "Outlets", emoji: "🔌" },
    { name: "Bright", emoji: "☀️" },
    { name: "Cozy", emoji: "🛋️" },
    { name: "Late-night", emoji: "🌙" },
  ],
} as const;

export const DEMO_MODE = {
  headline: "Try Before You Download",
  subheadline: "Experience Perched instantly in your browser",
  description:
    "No sign-up required. Explore the full app experience with demo data and see why students love Perched.",
  cta: "Launch Interactive Demo",
  url: "https://demo.perched.app",
} as const;

// Updated: Pre-launch appropriate social proof
export const STATS = {
  items: [
    { value: "500+", label: "On the Waitlist" },
    { value: "5", label: "Launch Campuses" },
    { value: "Feb 2025", label: "iOS Launch" },
    { value: "Free", label: "Forever" },
  ],
} as const;

export const FEATURES = {
  headline: "Everything You Need",
  subheadline: "Built for students, designed for productivity",
  features: [
    {
      id: "metrics",
      emoji: "📶",
      title: "Real-Time Metrics",
      description: "WiFi quality, noise levels, and busyness data",
      highlight: true,
    },
    {
      id: "friends",
      emoji: "👥",
      title: "Friend Activity",
      description: "See where your friends are studying right now",
      highlight: true,
    },
    {
      id: "streaks",
      emoji: "🔥",
      title: "Daily Streaks",
      description: "Build habits with Duolingo-style gamification",
      highlight: true,
    },
    {
      id: "campus",
      emoji: "🎓",
      title: "Campus Verified",
      description: "Connect with verified .edu students only",
      highlight: false,
    },
    {
      id: "vibes",
      emoji: "✨",
      title: "Vibe Tags",
      description: "Filter by WiFi, Quiet, Outlets, and more",
      highlight: false,
    },
    {
      id: "achievements",
      emoji: "🏆",
      title: "Achievements",
      description: "Unlock 25+ badges for exploring",
      highlight: false,
    },
  ],
} as const;

// Updated FAQ with launch-related questions
export const FAQ = {
  headline: "Questions",
  questions: [
    {
      question: "When does Perched launch?",
      answer:
        "We're launching on iOS in February 2025. Join the waitlist to be notified the moment we go live!",
    },
    {
      question: "Which campuses can I use it at?",
      answer:
        "We're starting at Rice University, UT Austin, UCLA, Stanford, and MIT. Expanding to 20+ campuses in the following months. Request your campus by joining the waitlist!",
    },
    {
      question: "Is Perched really free?",
      answer:
        "Yes! Free forever with unlimited check-ins, streaks, and friend connections. Premium ($4.99/mo) unlocks advanced filters, ad-free experience, and exclusive leaderboards.",
    },
    {
      question: "How does the real-time data work?",
      answer:
        "When users check in, they rate WiFi quality (1-5 stars), noise level (Quiet/Moderate/Lively), and how busy it is. This crowd-sourced data is shown to everyone in real-time.",
    },
    {
      question: "How does Perched protect my privacy?",
      answer:
        "Your location is NEVER shared publicly. Only you can see your exact location. Friends see 'here now' status (within 2 hours) but not your precise coordinates.",
    },
    {
      question: "Can I use Perched without a .edu email?",
      answer:
        "Yes! Anyone can use Perched to find great study spots and build streaks. Campus features like classmate discovery require .edu verification.",
    },
    {
      question: "When is Android coming?",
      answer:
        "We're launching on iOS first to perfect the experience. Android is coming soon—join the waitlist to be notified!",
    },
  ],
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Perched`,
  email: "hello@perched.app",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  sections: {
    product: {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Demo", href: "https://demo.perched.app" },
        { label: "Waitlist", href: "#waitlist" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Press Kit", href: "/press" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact", href: "mailto:hello@perched.app" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
    social: {
      title: "Follow Our Journey",
      links: [
        { label: "Instagram", href: "https://instagram.com/perchedapp" },
        { label: "TikTok", href: "https://tiktok.com/@perchedapp" },
        { label: "Twitter", href: "https://twitter.com/perchedapp" },
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
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Join Waitlist",
} as const;

export const WAITLIST_FORM = {
  headline: "Be First to Find Your Perfect Spot",
  description: "Launching on iOS in February 2025. Join the waitlist to get notified when we go live.",
  tallyFormUrl: "https://tally.so/r/J9OXpz",
  primaryCTA: "Join the Waitlist",
  privacyNote: "We'll only email you when we launch. No spam.",
} as const;

// Social CTA section
export const SOCIAL_CTA = {
  headline: "Follow Our Launch Journey",
  description: "Join 500+ students following @perchedapp for launch updates",
  links: [
    { label: "Instagram", href: "https://instagram.com/perchedapp", icon: "instagram" },
    { label: "Twitter", href: "https://twitter.com/perchedapp", icon: "twitter" },
    { label: "TikTok", href: "https://tiktok.com/@perchedapp", icon: "tiktok" },
  ],
} as const;

// Color palette (for reference)
export const COLORS = {
  // Primary gradient
  pink: "#EC4899",
  purple: "#8B5CF6",
  deepPurple: "#7C3AED",
  // Achievement gradients
  orange: "#F59E0B",
  red: "#EF4444",
  // Success gradient
  emerald: "#10B981",
  emeraldDark: "#059669",
  // Neutrals
  white: "#FFFFFF",
  dark: "#0A0A0A",
  muted: "#737373",
  border: "#E5E5E5",
  paper: "#FBFAF8",
  ink: "#0E0F12",
} as const;

// SEO
export const SEO = {
  title: "Perched - Find Great Coffee Shops & Study Spots with Real-Time Data",
  description:
    "Discover the best places to work and study with real-time WiFi, noise, and busyness data. Join 500+ students and remote workers finding their perfect spot.",
  keywords: [
    "study spots",
    "coffee shop wifi",
    "coworking spaces",
    "library finder",
    "campus study spots",
    "real-time wifi data",
    "productivity app",
    "study buddy",
    "college productivity",
  ],
} as const;
