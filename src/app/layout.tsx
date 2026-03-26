import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google AdSense Publisher ID
const ADSENSE_PUBLISHER_ID = "ca-pub-6465667167208250";

// Google Search Console Verification (meta tag content - no .html)
const GOOGLE_SITE_VERIFICATION = "google7de838df44ac6eb4";

// Site URL from environment or default
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-directory-ebd6.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AI Directory - Discover the Best AI Tools for Your Projects",
  description: "A curated directory of AI tools for writing, image generation, coding, productivity, and more. Find the perfect AI tool for your next project.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "ChatGPT",
    "Midjourney",
    "Claude",
    "AI writing tools",
    "AI image generators",
    "AI coding assistants",
    "AI productivity tools",
    "AI tools directory",
    "machine learning tools",
    "AI software",
  ],
  authors: [{ name: "AI Directory Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "AI Directory - Discover the Best AI Tools",
    description: "A curated directory of AI tools for writing, images, coding, and productivity.",
    type: "website",
    siteName: "AI Directory",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Directory - Discover the Best AI Tools",
    description: "A curated directory of AI tools for writing, images, coding, and productivity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "google-adsense-account": ADSENSE_PUBLISHER_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="hsl(var(--primary))" />

        {/* Google AdSense Script */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Directory",
              "description": "The ultimate directory of AI tools",
              "url": SITE_URL,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?search={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AI Directory",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${SITE_URL}/logo.svg`
                }
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Directory",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.svg`,
              "sameAs": [
                "https://twitter.com/aidirectory",
                "https://linkedin.com/company/aidirectory"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
