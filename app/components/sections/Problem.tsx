"use client";

import React from "react";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
          {PROBLEM.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROBLEM.painPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-red-100 shadow-sm"
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="inline-block px-8 py-4 rounded-2xl bg-red-50 border border-red-100">
          <p className="text-lg text-red-700 font-medium">
            {PROBLEM.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
