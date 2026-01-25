import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perched.app"),
  title: "Perched",
  description: "Stop guessing where to work. Find the right spot by vibe, outlets, noise, and who’s here now.",
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    title: "Perched",
    description: "Stop guessing where to work. Find the right spot by vibe, outlets, noise, and who’s here now.",
    url: "https://perched.app",
    siteName: "Perched",
    type: "website",
    images: [{ url: "/perched-mark.png", width: 512, height: 512, alt: "Perched" }],
  },
  twitter: {
    card: "summary",
    title: "Perched",
    description: "Stop guessing where to work. Find the right spot by vibe, outlets, noise, and who’s here now.",
    images: ["/perched-mark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
