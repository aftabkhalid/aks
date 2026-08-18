"use client";

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
        <div className="row align-items-center">
          <div className="col-5">
            <span className="ak-badge">/ About me</span>
            <h2 className="fs-48">Aftab Khalid is a Lahore-based design engineer working across branidng, interaction design, and AI workflows.</h2>
            <p>I design and build fully custom web experiences end to end. Recent client involvements include NeutoAI, TomeAI, FinMin and OceanMoney.</p>
            <button type="button" className="btn btn-dark mt-40">Book a Call</button>
          </div>
          <div className="col-6 ms-auto">
            <div className="row gx-2">
              <div className="col-6">
                <Image className="w-100" src="/flux.avif" alt="" width={498} height={650}/>
              </div>
              <div className="col-6">
                <Image className="w-100" src="/flux.avif" alt="" width={498} height={650}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}