"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import GradualBlur from "./GradualBlur";

import "./CaseStudies.scss";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Epic Group",
    category: "Web Design",
    year: "2025",
    image: "/portfolio/epic-group-cs.jpg",
    link: "https://www.figma.com/proto/Fi8UQWNfDtKUQZLeHmxJYD/EPIC-Group-LLC--PP-?node-id=8622-3528&t=xsEdMGVEtIPGlol8-8&scaling=scale-down-width&content-scaling=fixed&page-id=8622%3A3527&starting-point-node-id=8622%3A3528&hide-ui=1"
  },
  {
    title: "Eficiente",
    category: "Brand Identity",
    year: "2026",
    image: "/portfolio/eficiente-cs.jpg",
    link: "#"
  },
  {
    title: "Brownkind",
    category: "Brand Identity",
    year: "2024",
    image: "/portfolio/brownkind-cs.jpg",
    link: "#"
  },
  {
    title: "Taskpay",
    category: "UX / UI Design",
    year: "2023",
    image: "/portfolio/taskpay-cs.jpg",
    link: "https://www.figma.com/design/e8Iugt6WrkXYa7dAJ6BYaU/Taskpay-Design--PP-?node-id=43-192&t=sFcFzF5YiIVhMUM6-1"
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".case-study-card");

      cards.forEach((card, index) => {
        // Skip animating the last card (it stays on top without shrinking)
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        gsap.to(card, {
          scale: 0.8,
          opacity: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom-=10%", // Starts scaling as the next card approaches
            end: "top top+=400px",    // Completes scale when next card pins
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section ref={sectionRef} className="case-studies-section pt-120" id="case-studies">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-5" data-reveal="group">
            <span className="ak-badge" data-reveal="item">/ Case Studies</span>
            <h2 className="fs-44" data-reveal="item">
              A selection of products, <span className="font-rubik">experiences,</span> and <span className="font-rubik">systems</span> I've helped bring to life.
            </h2>
          </div>
        </div>

        <div className="row case-studies-stack d-none d-lg-block">
          {caseStudies.map((project, index) => (
            <div
              className="col-12 case-study-wrapper"
              key={project.title}
              style={{ top: `calc(100px + ${index * 0}px)` }} // Staggered sticky top offsets
            >
              <article className="case-study-card">
                <a href={project.link} target="_blank" className="case-study-link">
                  <div className="case-study-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="case-study-info">
                    <h3>
                      {project.title}
                      <span>↗</span>
                    </h3>

                    <div className="case-study-meta">
                      {project.category} — {project.year}
                    </div>
                  </div>
                </a>
              </article>
            </div>
          ))}
        </div>

      </div>

      <div className="w-100 py-100 d-none d-md-block"></div>
      <div className="section-blur-overlay d-none d-md-block">
        <GradualBlur position="bottom" strength={1.5} height="120px" />
      </div>

      <div className="container d-lg-none">
        {/* Mobile */}
        <div className="row">
          {caseStudies.map((project) => (
            <div
              className="col-12"
              key={project.title}
            >
              <article className="mt-60">
                <a href={project.link} target="_blank" className="case-study-link">
                  <div className="case-study-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="case-study-info">
                    <h3>
                      {project.title}
                      <span>↗</span>
                    </h3>

                    <div className="case-study-meta">
                      {project.category} — {project.year}
                    </div>
                  </div>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;