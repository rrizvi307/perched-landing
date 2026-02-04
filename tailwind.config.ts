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
        // New vibrant brand colors
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
        // Keep some legacy colors for smooth transition
        paper: "#FBFAF8",
        ink: "#0E0F12",
        border: "#E7E8EC",
        muted: "#6B6F76",
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
      animation: {
        // Streak animations
        "streak-pulse": "streak-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "streak-bounce": "streak-bounce 1s ease-in-out infinite",
        "achievement-unlock": "achievement-unlock 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        // Float animation for mockups
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
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
        "streak-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "achievement-unlock": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) rotate(-10deg)",
          },
          "50%": {
            transform: "scale(1.1) rotate(5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-pink-gradient":
          "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
