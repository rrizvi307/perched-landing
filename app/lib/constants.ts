// Single source of truth for all landing page content and configuration

export const SITE_CONFIG = {
  name: "Perched",
  url: "https://perched.app",
  description:
    "The social check-in app with streaks, achievements, and real-time friend activity. Find your perfect spot and build habits that stick.",
  email: "hello@perched.app",
} as const;

export const HERO = {
  headline: "Turn Every Spot Into a Streak. Check in. Level up. Never work alone.",
  subheadline:
    "The social check-in app with streaks, achievements, and real-time friend activity. Find your perfect spot and build habits that stick.",
  primaryCTA: "Join the Waitlist",
  secondaryCTA: "Watch Demo",
  demoVideoUrl: "https://youtube.com/shorts/1_BXGl4nvM8?si=qffXDiYx1JiOWwFT",
} as const;

export const HOW_IT_WORKS = {
  headline: "How It Works",
  subheadline: "From photo to check-in in seconds",
  steps: [
    {
      number: 1,
      title: "Snap",
      description: "Take a photo of your spot",
      icon: "camera",
    },
    {
      number: 2,
      title: "Detect",
      description: "AI instantly identifies the location",
      icon: "sparkle",
    },
    {
      number: 3,
      title: "Check in",
      description: "Add vibe tags and share with friends",
      icon: "checkmark",
    },
  ],
} as const;

export const FEATURES = {
  headline: "Everything you need to find your perfect spot",
  subheadline: "Built for productivity, designed for exploration",
  features: [
    {
      id: "streaks",
      icon: "flame",
      emoji: "🔥",
      title: "Streaks & Achievements",
      description: "Build daily check-in streaks - 3, 7, 30, 100 days",
      details:
        "Unlock achievements: Explorer, Night Owl, Social Butterfly, Loyal Regular. Stay motivated with bronze, silver, gold, and platinum tiers.",
      stat: "+40% daily engagement with gamification",
      tags: ["Habit Building", "Motivation", "Rewards"],
      highlight: true, // Most important feature
      comingSoon: false,
    },
    {
      id: "detection",
      icon: "target",
      emoji: "🎯",
      title: "Instant Spot Detection",
      description: "Snap a photo. AI detects your spot in seconds.",
      details:
        "Tag the vibe: Quiet, WiFi, Outlets, Coworking, Late-night. No endless reviews. Real vibes from real check-ins.",
      tags: ["AI-Powered", "Fast", "Accurate"],
      highlight: false,
      comingSoon: false,
    },
    {
      id: "social",
      icon: "users",
      emoji: "👥",
      title: "Social Feed & Reactions",
      description: "See friends working nearby RIGHT NOW",
      details:
        "React with 🔥 ☕ 📚 🎉 ❤️ 👍 to show love. Your friends are 2 blocks away. Meet up spontaneously.",
      tags: ["Real-time", "Community", "FOMO"],
      highlight: false,
      comingSoon: false,
    },
    {
      id: "insights",
      icon: "chart",
      emoji: "📊",
      title: "Personal Insights",
      description: "Track your top spots, study patterns, and productivity",
      details:
        "See your check-in history and streak milestones. Discover your most productive times and favorite locations.",
      tags: ["Analytics", "Patterns", "Growth"],
      highlight: false,
      comingSoon: false,
    },
    {
      id: "leaderboards",
      icon: "trophy",
      emoji: "🏆",
      title: "Leaderboards & Competition",
      description: "Compete with friends for longest streaks",
      details:
        "Become a Regular at your favorite spots. See who's the most dedicated explorer in your crew.",
      tags: ["Coming Soon", "Competition", "Social"],
      highlight: false,
      comingSoon: true,
    },
    {
      id: "recaps",
      icon: "palette",
      emoji: "🎨",
      title: "Beautiful Weekly Recaps",
      description: "Auto-generated story cards perfect for Instagram",
      details:
        "Show off your week's adventures with aesthetic recap cards. One tap to share your productivity journey.",
      tags: ["Shareable", "Aesthetic", "Stories"],
      highlight: false,
      comingSoon: false,
    },
  ],
} as const;

export const SOCIAL_PROOF = {
  headline: "Join the founding crew",
  subheadline: "Join 10,000+ students and remote workers building spot-finding habits",
  testimonials: [
    {
      quote: "I've discovered 20+ coffee shops I never knew existed",
      author: "Sarah",
      location: "Austin",
      avatar: "/images/avatars/sarah.jpg", // Placeholder
    },
    {
      quote: "My 47-day streak keeps me motivated to explore new places",
      author: "Mike",
      location: "San Francisco",
      avatar: "/images/avatars/mike.jpg", // Placeholder
    },
    {
      quote: "Finally found my perfect study spot thanks to real vibe tags",
      author: "Emma",
      location: "New York",
      avatar: "/images/avatars/emma.jpg", // Placeholder
    },
  ],
} as const;

