"use client";

import React from "react";
import { B2B_PLATFORM } from "@/lib/constants";

export function B2BPlatform() {
  return (
    <section id="b2b" className="py-24 lg:py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Enterprise Ready
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            {B2B_PLATFORM.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {B2B_PLATFORM.subheadline}
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* API Column */}
          <div className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{B2B_PLATFORM.api.title}</h3>
                <p className="text-sm text-slate-500">{B2B_PLATFORM.api.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6">
              {B2B_PLATFORM.api.description}
            </p>

            {/* Pricing tiers */}
            <div className="space-y-3 mb-6">
              {B2B_PLATFORM.api.tiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div>
                    <span className="font-semibold text-slate-900">{tier.name}</span>
                    <span className="text-sm text-slate-500 ml-2">{tier.requests}</span>
                  </div>
                  <span className="font-bold text-indigo-600">{tier.price}</span>
                </div>
              ))}
            </div>

            <a
              href="/docs/api"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
            >
              {B2B_PLATFORM.api.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Dashboard Column */}
          <div className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{B2B_PLATFORM.dashboard.title}</h3>
                <p className="text-sm text-slate-500">{B2B_PLATFORM.dashboard.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6">
              {B2B_PLATFORM.dashboard.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {B2B_PLATFORM.dashboard.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Starting at <span className="font-bold text-slate-900">{B2B_PLATFORM.dashboard.price}</span></span>
              <a
                href="mailto:business@perched.app"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
              >
                {B2B_PLATFORM.dashboard.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Revenue potential */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <h3 className="text-xl font-bold mb-6 text-center">{B2B_PLATFORM.revenue.headline}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {B2B_PLATFORM.revenue.streams.map((stream, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-sm text-indigo-200 mb-1">{stream.name}</p>
                <p className="text-2xl font-bold">{stream.potential}</p>
                <p className="text-xs text-indigo-300">{stream.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold">
            Total Potential: <span className="text-2xl">{B2B_PLATFORM.revenue.total}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
