"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PreFooter from "../pre-footer/PreFooter";
import Footer from "./Footer";
import "./Footer.scss";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const footerContentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerContentRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Moves the inner content down initially and brings it to 0 as you scroll
      gsap.fromTo(
        footerContentRef.current,
        { yPercent: -30, opacity: 0.6 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom+=1000", // Triggers when the wrapper reaches bottom
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="footer-reveal-wrapper">
      <div className="pre-footer-layer">
        <PreFooter />
      </div>

      <div className="footer-sticky-layer">
        <div ref={footerContentRef} className="w-100">
          <Footer />
        </div>
      </div>
    </div>
  );
}