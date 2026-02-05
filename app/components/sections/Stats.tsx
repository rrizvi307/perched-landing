"use client";

import React from "react";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-20 px-6 bg-white border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.items.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-primary-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
