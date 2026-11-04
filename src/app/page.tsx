import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
// import About from "@/components/about/About";
import DesignPrinciples from "@/components/design-principles/DesignPrinciples";
import CaseStudies from "@/components/case-studies/CaseStudies";
import PortfolioMarquee from "@/components/case-studies/PortfolioMarquee";
import Services from "@/components/services/Services";
import Engagement from "@/components/engagement/Engagement";
import FooterSection from "@/components/footer/FooterSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aftab Khalid — UX Designer in Lahore",
  description:
    "Portfolio of Aftab Khalid, a Lahore-based UX designer with 24 years of experience: product design, design systems, prototyping, and AI workflows.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <DesignPrinciples />      
      <CaseStudies />
      <PortfolioMarquee />
      <Engagement />
      <Services />
      <FooterSection />
    </main>
  );
}
