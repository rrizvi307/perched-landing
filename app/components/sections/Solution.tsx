"use client";

import React from "react";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <section id="features" className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            {SOLUTION.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {SOLUTION.subheadline}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SOLUTION.features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                {feature.icon === "metrics" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                {feature.icon === "crowd" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
                {feature.icon === "predict" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {feature.icon === "live" && (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {feature.description}
              </p>

              {/* Metrics badges (for first feature) */}
              {"metrics" in feature && feature.metrics && (
                <div className="flex flex-wrap gap-2">
                  {feature.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="inline-block px-6 py-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
            {SOLUTION.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
