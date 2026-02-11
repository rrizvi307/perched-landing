"use client";

import React from "react";
import { GAMIFICATION } from "@/lib/constants";

export function Gamification() {
  return (
    <section id="gamification" className="py-24 lg:py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header with badge */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Engagement = Better Data
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {GAMIFICATION.headline}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {GAMIFICATION.subheadline}
          </p>
        </div>

        {/* Three feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GAMIFICATION.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                {feature.icon === "streak" && (
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                )}
                {feature.icon === "friends" && (
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
                {feature.icon === "leaderboard" && (
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Streak tiers */}
        <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">🔥</span>
            <h3 className="text-xl font-semibold text-white">Build Your Streak</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {GAMIFICATION.streakTiers.map((streak, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50"
              >
                <span className="text-2xl">{streak.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{streak.days} Days</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                        streak.tier === "bronze"
                          ? "bg-orange-500/20 text-orange-400"
                          : streak.tier === "silver"
                          ? "bg-gray-400/20 text-gray-300"
                          : streak.tier === "gold"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-purple-400/20 text-purple-300"
                      }`}
                    >
                      {streak.tier}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message */}
          <p className="text-center text-amber-400/80 font-medium">
            {GAMIFICATION.message}
          </p>
        </div>
      </div>
    </section>
  );
}
