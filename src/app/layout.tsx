import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import TextRevealProvider from "@/components/text-reveal/TextRevealProvider";

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
  title: "Aftab Khalid",
  description: "Aftab Khalid - UX Designer",
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
        <TextRevealProvider>
          {children}
        </TextRevealProvider>
      </body>
    </html>
  );
}