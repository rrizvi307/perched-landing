"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FEATURES } from "@/lib/constants";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            {FEATURES.headline}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {FEATURES.subheadline}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.features.map((feature, index) => (
            <Card
              key={feature.id}
              hover
              gradient={feature.highlight}
              className={`relative ${
                feature.highlight ? "lg:col-span-3 lg:row-span-1" : ""
              }`}
            >
              {/* Coming Soon badge */}
              {feature.comingSoon && (
                <div className="absolute top-4 right-4">
                  <Badge variant="coming-soon">Coming Soon</Badge>
                </div>
              )}

              {/* Feature content */}
              <div
                className={`space-y-4 ${
                  feature.highlight ? "lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0" : ""
                }`}
              >
                {/* Left: Icon and content */}
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center rounded-2xl ${
                      feature.highlight
                        ? "w-20 h-20 bg-gradient-to-br from-purple to-pink text-4xl"
                        : "w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 text-3xl"
                    }`}
                  >
                    <span>{feature.emoji}</span>
                  </div>

                  {/* Title and description */}
                  <div>
                    <h3
                      className={`font-black ${
                        feature.highlight ? "text-3xl" : "text-2xl"
                      } text-ink mb-2`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`${
                        feature.highlight ? "text-lg" : "text-base"
                      } text-muted`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={
                          tag === "Coming Soon"
                            ? "coming-soon"
                            : feature.highlight
                            ? "purple"
                            : "default"
                        }
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right: Details (only for highlighted feature) */}
                {feature.highlight && (
                  <div className="space-y-4 lg:border-l-2 lg:border-purple-200 lg:pl-8">
                    <p className="text-base text-ink leading-relaxed">
                      {feature.details}
                    </p>

                    {/* Stat callout */}
                    {feature.stat && (
                      <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                        <p className="text-sm font-bold text-purple">
                          {feature.stat}
                        </p>
                      </div>
                    )}

                    {/* Streak milestones visual */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { days: 3, emoji: "🥉" },
                        { days: 7, emoji: "🥈" },
                        { days: 30, emoji: "🥇" },
                        { days: 100, emoji: "💎" },
                      ].map((milestone) => (
                        <div
                          key={milestone.days}
                          className="bg-white rounded-lg p-3 text-center border-2 border-border hover:border-purple-300 transition-all"
                        >
                          <div className="text-2xl mb-1">{milestone.emoji}</div>
                          <p className="text-xs font-bold text-ink">
                            {milestone.days}d
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details for non-highlighted features */}
                {!feature.highlight && feature.details && (
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.details}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted mb-4">
            And that's just the beginning. More features launching soon.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center text-purple font-bold hover:text-purple-600 transition-colors"
          >
            Join the waitlist to get early access →
          </a>
        </div>
      </div>
    </section>
  );
}
