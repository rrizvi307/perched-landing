"use client";

import React from "react";
import { NETWORK_EFFECTS } from "@/lib/constants";

export function NetworkEffects() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            {NETWORK_EFFECTS.headline}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {NETWORK_EFFECTS.subheadline}
          </p>
        </div>

        {/* Flywheel diagram */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {NETWORK_EFFECTS.flywheel.map((step, index) => (
              <React.Fragment key={index}>
                <div className="px-6 py-4 rounded-xl bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm">
                  <span className="text-lg font-bold text-indigo-300">{step}</span>
                </div>
                {index < NETWORK_EFFECTS.flywheel.length - 1 && (
                  <svg className="w-6 h-6 text-indigo-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </React.Fragment>
            ))}
            {/* Loop back arrow */}
            <div className="w-full flex justify-center mt-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-medium">Continuous Growth Cycle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NETWORK_EFFECTS.differentiators.map((diff, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                {diff.icon === "database" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )}
                {diff.icon === "network" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )}
                {diff.icon === "platform" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {diff.title}
              </h3>
              <p className="text-slate-300 mb-4">
                {diff.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {diff.stats.map((stat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-sm font-medium text-emerald-300"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
