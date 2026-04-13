import type { Metadata } from "next";
import "./globals.css";
import { SEO, SITE } from "./lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://perched.app"),
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
    url: "https://perched.app",
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perched — Find your spot. Share the vibe.",
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
