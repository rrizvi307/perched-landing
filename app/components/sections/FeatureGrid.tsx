"use client";

import React from "react";
import { FEATURES, VIBE_TAGS } from "@/lib/constants";

export function FeatureGrid() {
  return (
    <section id="features" className="py-32 lg:py-40 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            {FEATURES.headline}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {FEATURES.subheadline}
          </p>
        </div>

        {/* Main features - highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {FEATURES.features
            .filter((f) => f.highlight)
            .map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 border border-border card-hover text-center"
              >
                <div className="text-5xl mb-6">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
        </div>

        {/* Secondary features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {FEATURES.features
            .filter((f) => !f.highlight)
            .map((feature) => (
              <div
                key={feature.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-purple-200 transition-colors"
              >
                <div className="text-3xl">{feature.emoji}</div>
                <div>
                  <h4 className="font-semibold text-ink">{feature.title}</h4>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Vibe tags section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-ink mb-2">
              {VIBE_TAGS.headline}
            </h3>
            <p className="text-muted">{VIBE_TAGS.subheadline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {VIBE_TAGS.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 hover:border-purple-300 transition-colors cursor-pointer hover-scale"
              >
                <span>{tag.emoji}</span>
                <span className="font-medium text-ink">{tag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
