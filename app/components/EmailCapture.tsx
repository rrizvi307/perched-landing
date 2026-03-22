"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 0.9rem",
  borderRadius: "0.65rem",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.12)",
  color: "#fff",
  fontSize: "0.92rem",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.65rem",
  border: "1px solid rgba(255,255,255,0.45)",
  background: "#fff",
  color: "#5b21b6",
  fontWeight: 700,
  fontSize: "0.95rem",
  cursor: "pointer",
  letterSpacing: "0.01em",
};

export function EmailCapture() {
  const [fields, setFields] = useState({ name: "", email: "", city: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.email || !GOOGLE_SCRIPT_URL) return;

    setStatus("loading");

    try {
      const body = new URLSearchParams({ ...fields, timestamp: new Date().toISOString() });
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
      setFields({ name: "", email: "", city: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
        <p style={{ fontWeight: 700, color: "#fff" }}>You&apos;re on the list!</p>
        <p style={{ color: "#ede9fe", fontSize: "0.88rem", marginTop: "0.25rem" }}>We&apos;ll let you know when we launch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.55rem", maxWidth: "22rem", margin: "0 auto" }}>
      <input
        type="text"
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        placeholder="Your name"
        required
        style={inputStyle}
      />
      <input
        type="email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        placeholder="Your email"
        required
        style={inputStyle}
      />
      <input
        type="text"
        value={fields.city}
        onChange={(e) => setFields({ ...fields, city: e.target.value })}
        placeholder="Your city"
        style={inputStyle}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{ ...buttonStyle, opacity: status === "loading" ? 0.6 : 1 }}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p style={{ color: "#fca5a5", fontSize: "0.85rem", textAlign: "center" }}>Something went wrong. Try again.</p>
      )}
    </form>
  );
}
