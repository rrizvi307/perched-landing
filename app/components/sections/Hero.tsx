"use client";

import React from "react";
import { Button } from "../ui/Button";
import { HERO } from "@/lib/constants";

export function Hero() {
  const scrollToWaitlist = () => {
    // Update URL hash
    window.history.pushState(null, "", "#waitlist");

    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="demo"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white"
    >
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ink leading-tight">
              {HERO.headline.split(".").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                  {i < HERO.headline.split(".").length - 1 && "."}
                </span>
              ))}
            </h1>
            <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto lg:mx-0">
              {HERO.subheadline}
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in">
            <div className="px-4 py-2 bg-white rounded-full border-2 border-purple-200 text-sm font-bold text-purple flex items-center gap-2">
              <span className="text-lg">🔥</span>
              Daily Streaks
            </div>
            <div className="px-4 py-2 bg-white rounded-full border-2 border-pink-200 text-sm font-bold text-pink flex items-center gap-2">
              <span className="text-lg">🏆</span>
              Achievements
            </div>
            <div className="px-4 py-2 bg-white rounded-full border-2 border-emerald-200 text-sm font-bold text-emerald flex items-center gap-2">
              <span className="text-lg">👥</span>
              Friend Activity
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToWaitlist}
              className="shadow-2xl shadow-purple/30 hover:shadow-purple/50"
            >
              {HERO.primaryCTA} →
            </Button>
            <Button variant="ghost" size="lg" href="#demo-video">
              {HERO.secondaryCTA}
            </Button>
          </div>
        </div>

        {/* Right: Animated mockup */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Floating animation container */}
            <div className="animate-float">
              {/* Phone mockup placeholder */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 border-8 border-gray-900">
                <div className="relative bg-gradient-to-br from-purple to-pink rounded-2xl aspect-[9/19] overflow-hidden">
                  {/* Mockup content - placeholder for now */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-6">
                    {/* Simulated check-in flow */}
                    <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-3 animate-slide-up">
                      <div className="w-full h-32 bg-white/20 rounded-lg" />
                      <div className="h-4 bg-white/30 rounded w-3/4" />
                      <div className="h-4 bg-white/30 rounded w-1/2" />
                    </div>

                    {/* Streak notification */}
                    <div className="w-full bg-white rounded-2xl p-4 shadow-xl space-y-2 animate-achievement-unlock">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl animate-streak-bounce">
                          🔥
                        </span>
                        <div>
                          <p className="font-bold text-ink text-sm">
                            7-Day Streak!
                          </p>
                          <p className="text-xs text-muted">Keep it going!</p>
                        </div>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-achievement-unlock delay-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🏆
                      </div>
                      <div>
                        <p className="font-bold text-ink text-sm">Explorer</p>
                        <p className="text-xs text-muted">10 spots visited</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating reaction emojis */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-streak-pulse">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="absolute top-1/3 -left-4 bg-white rounded-full p-3 shadow-lg animate-streak-pulse delay-200">
                <span className="text-2xl">☕</span>
              </div>
              <div className="absolute bottom-1/4 -right-6 bg-white rounded-full p-3 shadow-lg animate-streak-pulse delay-500">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
