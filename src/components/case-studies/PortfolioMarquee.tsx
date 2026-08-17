"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import "./PortfolioMarquee.css";

interface ProjectItem {
  id: string;
  category: string;
  link?: string;
  tickerItems: {
    title: string;
    image: string;
  }[];
}

const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: "01",
    category: "Epic Group",
    tickerItems: [
      { title: "Public Sector", image: "/portfolio/epic-1.webp" },
      { title: "Organizations", image: "/portfolio/epic-2.webp" },
      { title: "Insights", image: "/portfolio/epic-3.webp" },
      { title: "Data Engineering", image: "/portfolio/epic-4.webp" },
      { title: "GIS Lifecycle", image: "/portfolio/epic-5.webp" },
      { title: "Utilities", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "02",
    category: "Taskify AI",
    tickerItems: [
      { title: "Automation", image: "/portfolio/epic-1.webp" },
      { title: "Workflows", image: "/portfolio/epic-2.webp" },
      { title: "Data Science", image: "/portfolio/epic-3.webp" },
      { title: "Big Data", image: "/portfolio/epic-4.webp" },
      { title: "LLM", image: "/portfolio/epic-5.webp" },
      { title: "Agentic AI", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "03",
    category: "Organza",
    tickerItems: [
      { title: "Ecommerce", image: "/portfolio/epic-1.webp" },
      { title: "Store Front", image: "/portfolio/epic-2.webp" },
      { title: "Shopping", image: "/portfolio/epic-3.webp" },
      { title: "Checkout", image: "/portfolio/epic-4.webp" },
      { title: "Cart", image: "/portfolio/epic-5.webp" },
      { title: "Marketplace", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "04",
    category: "Simplify i3",
    tickerItems: [
      { title: "Infrastructure", image: "/portfolio/epic-1.webp" },
      { title: "Intelligence", image: "/portfolio/epic-2.webp" },
      { title: "Records", image: "/portfolio/epic-3.webp" },
      { title: "Actions", image: "/portfolio/epic-4.webp" },
      { title: "Work Order", image: "/portfolio/epic-5.webp" },
      { title: "Governance", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "05",
    category: "OceanMoney",
    tickerItems: [
      { title: "Blockchain", image: "/portfolio/epic-1.webp" },
      { title: "Crypto Currency", image: "/portfolio/epic-2.webp" },
      { title: "Bitcoin", image: "/portfolio/epic-3.webp" },
      { title: "Secure Wallet", image: "/portfolio/epic-4.webp" },
      { title: "Exchange", image: "/portfolio/epic-5.webp" },
      { title: "Trade", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "06",
    category: "Taskpay",
    tickerItems: [
      { title: "Freelance", image: "/portfolio/epic-1.webp" },
      { title: "Tasks", image: "/portfolio/epic-2.webp" },
      { title: "Money", image: "/portfolio/epic-3.webp" },
      { title: "Projects", image: "/portfolio/epic-4.webp" },
      { title: "Earn", image: "/portfolio/epic-5.webp" },
      { title: "Grow", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "07",
    category: "AIVA",
    tickerItems: [
      { title: "Agentic AI", image: "/portfolio/epic-1.webp" },
      { title: "Automation", image: "/portfolio/epic-2.webp" },
      { title: "Workflows", image: "/portfolio/epic-3.webp" },
      { title: "Autonomous Agents", image: "/portfolio/epic-4.webp" },
      { title: "Human Cloning", image: "/portfolio/epic-5.webp" },
      { title: "Traits", image: "/portfolio/epic-6.webp" },
    ],
  },
  {
    id: "08",
    category: "Brownkind",
    tickerItems: [
      { title: "Skincare", image: "/portfolio/epic-1.webp" },
      { title: "Beauty", image: "/portfolio/epic-2.webp" },
      { title: "Products", image: "/portfolio/epic-3.webp" },
      { title: "Brand", image: "/portfolio/epic-4.webp" },
      { title: "Brownkind", image: "/portfolio/epic-5.webp" },
      { title: "Branding", image: "/portfolio/epic-6.webp" },
    ],
  },

];

export default function PortfolioMarquee() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Codrops Edge Detection Logic
  const getClosestEdge = (
    e: React.MouseEvent<HTMLAnchorElement>,
    container: HTMLDivElement
  ) => {
    const rect = container.getBoundingClientRect();
    const y = e.clientY - rect.top;
    return y < rect.height / 2 ? "top" : "bottom";
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const item = itemRefs.current[index];
    if (!item) return;

    const marquee = item.querySelector(".marquee");
    const marqueeInner = item.querySelector(".marquee__inner-wrap");
    const edge = getClosestEdge(e, item);

    gsap
      .timeline({ defaults: { duration: 0.6, ease: "expo.out" } })
      .set(marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInner, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marquee, marqueeInner], { y: "0%" }, 0);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const item = itemRefs.current[index];
    if (!item) return;

    const marquee = item.querySelector(".marquee");
    const marqueeInner = item.querySelector(".marquee__inner-wrap");
    const edge = getClosestEdge(e, item);

    gsap
      .timeline({ defaults: { duration: 0.6, ease: "expo.out" } })
      .to(marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInner, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <section className="portfolio-marquee-section py-5">
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-5">
            <span className="ak-badge">Recent Projects</span>
            <h2>
              I turn <span className="font-rubik">complex problem</span> into clear, purposeful digital products
            </h2>
          </div>
        </div>
      </div>

        {PORTFOLIO_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="marquee-menu">
            <div className="menu__item">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <a
                      href={item.link || "#"}
                      className="menu__item-link"
                      onMouseEnter={(e) => handleMouseEnter(e, idx)}
                      onMouseLeave={(e) => handleMouseLeave(e, idx)}
                    >
                      <span className="item-num">{item.id}</span>
                      <span className="item-title">{item.category}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Marquee Layer */}
              <div className="marquee">
                <div className="marquee__inner-wrap">
                  <div className="marquee__inner" aria-hidden="true">
                    {[...item.tickerItems, ...item.tickerItems, ...item.tickerItems, ...item.tickerItems, ...item.tickerItems, ...item.tickerItems].map((ticker, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{ticker.title}</span>
                        <div
                          className="marquee__img"
                          style={{ backgroundImage: `url(${ticker.image})` }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}