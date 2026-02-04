"use client";

import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { WAITLIST_FORM, FAQ, FOOTER, NAVIGATION } from "./lib/constants";

export default function Page() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label={NAVIGATION.logo.alt}>
            <span className="text-2xl font-black text-ink">{NAVIGATION.logo.alt}</span>
          </a>

          <a
            href="#waitlist"
            className="px-6 py-2.5 bg-ink text-white font-semibold rounded-full text-sm hover:bg-ink/90 transition-colors"
          >
            Join waitlist
          </a>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <HowItWorks />
        <FeatureGrid />

        {/* Waitlist section */}
        <section id="waitlist" className="py-32 lg:py-40 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
                Join the founding crew
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Be the first to build your streak
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
                Questions
              </h2>
            </div>

            <div className="space-y-1">
              {FAQ.questions.slice(0, 5).map((item, index) => (
                <details
                  key={index}
                  className="group bg-white border border-border rounded-xl p-6 hover:border-purple-200 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold text-ink list-none">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-6 text-sm">
            {FOOTER.links.map((link) => (
              <a
                key={link.href}
                className="text-muted hover:text-ink transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="text-muted hover:text-ink transition-colors"
              href={`mailto:${FOOTER.email}`}
            >
              Email
            </a>
          </div>
          <p className="text-sm text-muted">{FOOTER.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
