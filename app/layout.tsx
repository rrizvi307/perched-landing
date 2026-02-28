import type { Metadata } from "next";
import "./globals.css";
import { SEO, SITE } from "./lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://perched.app"),
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  icons: {
    icon: [{ url: "/perched-favicon.png" }],
    shortcut: [{ url: "/perched-favicon.png" }],
    apple: [{ url: "/perched-mark.png" }],
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: "https://perched.app",
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/perched-mark.png",
        width: 1024,
        height: 1024,
        alt: "Perched logo mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
