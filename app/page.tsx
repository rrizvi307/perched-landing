"use client";

import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { SocialDiscovery } from "./components/sections/SocialDiscovery";
import { Gamification } from "./components/sections/Gamification";
import { DemoMode } from "./components/sections/DemoMode";
import { WAITLIST_FORM, FAQ, FOOTER, NAVIGATION } from "./lib/constants";

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
        <Stats />
        <SocialDiscovery />
        <HowItWorks />
        <FeatureGrid />
        <Gamification />
        <DemoMode />

        {/* Waitlist section */}
        <section id="waitlist" className="py-32 lg:py-40 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
                {WAITLIST_FORM.headline}
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                {WAITLIST_FORM.description}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <iframe
                className="w-full min-h-[500px] border border-border rounded-2xl bg-white"
                src={`${WAITLIST_FORM.tallyFormUrl}?hideTitle=1&transparentBackground=1`}
                title="Waitlist form"
              />
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
                Find your perfect study spot and connect with your campus
                community.
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
