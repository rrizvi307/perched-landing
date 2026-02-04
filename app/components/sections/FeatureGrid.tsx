"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FEATURES } from "@/lib/constants";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-32 lg:py-40 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-32 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            Everything you need
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Simple features that keep you motivated
          </p>
        </div>

        {/* Feature grid - only show top 3 features prominently */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {FEATURES.features.slice(0, 3).map((feature) => (
            <div key={feature.id} className="text-center space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 text-5xl">
                <span>{feature.emoji}</span>
              </div>

              {/* Title and description */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features - simple list */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {FEATURES.features.slice(3).map((feature) => (
              <div key={feature.id} className="space-y-2">
                <div className="text-3xl">{feature.emoji}</div>
                <h4 className="text-sm font-semibold text-ink">
                  {feature.title}
                </h4>
                {feature.comingSoon && (
                  <Badge variant="coming-soon" className="text-xs">
                    Coming Soon
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
