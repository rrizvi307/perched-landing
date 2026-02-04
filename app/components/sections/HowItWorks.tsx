"use client";

import React from "react";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            {HOW_IT_WORKS.headline}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {HOW_IT_WORKS.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step card */}
              <div className="bg-paper rounded-2xl p-8 text-center space-y-4 border-2 border-border hover:border-purple-300 transition-all h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple to-pink text-white font-black text-xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                  {step.icon === "camera" && (
                    <svg
                      className="w-16 h-16 text-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {step.icon === "sparkle" && (
                    <svg
                      className="w-16 h-16 text-pink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  )}
                  {step.icon === "checkmark" && (
                    <div className="relative">
                      <svg
                        className="w-16 h-16 text-emerald"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {/* Streak flame */}
                      <div className="absolute -top-2 -right-2 text-2xl animate-streak-bounce">
                        🔥
                      </div>
                    </div>
                  )}
                </div>

                {/* Title and description */}
                <div>
                  <h3 className="text-2xl font-black text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted">{step.description}</p>
                </div>
              </div>

              {/* Arrow connector (desktop only) */}
              {index < HOW_IT_WORKS.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    className="w-8 h-8 text-purple"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100">
          <p className="text-2xl font-bold text-ink mb-2">
            That's it. Really.
          </p>
          <p className="text-lg text-muted">
            No lengthy forms. No complex setup. Just snap, detect, and check in.
          </p>
        </div>
      </div>
    </section>
  );
}
