"use client";

import React from "react";
import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8">
            {SOCIAL_PROOF.headline}
          </h2>

          {/* Campus logos/names */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {SOCIAL_PROOF.campuses.map((campus, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm"
              >
                <span className="font-medium text-slate-700">{campus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {SOCIAL_PROOF.stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 text-center"
            >
              <p className="text-4xl lg:text-5xl font-black text-indigo-600 mb-2">
                {stat.value}
              </p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOCIAL_PROOF.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <svg className="w-8 h-8 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-slate-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.campus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
