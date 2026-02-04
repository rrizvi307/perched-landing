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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        {/* Copy - centered and cleaner */}
        <div className="text-center space-y-12 mb-20 lg:mb-32">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-ink leading-[1.1]">
              Turn every spot into a streak
            </h1>
            <p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto font-normal">
              The social check-in app that builds habits through streaks, achievements, and real-time friend activity.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToWaitlist}
            >
              {HERO.primaryCTA}
            </Button>
          </div>
        </div>

        {/* Simple visual - just the key stat */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 lg:p-16 text-center border border-purple-100">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-5xl lg:text-6xl">
                <span>🔥</span>
                <span>🏆</span>
                <span>👥</span>
              </div>
              <p className="text-lg lg:text-xl text-ink font-semibold">
                Daily streaks. Unlockable achievements. Live friend activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
