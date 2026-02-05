// Single source of truth for all landing page content and configuration

export const SITE_CONFIG = {
  name: "Perched",
  url: "https://perched.app",
  description:
    "Discover coffee shops, libraries, and coworking spaces where your friends and classmates are working. Build streaks, unlock achievements, and connect with your campus community.",
  email: "hello@perched.app",
  demoUrl: "https://demo.perched.app",
} as const;

export const HERO = {
  headline: "Stop Working Alone.",
  subheadline: "Find Your Perfect Spot & Squad.",
  description:
    "Discover coffee shops, libraries, and coworking spaces—then see who from your campus is there right now.",
  primaryCTA: "Download for iOS",
  secondaryCTA: "Watch Demo",
  tertiaryCTA: "Try Interactive Demo",
  demoVideoUrl: "https://youtube.com/shorts/1_BXGl4nvM8?si=qffXDiYx1JiOWwFT",
  heroFeatures: [
    {
      icon: "campus",
      title: "Campus Connect",
      description: "University verification and classmate discovery",
    },
    {
      icon: "camera",
      title: "Smart Check-ins",
      description: "Photo-based location detection with vibe tagging",
    },
    {
      icon: "flame",
      title: "Gamification",
      description: "Daily streaks and leaderboards",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  headline: "How It Works",
  subheadline: "Join your campus community in three simple steps",
  steps: [
    {
      number: 1,
      title: "Join Your Campus",
      description: "Verify with your .edu email to connect with classmates",
      icon: "university",
    },
    {
      number: 2,
      title: "Check In & Tag Vibes",
      description: "Snap a photo, add vibe tags, and share your spot",
      icon: "camera",
    },
    {
      number: 3,
      title: "Build Your Network",
      description: "Send friend requests, build streaks, and level up together",
      icon: "network",
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

export const CAMPUS_INTEGRATION = {
  headline: "Your Campus, Connected",
  subheadline: "Join thousands of students already on Perched",
  features: [
    {
      icon: "sync",
      title: "University Sync",
      description: "Automatically connect with your campus community",
    },
    {
      icon: "badge",
      title: "Campus Badges",
      description: "Earn exclusive badges for your school",
    },
    {
      icon: "verify",
      title: "Email Verification",
      description: "Secure .edu verification keeps it real",
    },
    {
      icon: "connect",
      title: "Smart Connections",
      description: "Get suggested friends from your school",
    },
  ],
} as const;

export const VIBE_TAGS = {
  headline: "Find Your Perfect Vibe",
  subheadline: "Filter spots by what matters to you",
  tags: [
    { name: "WiFi", emoji: "📶" },
    { name: "Quiet", emoji: "🤫" },
    { name: "Outlets", emoji: "🔌" },
    { name: "Bright", emoji: "☀️" },
    { name: "Cozy", emoji: "🛋️" },
    { name: "Late-night", emoji: "🌙" },
  ],
} as const;

export const PREMIUM_EXPERIENCE = {
  headline: "Silicon Valley Polish",
  subheadline: "A premium experience you'll actually want to use",
  features: [
    {
      title: "Lightning Fast",
      description: "Native performance that never lags",
      icon: "bolt",
    },
    {
      title: "Beautiful Design",
      description: "Thoughtful details at every touchpoint",
      icon: "sparkle",
    },
    {
      title: "Dark Mode",
      description: "Easy on the eyes during late-night sessions",
      icon: "moon",
    },
    {
      title: "Native Feel",
      description: "Feels like it belongs on your phone",
      icon: "phone",
    },
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

export const STATS = {
  items: [
    { value: "10K+", label: "Active Students" },
    { value: "50+", label: "Universities" },
    { value: "100K+", label: "Check-ins Shared" },
    { value: "85%", label: "Keep Their Streak" },
  ],
} as const;

export const FOR_UNIVERSITIES = {
  headline: "For University Administrators",
  subheadline: "Partner with Perched to boost student engagement",
  description:
    "Learn how universities are using Perched to help students find study partners, build community, and improve campus life.",
  cta: "Learn More",
  email: "partnerships@perched.app",
} as const;

export const FEATURES = {
  headline: "Everything You Need",
  subheadline: "Built for students, designed for connection",
  features: [
    {
      id: "friends",
      emoji: "👥",
      title: "Friend Requests",
      description: "Connect with classmates with mutual friend previews",
      highlight: true,
    },
    {
      id: "campus",
      emoji: "🎓",
      title: "Campus Verification",
      description: "Verified .edu emails keep your community authentic",
      highlight: true,
    },
    {
      id: "streaks",
      emoji: "🔥",
      title: "Daily Streaks",
      description: "Build habits with 3, 7, 30, and 100-day milestones",
      highlight: true,
    },
    {
      id: "reactions",
      emoji: "❤️",
      title: "Reactions",
      description: "React to check-ins with fire, coffee, and more",
      highlight: false,
    },
    {
      id: "vibes",
      emoji: "✨",
      title: "Vibe Tags",
      description: "WiFi, Quiet, Outlets—find exactly what you need",
      highlight: false,
    },
    {
      id: "achievements",
      emoji: "🏆",
      title: "Achievements",
      description: "Unlock badges for exploring and building habits",
      highlight: false,
    },
  ],
} as const;

export const FAQ = {
  headline: "Questions",
  questions: [
    {
      question: "Is Perched free?",
      answer:
        "Yes! Perched is completely free. We believe in building community first. Core features like check-ins, streaks, and friend connections will always be free.",
    },
    {
      question: "How does campus verification work?",
      answer:
        "Sign up with your .edu email and we'll send a verification link. Once verified, you'll automatically connect with your campus community and get access to campus-specific features.",
    },
    {
      question: "What are streaks?",
      answer:
        "Check in once per day to build your streak. Hit milestones at 3, 7, 30, and 100 days to unlock achievements and climb the leaderboards. Miss a day and your streak resets—but you can always start again!",
    },
    {
      question: "Can I use Perched without a .edu email?",
      answer:
        "Yes! Anyone can use Perched to find great study spots and build streaks. Campus features like classmate discovery require .edu verification.",
    },
    {
      question: "Is my location always visible?",
      answer:
        "You choose when to share. Check-ins can be shared with friends only, or kept completely private while still building your streak.",
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
        { label: "Download", href: "#download" },
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
      title: "Social",
      links: [
        { label: "Instagram", href: "https://instagram.com/perchedapp" },
        { label: "TikTok", href: "https://tiktok.com/@perchedapp" },
        { label: "Twitter", href: "https://twitter.com/perchedapp" },
        { label: "Discord", href: "https://discord.gg/perched" },
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
  cta: "Download",
} as const;

export const WAITLIST_FORM = {
  headline: "Join the Squad",
  description: "Be the first to find your perfect study spot and connect with your campus.",
  tallyFormUrl: "https://tally.so/r/J9OXpz",
  primaryCTA: "Join the Waitlist",
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
  title: "Perched - Find Your Perfect Study Spot & Squad",
  description:
    "Discover coffee shops, libraries, and coworking spaces where your friends and classmates are working. Build streaks, unlock achievements, and connect with your campus community.",
  keywords: [
    "study spots",
    "coworking spaces",
    "campus friends",
    "college productivity",
    "student networking",
    "productivity gamification",
    "study buddy",
    "library finder",
    "coffee shop wifi",
  ],
} as const;
