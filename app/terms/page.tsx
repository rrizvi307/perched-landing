import Link from "next/link";

export const metadata = {
  title: "Terms • Perched",
  description: "Terms of service for Perched.",
};

export default function TermsPage() {
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
            <img
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
            <span>Perched</span>
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
          <h1 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.9px", lineHeight: 1.12 }}>Terms of Service</h1>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            Perched is in early access. By using the product, you agree to these terms.
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
          <h2 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.2px" }}>Early access</h2>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            Features may change, break, or be removed as we iterate quickly based on feedback.
          </p>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Your content</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(14, 15, 18, 0.78)", lineHeight: "22px" }}>
            <li>You’re responsible for the content you post (photos, captions, tags).</li>
            <li>Only post content you have the right to share.</li>
            <li>You grant Perched a license to host and display your content to operate the service.</li>
          </ul>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Acceptable use</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(14, 15, 18, 0.78)", lineHeight: "22px" }}>
            <li>Don’t abuse, harass, or impersonate others.</li>
            <li>Don’t attempt to disrupt or reverse engineer the product.</li>
            <li>We may remove content or suspend accounts to protect the community.</li>
          </ul>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Disclaimer</h2>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            The service is provided “as is” without warranties. To the maximum extent permitted by law, Perched is not liable for indirect
            damages or loss of data.
          </p>

          <h2 style={{ margin: "18px 0 0", fontSize: 16, letterSpacing: "-0.2px" }}>Contact</h2>
          <p style={{ margin: "10px 0 0", color: "rgba(14, 15, 18, 0.72)", lineHeight: "22px" }}>
            Questions? Email{" "}
            <a href="mailto:perchedappteam@gmail.com" style={{ color: "rgba(14, 15, 18, 0.86)", fontWeight: 800 }}>
              perchedappteam@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
