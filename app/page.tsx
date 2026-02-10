"use client";

import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { RealTime } from "./components/sections/RealTime";
import { Stats } from "./components/sections/Stats";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { SocialDiscovery } from "./components/sections/SocialDiscovery";
import { Gamification } from "./components/sections/Gamification";
import { CampusLaunch } from "./components/sections/CampusLaunch";
import { DemoMode } from "./components/sections/DemoMode";
import { WAITLIST_FORM, FAQ, FOOTER, NAVIGATION, SOCIAL_CTA } from "./lib/constants";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label={NAVIGATION.logo.alt}
          >
            <span className="text-2xl font-black gradient-primary-text">
              {NAVIGATION.logo.alt}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#waitlist"
            className="btn-gradient px-6 py-2.5 text-white font-semibold rounded-full text-sm"
          >
            {NAVIGATION.cta}
          </a>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <Problem />
        <RealTime />
        <Stats />
        <HowItWorks />
        <FeatureGrid />
        <SocialDiscovery />
        <Gamification />
        <CampusLaunch />
        <DemoMode />

        {/* Waitlist section */}
        <section id="waitlist" className="py-32 lg:py-40 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
                {WAITLIST_FORM.headline}
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                {WAITLIST_FORM.description}
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 border border-purple-100 shadow-lg">
              <iframe
                className="w-full min-h-[450px] rounded-xl"
                src={`${WAITLIST_FORM.tallyFormUrl}?hideTitle=1&transparentBackground=1`}
                title="Waitlist form"
              />
            </div>

            <p className="text-sm text-muted mt-6">
              {WAITLIST_FORM.privacyNote}
            </p>
          </div>
        </section>

        {/* Social CTA section */}
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-ink mb-2">
              {SOCIAL_CTA.headline}
            </h3>
            <p className="text-muted mb-8">{SOCIAL_CTA.description}</p>
            <div className="flex justify-center gap-4">
              {SOCIAL_CTA.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-medium hover:bg-ink/90 transition-colors"
                >
                  {link.icon === "instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {link.icon === "twitter" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {link.icon === "tiktok" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section id="faq" className="py-32 lg:py-40 px-6 bg-paper">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
                {FAQ.headline}
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ.questions.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white border border-border rounded-xl overflow-hidden hover:border-purple-200 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold text-ink p-6 flex items-center justify-between">
                    <span>{item.question}</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 lg:py-24 px-6 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl font-black gradient-primary-text mb-4 block">
                Perched
              </span>
              <p className="text-sm text-white/60 max-w-xs">
                Find your perfect study spot with real-time WiFi, noise, and busyness data.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.product.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.product.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
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
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.support.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.support.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">{FOOTER.sections.social.title}</h4>
              <ul className="space-y-3">
                {FOOTER.sections.social.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/40">{FOOTER.copyright}</p>

              <div className="flex items-center gap-6">
                {FOOTER.links.map((link) => (
                  <a
                    key={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  className="text-sm text-white/40 hover:text-white transition-colors"
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