export const COMPARISON = {
  headline: "Why Perched wins",
  subheadline: "We're built different",
  competitors: [
    {
      name: "Yelp",
      logo: "yelp",
    },
    {
      name: "Google Maps",
      logo: "google",
    },
    {
      name: "Perched",
      logo: "perched",
      highlight: true,
    },
  ],
  features: [
    {
      name: "Real-time activity",
      yelp: false,
      google: false,
      perched: true,
    },
    {
      name: "Friend check-ins",
      yelp: false,
      google: false,
      perched: true,
    },
    {
      name: "Streaks & achievements",
      yelp: false,
      google: false,
      perched: true,
    },
    {
      name: "Work-focused tags",
      yelp: false,
      google: false,
      perched: true,
    },
    {
      name: "Instant check-in",
      yelp: false,
      google: false,
      perched: true,
    },
    {
      name: "Current data",
      yelp: false,
      google: false,
      perched: true,
      note: "Not 2-year-old reviews",
    },
  ],
  callout: "Real-time data from actual check-ins, not outdated reviews",
} as const;

export const GAMIFICATION = {
  headline: "Built to be addictive",
  subheadline: "Gamification that keeps you exploring",
  streaks: [
    {
      days: 3,
      title: "3-Day Streak",
      description: "Getting started",
      tier: "bronze",
      unlocked: true,
    },
    {
      days: 7,
      title: "7-Day Streak",
      description: "Building momentum",
      tier: "silver",
      unlocked: true,
    },
    {
      days: 30,
      title: "30-Day Streak",
      description: "Habit formed",
      tier: "gold",
      unlocked: false,
    },
    {
      days: 100,
      title: "100-Day Streak",
      description: "Elite explorer",
      tier: "platinum",
      unlocked: false,
    },
  ],
  achievements: [
    {
      id: "explorer",
      name: "Explorer",
      description: "Check in at 10 different spots",
      icon: "map",
      tier: "bronze",
    },
    {
      id: "night-owl",
      name: "Night Owl",
      description: "Check in after 10 PM",
      icon: "moon",
      tier: "silver",
    },
    {
      id: "social-butterfly",
      name: "Social Butterfly",
      description: "Check in with friends 5 times",
      icon: "butterfly",
      tier: "gold",
    },
    {
      id: "loyal-regular",
      name: "Loyal Regular",
      description: "Visit the same spot 20 times",
      icon: "heart",
      tier: "platinum",
    },
  ],
} as const;

export const COMMUNITY = {
  headline: "Work is better together",
  subheadline: "See what your crew is up to",
  features: [
    "Real-time friend activity feed",
    "See who's working nearby",
    "Spontaneous meetups",
    "React to friend check-ins",
    "Build habits together",
  ],
} as const;

export const FAQ = {
  headline: "Frequently asked questions",
  questions: [
    {
      question: "When can I try it?",
      answer:
        "We're launching on iOS soon! Join the waitlist to get early access and be part of the founding crew.",
    },
    {
      question: "Is this for iOS only?",
      answer:
        "We're starting with iOS to nail the experience. Android is coming after we perfect the core features based on your feedback.",
    },
    {
      question: "How does 'vibe' work?",
      answer:
        "When you check in, you tag the spot's vibe - Quiet, WiFi, Outlets, Coworking, Late-night, etc. No generic 5-star ratings, just real attributes that matter for work.",
    },
    {
      question: "How do streaks work?",
      answer:
        "Check in once per day to build your streak. Miss a day and it resets. Hit milestones at 3, 7, 30, and 100 days to unlock special achievements.",
    },
    {
      question: "Can I check in privately?",
      answer:
        "Yes! You can choose to share check-ins with friends only, or keep them completely private while still building your streak.",
    },
    {
      question: "What are achievements?",
      answer:
        "Unlock badges for exploring new spots, late-night work sessions, checking in with friends, and becoming a regular at your favorites. Bronze, silver, gold, and platinum tiers.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes! Perched is free forever. We're exploring premium features like advanced analytics and exclusive badges, but core check-ins and streaks will always be free.",
    },
    {
      question: "How do you detect spots?",
      answer:
        "Our AI analyzes your photo and location to instantly identify the venue. If it can't find a match, you can quickly add it to our database.",
    },
  ],
} as const;

export const FINAL_CTA = {
  headline: "Ready to build your streak?",
  subheadline: "Join thousands of explorers finding their perfect spots",
  benefits: [
    "Build daily check-in streaks",
    "Unlock achievements and badges",
    "Discover spots your friends love",
    "Track your productivity patterns",
    "Never work alone again",
  ],
  cta: "Join the Waitlist",
  trustSignal: "iOS launch coming soon",
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Perched`,
  email: "hello@perched.app",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const NAVIGATION = {
  logo: {
    src: "/perched-mark.png",
    alt: "Perched",
    width: 24,
    height: 24,
  },
  links: [
    { label: "Demo", href: "#demo" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Join",
} as const;

export const WAITLIST_FORM = {
  headline: "Join the founding crew",
  description:
    "Be the first to build your streak. Get early access to Perched before the public launch.",
  tallyFormUrl: "https://tally.so/r/J9OXpz",
  primaryCTA: "Join the Waitlist",
  secondaryCTA: "Contact Us",
} as const;

// Color palette (for reference)
export const COLORS = {
  purple: "#8B5CF6",
  pink: "#EC4899",
  emerald: "#10B981",
  red: "#EF4444",
  orange: "#F59E0B",
  blue: "#3B82F6",
  paper: "#FBFAF8",
  ink: "#0E0F12",
  border: "#E7E8EC",
  muted: "#6B6F76",
} as const;
