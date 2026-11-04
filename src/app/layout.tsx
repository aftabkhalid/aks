import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import TextRevealProvider from "@/components/text-reveal/TextRevealProvider";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

// Configure custom local Rubik files
const rubik = localFont({
  src: [
    {
      path: "./fonts/rubik.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/rubik.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aftab Khalid",
    template: "%s — Aftab Khalid",
  },
  description:
    "Aftab Khalid is a Lahore-based UX designer with 24 years of experience designing digital products, design systems, and AI workflows.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: "Aftab Khalid — UX Designer",
    description:
      "Aftab Khalid is a Lahore-based UX designer with 24 years of experience designing digital products, design systems, and AI workflows.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aftab Khalid — UX Designer",
    description:
      "Aftab Khalid is a Lahore-based UX designer with 24 years of experience designing digital products, design systems, and AI workflows.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Portfolio and writing of Aftab Khalid, a Lahore-based UX designer.",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Aftab Khalid",
      jobTitle: "UX Designer",
      url: SITE_URL,
      image: `${SITE_URL}/ak-profile.png`,
      email: "hello@aftabkhalid.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      knowsAbout: [
        "UX design",
        "Product design",
        "Design systems",
        "Prototyping",
        "AI product design",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${rubik.variable}`}
    >
      <body>
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TextRevealProvider>
          {children}
        </TextRevealProvider>
      </body>
    </html>
  );
}