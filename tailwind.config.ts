import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary gradient colors
        pink: {
          DEFAULT: "#EC4899",
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
        },
        purple: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        // Success colors
        emerald: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        // Achievement colors
        orange: {
          DEFAULT: "#F59E0B",
          500: "#F59E0B",
        },
        red: {
          DEFAULT: "#EF4444",
          500: "#EF4444",
        },
        // Neutrals
        paper: "#FBFAF8",
        ink: "#0E0F12",
        dark: "#0A0A0A",
        border: "#E5E5E5",
        muted: "#737373",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Helvetica Neue"',
          '"Avenir Next"',
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        // Core animations
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        // Streak/gamification animations
        "streak-pulse": "streak-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flame: "flame 1.5s ease-in-out infinite",
        "achievement-unlock": "achievement-unlock 0.6s ease-out forwards",
        "heart-bounce": "heart-bounce 0.6s ease-in-out",
        sparkle: "sparkle 2s ease-in-out infinite",
        // UI animations
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        shimmer: "shimmer 2s infinite",
        rotate: "rotate 20s linear infinite",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "streak-pulse": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1)",
          },
        },
        flame: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.1) rotate(-3deg)" },
          "50%": { transform: "scale(1.15) rotate(0deg)" },
          "75%": { transform: "scale(1.1) rotate(3deg)" },
        },
        "achievement-unlock": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) rotate(-10deg)",
          },
          "50%": {
            transform: "scale(1.15) rotate(5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        "heart-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        sparkle: {
          "0%, 100%": {
            opacity: "0",
            transform: "scale(0) rotate(0deg)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1) rotate(180deg)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(236, 72, 153, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
          },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pink-purple-gradient":
          "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
        "purple-pink-gradient":
          "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        "achievement-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
        "success-gradient":
          "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.3)",
        "glow-pink": "0 0 40px rgba(236, 72, 153, 0.3)",
        "glow-lg":
          "0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(236, 72, 153, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
