import Hero from "@/components/hero/Hero";
// import About from "@/components/about/About";
import DesignPrinciples from "@/components/design-principles/DesignPrinciples";
import CaseStudies from "@/components/case-studies/CaseStudies";
import PortfolioMarquee from "@/components/case-studies/PortfolioMarquee";
import Services from "@/components/services/Services";
import Engagement from "@/components/engagement/Engagement";
import FooterSection from "@/components/footer/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <DesignPrinciples />      
      <CaseStudies />
      <PortfolioMarquee />
      <Engagement />
      <Services />
      <FooterSection />
    </>
  );
}