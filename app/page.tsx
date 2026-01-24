"use client";

// app/page.tsx
type LandingProps = {
  brandName: string;
  headline: string;
  subhead: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  videoUrl?: string; // YouTube/Vimeo link or direct mp4/mov
  waitlistUrl: string; // link to open form
  waitlistEmbedUrl?: string; // optional iframe embed URL (Google Forms/Tally)
};

function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex >= 0 && parts[embedIndex + 1]) return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`;
    }
    return null;
  } catch {
    return null;
  }
}

function toVimeoEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("vimeo.com")) return null;
    const id = u.pathname.split("/").filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}` : null;
  } catch {
    return null;
  }
}

function resolveVideo(videoUrl?: string): { kind: "none" } | { kind: "video"; src: string } | { kind: "iframe"; src: string } {
  if (!videoUrl) return { kind: "none" };
  const lower = videoUrl.toLowerCase();
  if (lower.endsWith(".mp4") || lower.endsWith(".mov") || lower.endsWith(".m4v") || lower.endsWith(".webm")) {
    return { kind: "video", src: videoUrl };
  }
  const yt = toYouTubeEmbed(videoUrl);
  if (yt) return { kind: "iframe", src: yt };
  const vi = toVimeoEmbed(videoUrl);
  if (vi) return { kind: "iframe", src: vi };
  return { kind: "iframe", src: videoUrl };
}

export default function Page() {
  const props: LandingProps = {
    brandName: "Perched",
    headline: "Stop guessing where to work.",
    subhead:
      "Perched helps you find the right spot in minutes — by vibe, outlets, noise, and what your friends are doing right now.",
    primaryCtaLabel: "Join the waitlist",
    primaryCtaHref: "#waitlist",
    secondaryCtaLabel: "Watch the demo",
    secondaryCtaHref: "#demo",

    // TODO: paste your YouTube link (watch URL is fine)
    videoUrl: "",

    // TODO: paste your Google Form / Tally public link
    waitlistUrl: "",

    // Optional: paste your embed URL (Google Forms: ...viewform?embedded=true)
    waitlistEmbedUrl: "",
  };

  return <PerchedLanding {...props} />;
}

