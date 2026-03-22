"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

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
      <div className="text-center py-4">
        <p className="text-purple-600 font-semibold">You&apos;re on the list!</p>
        <p className="text-gray-500 text-sm mt-1">We&apos;ll let you know when we launch.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-white";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
      <input
        type="text"
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        placeholder="Your name"
        required
        className={inputClass}
      />
      <input
        type="email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        placeholder="Your email"
        required
        className={inputClass}
      />
      <input
        type="text"
        value={fields.city}
        onChange={(e) => setFields({ ...fields, city: e.target.value })}
        placeholder="Your city"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
