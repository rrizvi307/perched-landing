"use client";

import React from "react";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink mb-12">
          {PROBLEM.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEM.painPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl bg-red-50 border border-red-100"
            >
              <span className="text-4xl mb-4">{point.emoji}</span>
              <p className="text-lg font-medium text-ink">{point.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
