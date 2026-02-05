"use client";

import React from "react";
import { GAMIFICATION } from "@/lib/constants";

export function Gamification() {
  return (
    <section id="gamification" className="py-32 lg:py-40 px-6 bg-mesh-dark text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            {GAMIFICATION.headline}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {GAMIFICATION.subheadline}
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Streaks */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl animate-flame">🔥</span>
              <h3 className="text-2xl font-bold">Daily Streaks</h3>
            </div>

            <div className="space-y-4">
              {GAMIFICATION.streaks.map((streak, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl">{streak.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{streak.days} Days</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
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
                    <p className="text-sm text-white/60">{streak.title}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-lg font-bold gradient-primary-text">
                      {streak.days}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🏆</span>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {GAMIFICATION.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors card-hover text-center"
                >
                  <div className="text-4xl mb-3">{achievement.emoji}</div>
                  <h4 className="font-bold text-sm mb-1">{achievement.name}</h4>
                  <p className="text-xs text-white/50">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Reactions */}
            <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-4">React to Check-ins</h4>
              <div className="flex items-center justify-center gap-4">
                {GAMIFICATION.reactions.map((reaction, index) => (
                  <button
                    key={index}
                    className="text-3xl hover:scale-125 transition-transform"
                  >
                    {reaction}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
