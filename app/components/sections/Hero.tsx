"use client";

import React from "react";
import { Button } from "../ui/Button";
import { HERO, DEMO_MODE } from "@/lib/constants";

export function Hero() {
  const scrollToWaitlist = () => {
    window.history.pushState(null, "", "#waitlist");
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        {/* Hero text */}
        <div className="text-center space-y-8 mb-16 lg:mb-24 animate-slide-up">
          {/* Pre-launch badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-purple-600">
              Launching February 2025
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]">
              <span className="gradient-primary-text">{HERO.headline}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted max-w-2xl mx-auto font-normal">
              {HERO.subheadline}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="gradient" size="lg" onClick={scrollToWaitlist}>
              {HERO.primaryCTA}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={DEMO_MODE.url}
            >
              {HERO.secondaryCTA}
            </Button>
          </div>

          {/* Launch note */}
          <p className="text-sm text-muted">
            {HERO.launchNote}
          </p>
        </div>

        {/* Hero features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto stagger-children">
          {HERO.heroFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center animate-slide-up hover-lift"
            >
              <div className="mb-4">
                {feature.icon === "wifi" && (
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </div>
                )}
                {feature.icon === "users" && (
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                )}
                {feature.icon === "flame" && (
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-achievement flex items-center justify-center">
                    <span className="text-2xl animate-flame">🔥</span>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
