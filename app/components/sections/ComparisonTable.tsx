"use client";

import React from "react";
import { COMPARISON } from "@/lib/constants";

export function ComparisonTable() {
  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }
    if (value === "partial") {
      return (
        <div className="flex justify-center">
          <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Partial</span>
        </div>
      );
    }
    // Text value (like "Hours/Days")
    return (
      <div className="text-center text-sm font-medium text-slate-600">
        {value}
      </div>
    );
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            {COMPARISON.headline}
          </h2>
          <p className="text-xl text-indigo-600 font-semibold">
            {COMPARISON.tagline}
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-slate-200 bg-slate-50 rounded-tl-xl">
                  <span className="text-slate-600 font-medium">Feature</span>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-center">
                  <span className="text-slate-600 font-medium">Google Maps</span>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-center">
                  <span className="text-slate-600 font-medium">Foursquare</span>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-center">
                  <span className="text-slate-600 font-medium">Yelp</span>
                </th>
                <th className="p-4 border-b border-slate-200 bg-indigo-600 text-center rounded-tr-xl">
                  <span className="text-white font-bold">Perched</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-4 border-b border-slate-100">
                    <span className="font-medium text-slate-900">{feature.name}</span>
                  </td>
                  <td className="p-4 border-b border-slate-100">
                    {renderCell(feature.google)}
                  </td>
                  <td className="p-4 border-b border-slate-100">
                    {renderCell(feature.foursquare)}
                  </td>
                  <td className="p-4 border-b border-slate-100">
                    {renderCell(feature.yelp)}
                  </td>
                  <td className="p-4 border-b border-slate-100 bg-indigo-50">
                    {renderCell(feature.perched)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Partial</span>
            <span>Limited Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Not Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
