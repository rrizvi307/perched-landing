"use client";

import Image from "next/image";
import { FOOTER, HERO, SITE } from "./lib/constants";

export default function Page() {
  return (
    <div className="landing-root">
      <main className="page">
        <section className="hero" aria-labelledby="hero-title">
          <div className="logo-box" aria-hidden="true">
            <Image
              src="/perched-logo-v3.svg"
              alt=""
              width={320}
              height={96}
              priority
              className="logo-lockup"
            />
          </div>

          <h1 id="hero-title">{HERO.title}</h1>

          <a className="cta" href={HERO.ctaUrl}>
            {HERO.cta}
          </a>
        </section>

        <footer>
          <nav className="footer-links" aria-label="Footer links">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </nav>
          <p className="support">
            Support: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className="made">{FOOTER.madeWith}</p>
        </footer>
      </main>

      <style jsx>{`
        .landing-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          overflow-x: hidden;
          background: #fbfaf8;
          color: #17203d;
          font-family: "Avenir Next", "SF Pro Display", "Helvetica Neue", "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .page {
          position: relative;
          width: min(44rem, 100%);
          min-height: 100vh;
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }

        .hero {
          --hero-gap: 1.45rem;
          width: 100%;
          margin: auto 0;
          padding: 4rem 0 2rem;
          text-align: center;
        }

        .logo-box {
          width: fit-content;
          min-height: 0;
          display: grid;
          place-items: center;
          margin: 0 auto var(--hero-gap);
        }

        .logo-lockup {
          width: min(20rem, 78vw);
          height: auto;
          object-fit: contain;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.45rem, 10vw, 4.35rem);
          line-height: 0.98;
          letter-spacing: 0;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: var(--hero-gap);
          min-height: 3.2rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          border: 1px solid rgba(23, 32, 61, 0.12);
          background: #17203d;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0;
          box-shadow: 0 14px 32px rgba(23, 32, 61, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .cta:hover,
        .cta:focus-visible {
          transform: translateY(-1px);
          background: #252f53;
          box-shadow: 0 16px 38px rgba(23, 32, 61, 0.24);
        }

        .cta:focus-visible {
          outline: 3px solid rgba(139, 92, 246, 0.32);
          outline-offset: 3px;
        }

        footer {
          width: 100%;
          padding: 0 0.25rem 0.35rem;
          color: rgba(23, 32, 61, 0.68);
          display: grid;
          justify-items: center;
          text-align: center;
          gap: 0.7rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.55rem 0.95rem;
        }

        .footer-links a,
        .support a {
          color: #17203d;
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }

        .footer-links a:hover,
        .footer-links a:focus-visible,
        .support a:hover,
        .support a:focus-visible {
          border-bottom-color: rgba(23, 32, 61, 0.72);
        }

        .support,
        .made {
          font-size: 0.92rem;
        }

        .made {
          letter-spacing: 0.02em;
        }

        @media (min-width: 46rem) {
          .page {
            padding: 2.25rem 1.8rem 1.4rem;
          }

          .hero {
            padding-top: 5rem;
          }
        }
      `}</style>
    </div>
  );
}
