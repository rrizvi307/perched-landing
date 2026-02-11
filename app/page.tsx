"use client";

import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Solution } from "./components/sections/Solution";
import { NetworkEffects } from "./components/sections/NetworkEffects";
import { B2BPlatform } from "./components/sections/B2BPlatform";
import { ComparisonTable } from "./components/sections/ComparisonTable";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Gamification } from "./components/sections/Gamification";
import { SocialProof } from "./components/sections/SocialProof";
import { FINAL_CTA, FAQ, FOOTER, NAVIGATION } from "./lib/constants";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label={NAVIGATION.logo.alt}>
            <span className="text-2xl font-black text-white">
              {NAVIGATION.logo.alt}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="px-6 py-2.5 bg-white text-slate-900 font-semibold rounded-full text-sm hover:bg-slate-100 transition-colors"
          >
            {NAVIGATION.cta}
          </a>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* 1. Hero - Above the fold */}
        <Hero />

        {/* 2. Problem - Pain points */}
        <Problem />

        {/* 3. Solution - Real-time intelligence */}
        <Solution />

        {/* 4. Network Effects - Data moat */}
        <NetworkEffects />

        {/* 5. B2B Platform - API & Business Dashboard */}
        <B2BPlatform />

        {/* 6. Competitive Positioning */}
        <ComparisonTable />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Gamification - Repositioned as engagement driver */}
        <Gamification />

        {/* 9. Social Proof */}
        <SocialProof />

        {/* 10. Final CTA */}
        <section id="download" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              {FINAL_CTA.headline}
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              {FINAL_CTA.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {FINAL_CTA.primaryCTA}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                {FINAL_CTA.secondaryCTA}
              </a>
            </div>

            <a
              href="#b2b"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors"
            >
              {FINAL_CTA.tertiaryCTA}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="text-sm text-indigo-200 mt-8">
              {FINAL_CTA.trustNote}
            </p>
          </div>
        </section>

        {/* FAQ section */}
        <section id="faq" className="py-24 lg:py-32 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900">
                {FAQ.headline}
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ.questions.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 p-6 flex items-center justify-between">
                    <span>{item.question}</span>
                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 lg:py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl font-black mb-4 block">Perched</span>
              <p className="text-sm text-slate-400 max-w-xs">
                {FOOTER.tagline}
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.product.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.product.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.developers.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.developers.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.business.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.business.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.company.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.company.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">{FOOTER.copyright}</p>

              <div className="flex items-center gap-6">
                {FOOTER.links.map((link) => (
                  <a
                    key={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                  href={`mailto:${FOOTER.email}`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
