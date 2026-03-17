"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CHECKIN_FLOW_IMAGES,
  FEATURES,
  FOOTER,
  HERO,
  SHOWCASE_IMAGES,
  SITE,
} from "./lib/constants";

export default function Page() {
  return (
    <div className="landing-root">
      <main className="page">
        <section className="hero" aria-labelledby="hero-title">
          <div className="logo-box" aria-hidden="true">
            <Image
              src="/perched-mark.png"
              alt=""
              width={84}
              height={84}
              priority
              className="logo-mark"
            />
          </div>

          <h1 id="hero-title">{HERO.title}</h1>
          <p className="tagline">{HERO.tagline}</p>
          <p className="subline">{HERO.subline}</p>

          <a className="cta" href={HERO.ctaUrl}>
            {HERO.cta}
          </a>
        </section>

        <section className="showcase" aria-label="Perched app screenshots">
          <p className="section-label">Beta Screens</p>
          <figure className="showcase-card">
            <div className="showcase-grid">
              {SHOWCASE_IMAGES.map((image, index) => (
                <div key={image.src} className="showcase-frame">
                  <Image
                    className="showcase-image"
                    src={image.src}
                    alt={image.alt}
                    width={1320}
                    height={2868}
                    priority={index < 3}
                    sizes="(min-width: 46rem) 15vw, 28vw"
                  />
                </div>
              ))}
            </div>
          </figure>
        </section>

        <section className="section story" aria-labelledby="checkin-title">
          <p className="section-label">How Check-Ins Work</p>
          <div className="story-copy">
            <h2 id="checkin-title" className="section-title">
              Check-in inputs turn into smarter spot scores.
            </h2>
            <p className="section-copy">
              Users add quick structured signals while posting. Those inputs
              shape the spot view and help Perched rank better places over time.
            </p>
          </div>

          <div className="story-grid">
            {CHECKIN_FLOW_IMAGES.map((image, index) => (
              <figure key={image.src} className="story-card">
                <div className="story-frame">
                  <Image
                    className="story-image"
                    src={image.src}
                    alt={image.alt}
                    width={1320}
                    height={2868}
                    priority={index === 0}
                    sizes="(min-width: 46rem) 20vw, 84vw"
                  />
                </div>
                <figcaption className="story-caption">
                  <strong>{image.title}</strong>
                  <span>{image.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section" aria-label="Perched value">
          <p className="section-label">Why Perched</p>
          <ul className="features">
            {FEATURES.map((feature) => (
              <li key={feature} className="feature">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <nav className="footer-links" aria-label="Footer links">
            <Link href={SITE.privacy}>Privacy Policy</Link>
            <Link href={SITE.terms}>Terms of Service</Link>
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
          background: linear-gradient(160deg, #7c3aed 0%, #6d28d9 100%);
          color: #ffffff;
          font-family: "Avenir Next", "SF Pro Display", "Helvetica Neue", "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .landing-root::before,
        .landing-root::after {
          content: "";
          position: fixed;
          pointer-events: none;
          z-index: 0;
        }

        .landing-root::before {
          inset: -20% auto auto -15%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.28) 0%, rgba(236, 72, 153, 0) 68%);
        }

        .landing-root::after {
          inset: auto -15% -25% auto;
          width: 70vw;
          height: 70vw;
          background: radial-gradient(circle, rgba(196, 181, 253, 0.26) 0%, rgba(196, 181, 253, 0) 72%);
        }

        .page {
          position: relative;
          z-index: 1;
          width: min(64rem, 100%);
          min-height: 100vh;
          padding: 1.25rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .page > * {
          width: 100%;
        }

        .hero {
          padding: 1.25rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
          box-shadow: 0 18px 44px rgba(34, 11, 87, 0.34);
          text-align: center;
        }

        .logo-box {
          width: 5.25rem;
          height: 5.25rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          display: grid;
          place-items: center;
          margin: 0 auto 0.95rem;
        }

        .logo-mark {
          width: 4rem;
          height: 4rem;
          object-fit: contain;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.2rem, 9vw, 3.25rem);
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .tagline {
          margin: 0.6rem 0 0.5rem;
          font-size: clamp(1rem, 4.2vw, 1.25rem);
          color: #ede9fe;
        }

        .subline {
          margin: 0 auto 1.2rem;
          color: #ede9fe;
          font-size: 0.94rem;
          line-height: 1.35;
          max-width: 42ch;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.2rem;
          padding: 0.8rem 1.15rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.45);
          background: #ffffff;
          color: #5b21b6;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.01em;
          box-shadow: 0 10px 28px rgba(17, 24, 39, 0.26);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .cta:hover,
        .cta:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 14px 34px rgba(17, 24, 39, 0.32);
          opacity: 0.96;
        }

        .cta:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.48);
          outline-offset: 3px;
        }

        .features {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.65rem;
        }

        .showcase {
          display: grid;
          gap: 0.6rem;
          text-align: center;
        }

        .showcase-card {
          margin: 0;
          border-radius: 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 44px rgba(34, 11, 87, 0.34);
          padding: 0.45rem;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.35rem;
        }

        .showcase-frame {
          overflow: hidden;
          border-radius: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
        }

        .showcase-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .section {
          display: grid;
          gap: 0.62rem;
          text-align: center;
        }

        .story {
          gap: 0.85rem;
        }

        .story-copy {
          display: grid;
          gap: 0.45rem;
          max-width: 46rem;
          margin: 0 auto;
        }

        .section-title {
          margin: 0;
          font-size: clamp(1.5rem, 5.4vw, 2.2rem);
          line-height: 1.04;
          letter-spacing: 0.01em;
        }

        .section-copy {
          margin: 0 auto;
          max-width: 44ch;
          color: #ede9fe;
          font-size: 0.98rem;
          line-height: 1.4;
        }

        .story-grid {
          display: grid;
          gap: 0.85rem;
        }

        .story-card {
          margin: 0;
          display: grid;
          gap: 0.6rem;
          text-align: left;
          padding: 0.55rem;
          border-radius: 1.15rem;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 44px rgba(34, 11, 87, 0.34);
        }

        .story-frame {
          overflow: hidden;
          border-radius: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
        }

        .story-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .story-caption {
          display: grid;
          gap: 0.22rem;
          padding: 0 0.12rem 0.08rem;
        }

        .story-caption strong {
          font-size: 1rem;
        }

        .story-caption span {
          color: #ede9fe;
          font-size: 0.93rem;
          line-height: 1.36;
        }

        .section-label {
          margin: 0;
          color: #ede9fe;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .feature {
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.11);
          color: #ffffff;
          border-radius: 0.95rem;
          padding: 0.8rem 0.85rem;
          font-size: 0.95rem;
          line-height: 1.3;
          text-align: center;
        }

        footer {
          margin-top: auto;
          padding: 0.45rem 0.25rem 0.35rem;
          color: #ede9fe;
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
          color: #ffffff;
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }

        .footer-links a:hover,
        .footer-links a:focus-visible,
        .support a:hover,
        .support a:focus-visible {
          border-bottom-color: rgba(255, 255, 255, 0.8);
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
            padding: 2rem 1.8rem 1.4rem;
            gap: 1.25rem;
          }

          .hero {
            padding: 1.8rem;
          }

          .showcase-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 0.45rem;
          }

          .story-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            align-items: start;
          }

          .features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .feature {
            font-size: 0.99rem;
          }
        }
      `}</style>
    </div>
  );
}
