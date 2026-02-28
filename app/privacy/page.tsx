import Link from "next/link";
import Image from "next/image";
import { SITE } from "../lib/constants";

export const metadata = {
  title: "Privacy - Perched",
  description: "Privacy policy for Perched.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--paper, #fbfaf8)",
        color: "var(--ink, #0e0f12)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", "Avenir Next", "Segoe UI", Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "28px 20px 48px" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 900,
              letterSpacing: "-0.3px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/perched-mark.png"
              alt="Perched"
              width={24}
              height={24}
              style={{
                borderRadius: 12,
                border: "1px solid rgba(231, 232, 236, 0.95)",
                background: "var(--paper, #fbfaf8)",
                objectFit: "cover",
              }}
            />
            <span>{SITE.name}</span>
          </Link>

          <Link
            href="/"
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "rgba(14, 15, 18, 0.72)",
              textDecoration: "none",
              border: "1px solid rgba(231, 232, 236, 0.95)",
              background: "rgba(255, 255, 255, 0.86)",
              padding: "10px 12px",
              borderRadius: 12,
            }}
          >
            Back
          </Link>
        </header>

        <div style={{ marginTop: 22 }}>
          <h1 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.9px", lineHeight: 1.12 }}>Privacy Policy</h1>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            Perched is in early access. This policy explains what we collect and how we use it.
          </p>
        </div>

        <section
          style={{
            marginTop: 18,
            background: "rgba(255, 255, 255, 0.86)",
            border: "1px solid rgba(231, 232, 236, 0.95)",
            borderRadius: 22,
            padding: 18,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.2px" }}>Information we collect</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(14, 15, 18, 0.78)", lineHeight: "22px" }}>
            <li>Info you provide (e.g., email for the waitlist, profile details).</li>
            <li>Content you create in the app (check-ins, captions, tags, photos you choose to upload).</li>
            <li>Approximate location when you grant permission (to detect spots and show nearby results).</li>
            <li>Basic device/app diagnostics (to keep the app reliable and improve performance).</li>
          </ul>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>How we use it</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(14, 15, 18, 0.78)", lineHeight: "22px" }}>
            <li>Provide core features (explore, feed, check-in, and recap).</li>
            <li>Personalize results based on vibes, tags, and what is happening now.</li>
            <li>Communicate with you about early access and product updates.</li>
            <li>Protect the community (safety, moderation, abuse prevention).</li>
          </ul>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Sharing</h2>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            We use trusted service providers to run the product (for example, hosting and data storage). We do not sell your personal
            information.
          </p>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Contact</h2>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            Questions? Email{" "}
            <a href={`mailto:${SITE.email}`} style={{ color: "rgba(14, 15, 18, 0.86)", fontWeight: 800 }}>
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

