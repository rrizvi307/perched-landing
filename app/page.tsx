import Image from "next/image";
import Link from "next/link";
import { FEATURE_ROWS, FOOTER, HERO, PILLARS, SITE } from "./lib/constants";

const ACCENT_STYLES = [
  "from-purple-50 to-pink-50 border-purple-100",
  "from-pink-50 to-white border-pink-100",
  "from-violet-50 to-white border-violet-100",
  "from-fuchsia-50 to-white border-fuchsia-100",
] as const;

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FBFAF8] text-[#0E0F12]">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ECE9F4] bg-[#FBFAF8]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="Perched home">
            <Image src="/perched-mark.png" alt="Perched" width={32} height={32} priority />
            <span className="text-lg font-bold text-[#111827]">Perched</span>
          </Link>
          <a
            href={HERO.ctaUrl}
            className="rounded-full border border-[#7C3AED] bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
          >
            {HERO.cta}
          </a>
        </div>
      </header>

      <main className="px-5 pb-20 pt-28 sm:px-6">
        <section className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-[#ECE9F4] bg-white p-6 shadow-[0_16px_60px_rgba(124,58,237,0.08)] lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full border border-[#E6D9FF] bg-[#F6F0FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#6D28D9]">
              Built from the live app experience
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[3.5rem]">
              {HERO.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] sm:text-lg">{HERO.subheadline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {HERO.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#EEE6FF] bg-[#FAF7FF] px-3 py-1 text-xs font-medium text-[#4C1D95] sm:text-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={HERO.ctaUrl}
                className="inline-flex items-center rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              >
                {HERO.cta}
              </a>
              <a
                href={HERO.secondaryCtaUrl}
                className="inline-flex items-center rounded-full border border-[#E5D9FF] bg-[#FBF8FF] px-6 py-3 text-sm font-semibold text-[#5B21B6] transition-colors hover:bg-[#F3E8FF]"
              >
                {HERO.secondaryCta}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#ECE9F4] bg-gradient-to-br from-[#FBF7FF] to-[#FFF7FB] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <Image src="/perched-mark.png" alt="Perched mark" width={64} height={64} />
              <span className="rounded-full border border-[#E6D9FF] bg-white px-3 py-1 text-xs font-semibold text-[#6D28D9]">
                Shipping now
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              Perched combines check-in metrics, social activity, and place intelligence so you can choose the right spot before you leave.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#1F2937]">
              <li className="rounded-xl border border-[#EDE7FF] bg-white px-4 py-3">Feed scopes: Everyone, Campus, Friends</li>
              <li className="rounded-xl border border-[#EDE7FF] bg-white px-4 py-3">Spot intelligence with Work Score + crowd forecast</li>
              <li className="rounded-xl border border-[#EDE7FF] bg-white px-4 py-3">Friends requests and contact syncing</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-6xl rounded-3xl border border-[#ECE9F4] bg-white p-4 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6D28D9]">Product preview</p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#EEEAF8]">
            <Image
              src="/app-store-connect-screens.png"
              alt="Perched app preview showing onboarding, feed, explore, check-ins, friends, and profile."
              width={2688}
              height={1242}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Core product pillars</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PILLARS.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border bg-gradient-to-br p-6 ${ACCENT_STYLES[index % ACCENT_STYLES.length]}`}
              >
                <h3 className="text-lg font-bold text-[#111827]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#374151] sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl rounded-3xl border border-[#ECE9F4] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">What the app currently ships</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            This page reflects the current mobile app behavior, including discovery intents, feed scopes, check-in metrics, and spot intelligence.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FEATURE_ROWS.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[#EEEAF8] bg-[#FCFBFE] p-5">
                <h3 className="text-base font-semibold text-[#111827] sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ECE9F4] bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-3">
              <Image src="/perched-mark.png" alt="Perched" width={26} height={26} />
              <span className="text-lg font-bold">{SITE.name}</span>
            </div>
            <p className="mt-2 text-sm text-[#6B7280]">{FOOTER.madeWith}</p>
            <p className="mt-1 text-sm text-[#6B7280]">Support: <a href={`mailto:${SITE.email}`} className="font-medium text-[#4C1D95] hover:text-[#6D28D9]">{SITE.email}</a></p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#4B5563]">
            <a href={SITE.privacy} className="hover:text-[#6D28D9]">Privacy</a>
            <a href={SITE.terms} className="hover:text-[#6D28D9]">Terms</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#6D28D9]">
              Instagram
            </a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#6D28D9]">
              TikTok
            </a>
          </div>
        </div>
        <div className="mx-auto mt-6 w-full max-w-6xl border-t border-[#F0EBFA] pt-4 text-sm text-[#9CA3AF]">{FOOTER.copyright}</div>
      </footer>
    </div>
  );
}
