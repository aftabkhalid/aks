"use client";
import MagneticButton from "@/components/magnetic-button/MagneticButton";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Engagement.css";
import Image from "next/image";

const engagements = [
  {
    number: "01",
    title: "Sprints",
    description:
      "Focused engagements for moments that need clarity fast. We explore a specific challenge, test ideas, and turn uncertainty into a practical direction you can build on.",
    image: "/images/engagements/sprints-placeholder.png",
    variant: "dark",
  },
  {
    number: "02",
    title: "Projects",
    description:
      "End-to-end product design for ambitious ideas that need more than a few screens. I work across strategy, UX, UI, interaction, and systems to shape the product from first brief to launch.",
    image: "/images/engagements/projects-placeholder.png",
    variant: "orange",
  },
  {
    number: "03",
    title: "Partnerships",
    description:
      "A long-term design partnership for teams that need an experienced product designer embedded in the work. We solve problems as they emerge, improve the product continuously, and build the systems needed to scale.",
    image: "/images/engagements/partnerships-placeholder.png",
    variant: "light",
  },
];

export default function Engagement() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".engagement-card");

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (

    <section className="section br-top">
      <div className="container">
        <div className="row align-items-center" data-reveal="group">
          <div className="col-12 col-lg-5 col-md-6">
            <span className="ak-badge" data-reveal="item">/ About me</span>
            <h2 className="fs-48" data-reveal="item">Aftab Khalid is a Lahore-based <span className="font-rubik">UX designer</span> working across branidng, <span className="font-rubik">interaction design,</span> and AI workflows.</h2>
            <p data-reveal="item">I design and build fully custom web experiences end to end. Recent client involvements include NeutoAI, TomeAI, FinMin and OceanMoney.</p>
            <MagneticButton className="btn btn-lg btn-dark rounded-pill" href="https://linkedin.com/in/aftabkhalid" target="_blank" data-reveal="item">
              View Linkedin
            </MagneticButton>
          </div>
          <div className="col-12 col-lg-6 col-md-6 ms-auto">
            <div className="row g-2 mt-5 align-items-end">
              <div className="col-12 col-lg-6 col-md-6">
                <Image className="w-100" src="/ak-profile.png" alt="" width={600} height={410} data-reveal="item"/>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <Image className="w-100" src="/flux.avif" alt="" width={498} height={650} data-reveal="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}