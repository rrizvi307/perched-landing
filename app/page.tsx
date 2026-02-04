"use client";

import React from "react";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { NAVIGATION, WAITLIST_FORM, FAQ, FOOTER } from "./lib/constants";

export default function Page() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-paper/75 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label={NAVIGATION.logo.alt}>
            <img
              src={NAVIGATION.logo.src}
              alt={NAVIGATION.logo.alt}
              width={NAVIGATION.logo.width}
              height={NAVIGATION.logo.height}
              className="rounded-full border border-border shadow-sm"
            />
            <span className="font-black text-ink">{NAVIGATION.logo.alt}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WAITLIST_FORM.tallyFormUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-purple text-white font-bold rounded-full text-sm hover:bg-purple-600 transition-colors"
          >
            {NAVIGATION.cta}
          </a>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <HowItWorks />
        <FeatureGrid />

        {/* Waitlist section (keeping existing for now) */}
        <section id="waitlist" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-ink mb-4">
                {WAITLIST_FORM.headline}
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                {WAITLIST_FORM.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start bg-white border-2 border-border rounded-2xl p-8">
              <div className="space-y-6">
                <p className="text-xs font-bold tracking-widest text-muted uppercase">
                  WAITLIST
                </p>
                <p className="text-base text-muted leading-relaxed">
                  Prefer a quick link?{" "}
                  <a
                    className="text-purple font-bold hover:text-purple-600"
                    href={WAITLIST_FORM.tallyFormUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open the form
                  </a>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-bold rounded-full hover:bg-purple-600 transition-colors"
                    href={WAITLIST_FORM.tallyFormUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {WAITLIST_FORM.primaryCTA}
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink border-2 border-border font-bold rounded-full hover:bg-paper transition-colors"
                    href={`mailto:${FOOTER.email}`}
                  >
                    {WAITLIST_FORM.secondaryCTA}
                  </a>
                </div>
              </div>

              <div className="w-full">
                <iframe
                  className="w-full min-h-[560px] border-2 border-border rounded-xl bg-paper"
                  src={`${WAITLIST_FORM.tallyFormUrl}?hideTitle=1&transparentBackground=1`}
                  title="Waitlist form"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section (keeping existing for now) */}
        <section id="faq" className="py-20 px-6 bg-paper">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-ink">
                {FAQ.headline}
              </h2>
            </div>

            <div className="bg-white border-2 border-border rounded-2xl overflow-hidden">
              {FAQ.questions.map((item, index) => (
                <details
                  key={index}
                  className="border-t border-border first:border-t-0 p-6"
                >
                  <summary className="cursor-pointer font-black text-ink hover:text-purple transition-colors">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">{FOOTER.copyright}</span>
          <div className="flex items-center gap-4">
            <a
              className="text-sm text-muted hover:text-ink font-bold transition-colors"
              href={`mailto:${FOOTER.email}`}
            >
              Email
            </a>
            <span className="w-1 h-1 rounded-full bg-muted" />
            {FOOTER.links.map((link, index) => (
              <React.Fragment key={link.href}>
                <a
                  className="text-sm text-muted hover:text-ink font-bold transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
                {index < FOOTER.links.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-muted" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