function PerchedLanding({
  brandName,
  headline,
  subhead,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  videoUrl,
  waitlistUrl,
  waitlistEmbedUrl,
}: LandingProps) {
  const video = resolveVideo(videoUrl);

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="container headerInner">
            <a className="brand" href="#" aria-label={brandName}>
              <span className="mark" aria-hidden="true" />
              <span className="brandText">{brandName}</span>
            </a>

            <nav className="nav">
              <a className="navLink" href="#demo">
                Demo
              </a>
              <a className="navLink" href="#features">
                Features
              </a>
              <a className="navLink" href="#waitlist">
                Waitlist
              </a>
            </nav>

            <a className="btn btnPrimary btnSm" href={waitlistUrl || "#waitlist"} target={waitlistUrl ? "_blank" : undefined} rel="noreferrer">
              Join
            </a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container heroGrid">
              <div className="heroText">
                <p className="kicker">INK · PAPER · MOSS</p>
                <h1 className="h1">{headline}</h1>
                <p className="subhead">{subhead}</p>

                <div className="ctaRow">
                  <a className="btn btnPrimary" href={primaryCtaHref}>
                    {primaryCtaLabel}
                  </a>
                  <a className="btn btnGhost" href={secondaryCtaHref}>
                    {secondaryCtaLabel}
                  </a>
                </div>

                <div className="miniRow">
                  <div className="miniPill">Hot zones by vibe</div>
                  <div className="miniPill">Tap in → detect</div>
                  <div className="miniPill">Shareable recap</div>
                </div>
              </div>

              <div className="heroMedia">
                <div className="device">
                  <div className="deviceTop" />
                  <div className="deviceScreen" aria-label="Perched demo preview">
                    {video.kind === "none" ? (
                      <div className="placeholder">
                        <p className="placeholderTitle">Demo video</p>
                        <p className="placeholderSub">Paste your `videoUrl` in `app/page.tsx`</p>
                      </div>
                    ) : video.kind === "video" ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video className="media" src={video.src} controls playsInline />
                    ) : (
                      <iframe
                        className="media"
                        src={video.src}
                        title="Perched demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
                <p className="caption">
                  “Quiet cafe with outlets” → Perched surfaces the right spots fast.
                </p>
              </div>
            </div>
          </section>

          <section id="demo" className="section">
            <div className="container">
              <div className="sectionHeader">
                <h2 className="h2">A product‑style demo, not a vlog.</h2>
                <p className="p">
                  One action per shot. Smooth gestures. Clean overlays. Holds at the end so it registers.
                </p>
              </div>

              <div className="card demoCard">
                <div className="demoLeft">
                  <p className="label">DEMO BEATS</p>
                  <ul className="list">
                    <li>Explore: hot zones + vibe toggle</li>
                    <li>Feed: friends live now + quick scroll</li>
                    <li>Tap in: detect → post with tags</li>
                    <li>Profile: recap story card</li>
                  </ul>
                </div>
                <div className="demoRight">
                  <p className="label">TIP</p>
                  <p className="p">
                    Record at 60fps and keep each clip 2–4 seconds. Add gentle easing on zooms/pans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="section">
            <div className="container">
              <div className="sectionHeader">
                <h2 className="h2">Built for the “where should I work?” moment.</h2>
                <p className="p">Not a giant directory — a fast decision engine.</p>
              </div>

              <div className="grid3">
                <div className="card feature">
                  <p className="label">EXPLORE</p>
                  <h3 className="h3">Hot zones by vibe</h3>
                  <p className="p">See what’s working right now — quiet, social, late-night, outlets, Wi‑Fi.</p>
                  <div className="chips">
                    <span className="chip">Quiet</span>
                    <span className="chip">Outlets</span>
                    <span className="chip">Wi‑Fi</span>
                  </div>
                </div>

                <div className="card feature">
                  <p className="label">TAP IN</p>
                  <h3 className="h3">Detect → post in seconds</h3>
                  <p className="p">Snap a photo, auto-detect the spot, add 1–3 tags, and you’re done.</p>
                  <div className="chips">
                    <span className="chip">Auto‑detect</span>
                    <span className="chip">Tags</span>
                    <span className="chip">Visibility</span>
                  </div>
                </div>

                <div className="card feature">
                  <p className="label">RECAP</p>
                  <h3 className="h3">Shareable weekly story</h3>
                  <p className="p">A clean recap card that matches the Perched aesthetic — ready for socials.</p>
                  <div className="chips">
                    <span className="chip">Story card</span>
                    <span className="chip">Save to Photos</span>
                    <span className="chip">Share</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="waitlist" className="section">
            <div className="container">
              <div className="sectionHeader">
                <h2 className="h2">Join the founding crew.</h2>
                <p className="p">Get early access, help shape the product, and seed the first wave of spots.</p>
              </div>

              <div className="card waitlistCard">
                <div className="waitlistLeft">
                  <p className="label">WAITLIST</p>
                  <p className="p">
                    {waitlistUrl ? (
                      <>
                        Prefer a quick link?{" "}
                        <a className="link" href={waitlistUrl} target="_blank" rel="noreferrer">
                          Open the form
                        </a>
                        .
                      </>
                    ) : (
                      "Paste your waitlist URL in `app/page.tsx`."
                    )}
                  </p>
                  <div className="ctaRow">
                    <a className="btn btnPrimary" href={waitlistUrl || "#"} target={waitlistUrl ? "_blank" : undefined} rel="noreferrer">
                      Join waitlist
                    </a>
                    <a className="btn btnGhost" href="mailto:perchedappteam@gmail.com">
                      Contact
                    </a>
                  </div>
                </div>

                <div className="waitlistRight">
                  {waitlistEmbedUrl ? (
                    <iframe className="form" src={waitlistEmbedUrl} title="Waitlist form" />
                  ) : (
                    <div className="placeholder formPlaceholder">
                      <p className="placeholderTitle">Embed your form</p>
                      <p className="placeholderSub">Paste a Google Forms/Tally embed URL into `waitlistEmbedUrl`.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="sectionHeader">
                <h2 className="h2">FAQ</h2>
              </div>

              <div className="card faq">
                <details className="faqItem">
                  <summary>When can I try it?</summary>
                  <p>We’re onboarding the founding crew first. Join the waitlist to get a TestFlight invite.</p>
                </details>
                <details className="faqItem">
                  <summary>Is this for iOS only?</summary>
                  <p>Founding crew starts on iOS. Android support comes after the first wave of feedback.</p>
                </details>
                <details className="faqItem">
                  <summary>How does “vibe” work?</summary>
                  <p>Vibe is powered by real check-ins + tags (quiet, outlets, Wi‑Fi, late-night) — not generic reviews.</p>
                </details>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footerInner">
            <span className="muted">© {new Date().getFullYear()} {brandName}</span>
            <div className="footerLinks">
              <a className="link" href="mailto:perchedappteam@gmail.com">
                Email
              </a>
              <span className="dot" aria-hidden="true" />
              <a className="link" href="/privacy">
                Privacy
              </a>
              <span className="dot" aria-hidden="true" />
              <a className="link" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          --paper: #fbfaf8;
          --ink: #0e0f12;
          --moss: #2f6f5e;
          --accent: #c98b5b;
          --border: #e7e8ec;
          --card: #ffffff;
          --muted: #6b6f76;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", "Avenir Next", "Segoe UI", Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100vh;
        }
        .container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(10px);
          background: rgba(251, 250, 248, 0.75);
          border-bottom: 1px solid rgba(231, 232, 236, 0.7);
        }
        .headerInner {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 900;
          letter-spacing: -0.3px;
        }
        .mark {
          width: 14px;
          height: 14px;
          border-radius: 6px;
          background: linear-gradient(135deg, var(--moss), #3a8a74);
          box-shadow: 0 0 0 4px rgba(47, 111, 94, 0.12);
        }
        .brandText {
          font-size: 15px;
        }
        .nav {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .navLink {
          font-size: 14px;
          color: rgba(14, 15, 18, 0.72);
        }
        .navLink:hover {
          color: rgba(14, 15, 18, 1);
        }

        .hero {
          padding: 48px 0 28px;
          background: radial-gradient(900px 380px at 70% 10%, rgba(47, 111, 94, 0.11), transparent 60%),
            radial-gradient(700px 340px at 0% 30%, rgba(201, 139, 91, 0.12), transparent 55%);
        }
        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: center;
        }
        .kicker {
          font-size: 11px;
          letter-spacing: 1.6px;
          font-weight: 700;
          color: rgba(14, 15, 18, 0.6);
          margin: 0 0 10px;
        }
        .h1 {
          margin: 0;
          font-size: 56px;
          line-height: 1.02;
          letter-spacing: -1.3px;
        }
        .subhead {
          margin: 14px 0 0;
          font-size: 18px;
          line-height: 26px;
          color: rgba(14, 15, 18, 0.72);
          max-width: 540px;
        }
        .ctaRow {
          margin-top: 18px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--card);
          font-weight: 800;
          letter-spacing: -0.2px;
          transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .btnSm {
          padding: 9px 12px;
          border-radius: 12px;
          font-size: 13px;
        }
        .btnPrimary {
          background: var(--ink);
          color: var(--paper);
          border-color: rgba(14, 15, 18, 0.08);
        }
        .btnGhost {
          background: rgba(255, 255, 255, 0.65);
        }

        .miniRow {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .miniPill {
          font-size: 12px;
          font-weight: 700;
          color: rgba(14, 15, 18, 0.72);
          border: 1px solid rgba(231, 232, 236, 0.85);
          background: rgba(255, 255, 255, 0.7);
          padding: 8px 10px;
          border-radius: 999px;
        }

        .heroMedia .caption {
          margin: 10px 0 0;
          font-size: 13px;
          color: rgba(14, 15, 18, 0.6);
        }
        .device {
          border-radius: 30px;
          border: 1px solid rgba(231, 232, 236, 0.95);
          background: rgba(255, 255, 255, 0.75);
          box-shadow: 0 18px 60px rgba(14, 15, 18, 0.12);
          overflow: hidden;
        }
        .deviceTop {
          height: 14px;
          background: linear-gradient(to bottom, rgba(14, 15, 18, 0.06), transparent);
        }
        .deviceScreen {
          aspect-ratio: 9 / 16;
          width: 100%;
          background: rgba(14, 15, 18, 0.04);
          display: flex;
        }
        .media {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .placeholder {
          width: 100%;
          height: 100%;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
        }
        .placeholderTitle {
          margin: 0;
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        .placeholderSub {
          margin: 0;
          color: rgba(14, 15, 18, 0.62);
          font-size: 13px;
          line-height: 18px;
        }

        .section {
          padding: 56px 0;
        }
        .sectionHeader {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .h2 {
          margin: 0;
          font-size: 28px;
          letter-spacing: -0.6px;
        }
        .h3 {
          margin: 10px 0 0;
          font-size: 18px;
          letter-spacing: -0.2px;
        }
        .p {
          margin: 0;
          color: rgba(14, 15, 18, 0.7);
          line-height: 22px;
          max-width: 560px;
        }
        .label {
          font-size: 11px;
          letter-spacing: 1.4px;
          font-weight: 800;
          color: rgba(14, 15, 18, 0.55);
        }

        .card {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(231, 232, 236, 0.95);
          border-radius: 22px;
          padding: 18px;
        }
        .demoCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .list {
          margin: 10px 0 0;
          padding-left: 18px;
          color: rgba(14, 15, 18, 0.75);
          line-height: 22px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 14px;
        }
        .chips {
          margin-top: 12px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chip {
          font-size: 12px;
          font-weight: 800;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(231, 232, 236, 0.95);
          background: rgba(251, 250, 248, 0.6);
          color: rgba(14, 15, 18, 0.72);
        }

        .waitlistCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }
        .form {
          width: 100%;
          min-height: 560px;
          border: 1px solid rgba(231, 232, 236, 0.95);
          border-radius: 18px;
          background: rgba(251, 250, 248, 0.6);
        }
        .formPlaceholder {
          min-height: 560px;
          border-radius: 18px;
          border: 1px dashed rgba(231, 232, 236, 0.95);
          background: rgba(251, 250, 248, 0.6);
        }

        .faq {
          padding: 0;
          overflow: hidden;
        }
        .faqItem {
          padding: 16px 18px;
          border-top: 1px solid rgba(231, 232, 236, 0.95);
        }
        .faqItem:first-child {
          border-top: 0;
        }
        summary {
          cursor: pointer;
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        details p {
          margin: 10px 0 0;
          color: rgba(14, 15, 18, 0.72);
          line-height: 22px;
        }

        .footer {
          padding: 28px 0 40px;
          border-top: 1px solid rgba(231, 232, 236, 0.95);
        }
        .footerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
        }
        .muted {
          color: rgba(14, 15, 18, 0.6);
          font-size: 13px;
        }
        .footerLinks {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .link {
          color: rgba(14, 15, 18, 0.72);
          font-weight: 700;
          font-size: 13px;
        }
        .link:hover {
          color: rgba(14, 15, 18, 1);
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(14, 15, 18, 0.24);
        }

        @media (max-width: 900px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }
          .h1 {
            font-size: 44px;
          }
          .grid3 {
            grid-template-columns: 1fr;
          }
          .demoCard,
          .waitlistCard {
            grid-template-columns: 1fr;
          }
          .nav {
            display: none;
          }
          .deviceScreen {
            aspect-ratio: 10 / 16;
          }
        }
      `}</style>
    </>
  );
}
