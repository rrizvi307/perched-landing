import type { Metadata } from "next";
import "./globals.css";
import { SEO, SITE_CONFIG } from "./lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perched - Find Your Perfect Study Spot & Squad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/og-image.png"],
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
