"use client";

import React from "react";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 lg:py-40 px-6 bg-paper"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            How it works
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Three simple steps
          </p>
        </div>

        {/* Steps - simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Step content */}
              <div className="space-y-6">
                {/* Icon - simple, no busy animations */}
                <div className="flex items-center justify-center">
                  {step.icon === "camera" && (
                    <svg
                      className="w-12 h-12 text-ink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {step.icon === "sparkle" && (
                    <svg
                      className="w-12 h-12 text-ink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  )}
                  {step.icon === "checkmark" && (
                    <svg
                      className="w-12 h-12 text-ink"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>

                {/* Title and description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
