"use client";

import React from "react";
import { CAMPUS_LAUNCH } from "@/lib/constants";

export function CampusLaunch() {
  const scrollToWaitlist = () => {
    window.history.pushState(null, "", "#waitlist");
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            {CAMPUS_LAUNCH.headline}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {CAMPUS_LAUNCH.subheadline}
          </p>
        </div>

        {/* Campus list */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CAMPUS_LAUNCH.campuses.map((campus, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100"
            >
              <span className="font-medium text-ink">{campus}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted max-w-2xl mx-auto mb-8">
          {CAMPUS_LAUNCH.description}
        </p>

        {/* CTA */}
        <button
          onClick={scrollToWaitlist}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-semibold hover:bg-ink/90 transition-colors"
        >
          {CAMPUS_LAUNCH.cta}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
