"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // -------------------------------------------------------------
      // 1. WORD-BY-WORD STAGGER REVEAL (Splits text into words)
      // -------------------------------------------------------------
      const textTargets = gsap.utils.toArray<HTMLElement>('[data-reveal="text"]');

      textTargets.forEach((element) => {
        // Automatically inject masked spans directly into the element
        if (!element.querySelector(".reveal-word")) {
          const rawText = element.innerText.trim();
          if (!rawText) return;

          const words = rawText.split(/\s+/);
          element.innerHTML = words
            .map(
              (word) =>
                `<span style="display: inline-block; overflow: hidden; vertical-align: bottom; margin-right: 0.25em;"><span class="reveal-word" style="display: inline-block; will-change: transform, opacity;">${word}</span></span>`
            )
            .join(" ");
        }

        const words = element.querySelectorAll(".reveal-word");

        gsap.fromTo(
          words,
          {
            y: "110%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06, // Delay (in seconds) between each word
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // -------------------------------------------------------------
      // 2. ELEMENT-BY-ELEMENT STAGGER REVEAL (For headings/buttons/cards)
      // -------------------------------------------------------------
      const groupTargets = gsap.utils.toArray<HTMLElement>('[data-reveal="group"]');

      groupTargets.forEach((group) => {
        const items = group.querySelectorAll('[data-reveal="item"]');
        if (!items.length) return;

        gsap.fromTo(
          items,
          {
            y: "110%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15, // Delay (in seconds) between each child element
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}