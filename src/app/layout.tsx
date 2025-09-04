import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { 
  siteUrl, 
  siteName, 
  siteTitle, 
  siteDescription, 
  defaultKeywords, 
  defaultOpenGraph, 
  defaultTwitter,
  structuredDataPerson
} from "~/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: defaultKeywords,
  authors: [{ name: "Kinjal Desai" }],
  creator: "Kinjal Desai",
  publisher: "Kinjal Desai",
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
  openGraph: {
    ...defaultOpenGraph,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    ...defaultTwitter,
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataPerson),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
