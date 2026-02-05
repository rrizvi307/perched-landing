"use client";

import React from "react";
import { Button } from "../ui/Button";
import { DEMO_MODE } from "@/lib/constants";

export function DemoMode() {
  return (
    <section id="demo" className="py-32 lg:py-40 px-6 bg-vibrant-strong">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm">
            <span className="animate-sparkle text-lg">✨</span>
            <span className="text-sm font-medium text-purple-600">
              No download required
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            {DEMO_MODE.headline}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {DEMO_MODE.description}
          </p>
        </div>

        {/* Demo preview card */}
        <div className="gradient-border p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Fake app preview elements */}
            <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-xs text-muted">Friends</div>
              </div>
            </div>
            <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2 animate-flame">🔥</div>
                <div className="text-xs text-muted">Streaks</div>
              </div>
            </div>
            <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">🗺️</div>
                <div className="text-xs text-muted">Discover</div>
              </div>
            </div>
          </div>

          <Button variant="gradient" size="lg" href={DEMO_MODE.url}>
            {DEMO_MODE.cta}
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Works in browser</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Full app experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
