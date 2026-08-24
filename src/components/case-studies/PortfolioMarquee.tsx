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
    link: "https://www.figma.com/proto/Fi8UQWNfDtKUQZLeHmxJYD/EPIC-Group-LLC--PP-?node-id=8622-3528&t=xsEdMGVEtIPGlol8-8&scaling=scale-down-width&content-scaling=fixed&page-id=8622%3A3527&starting-point-node-id=8622%3A3528&hide-ui=1",
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
    link: "https://www.figma.com/proto/C3Ol8P1F87vu8GPb5Ty07Q/Neuto-AI-Home--PP-?node-id=84-56&viewport=-145%2C25%2C0.1&t=IBS6ULHmRxLzpe2q-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    tickerItems: [
      { title: "Automation", image: "/portfolio/taskify-ai-cover.webp" },
      { title: "Workflows", image: "/portfolio/taskify-ai-2.webp" },
      { title: "Data Science", image: "/portfolio/taskify-ai-3.webp" },
      { title: "Big Data", image: "/portfolio/taskify-ai-4.webp" },
      { title: "LLM", image: "/portfolio/taskify-ai-5.webp" },
      { title: "Agentic AI", image: "/portfolio/taskify-ai-6.webp" },
    ],
  },
  {
    id: "03",
    category: "Organza",
    link: "https://www.figma.com/proto/o5VKmSx8QTRc70HMdvF3RN/Organza--PP-?node-id=2351-2212&t=uP5YICXZL9yxeFyq-8&scaling=scale-down-width&content-scaling=fixed&page-id=2345%3A2987&starting-point-node-id=2351%3A2212&hide-ui=1",
    tickerItems: [
      { title: "Ecommerce", image: "/portfolio/organza-cover.webp" },
      { title: "Store Front", image: "/portfolio/organza-2.webp" },
      { title: "Shopping", image: "/portfolio/organza-3.webp" },
      { title: "Checkout", image: "/portfolio/organza-4.webp" },
      { title: "Cart", image: "/portfolio/organza-cover.webp" },
      { title: "Marketplace", image: "/portfolio/organza-1.webp" },
    ],
  },
  {
    id: "04",
    category: "Simplify i3",
    link: "https://www.figma.com/proto/RwdDYNDkWEQjTfIkRSBSq6/Si3--PP--TR?node-id=8216-306&t=asoGYNvl7bApEekA-8&scaling=scale-down-width&content-scaling=fixed&page-id=8216%3A305&starting-point-node-id=8216%3A306&hide-ui=1",
    tickerItems: [
      { title: "Infrastructure", image: "/portfolio/simplify-cover.webp" },
      { title: "Intelligence", image: "/portfolio/simplify-2.webp" },
      { title: "Records", image: "/portfolio/simplify-3.webp" },
      { title: "Actions", image: "/portfolio/simplify-4.webp" },
      { title: "Work Order", image: "/portfolio/simplify-5.webp" },
      { title: "Governance", image: "/portfolio/simplify-1.webp" },
    ],
  },
  {
    id: "05",
    category: "OceanMoney",
    link: "https://www.figma.com/design/8lJ76j6X0RpSR8GOMDXGQI/OceanMoney--PP-?node-id=3-78&t=Ww59XtVNLlABCgEj-1",
    tickerItems: [
      { title: "Blockchain", image: "/portfolio/oceanm-cover.webp" },
      { title: "Crypto Currency", image: "/portfolio/oceanm-2-1.webp" },
      { title: "Bitcoin", image: "/portfolio/oceanm-3.webp" },
      { title: "Secure Wallet", image: "/portfolio/oceanm-4.webp" },
      { title: "Exchange", image: "/portfolio/oceanm-1.webp" },
      { title: "Trade", image: "/portfolio/oceanm-2.webp" },
    ],
  },
  {
    id: "06",
    category: "Taskpay",
    link: "https://www.figma.com/design/e8Iugt6WrkXYa7dAJ6BYaU/Taskpay-Design--PP-?node-id=43-192&t=sFcFzF5YiIVhMUM6-1",
    tickerItems: [
      { title: "Freelance", image: "/portfolio/marketplace-cover.webp" },
      { title: "Tasks", image: "/portfolio/marketplace-2.webp" },
      { title: "Money", image: "/portfolio/marketplace-3.webp" },
      { title: "Projects", image: "/portfolio/marketplace-4.webp" },
      { title: "Earn", image: "/portfolio/marketplace-5.webp" },
      { title: "Grow", image: "/portfolio/marketplace-1.webp" },
    ],
  },
  {
    id: "07",
    category: "AIVA",
    link: "https://www.figma.com/proto/8E7yk8omsgUzAWk344SBxt/AIVA-App--PP--TR?node-id=1-2&t=dRhnrgSOCPNUJJbg-8&scaling=contain&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=1%3A2&hide-ui=1",
    tickerItems: [
      { title: "Agentic AI", image: "/portfolio/aiva-cover.webp" },
      { title: "Automation", image: "/portfolio/aiva-2.webp" },
      { title: "Workflows", image: "/portfolio/aiva-3.webp" },
      { title: "Autonomous Agents", image: "/portfolio/aiva-4.webp" },
      { title: "Human Cloning", image: "/portfolio/aiva-5.webp" },
      { title: "Traits", image: "/portfolio/aiva-1.webp" },
    ],
  },
  // {
  //   id: "08",
  //   category: "Brownkind",
  //   link: "https://www.figma.com/proto/YOUR_FIGMA_LINK_8",
  //   tickerItems: [
  //     { title: "Skincare", image: "/portfolio/epic-1.webp" },
  //     { title: "Beauty", image: "/portfolio/epic-2.webp" },
  //     { title: "Products", image: "/portfolio/epic-3.webp" },
  //     { title: "Brand", image: "/portfolio/epic-4.webp" },
  //     { title: "Brownkind", image: "/portfolio/epic-5.webp" },
  //     { title: "Branding", image: "/portfolio/epic-6.webp" },
  //   ],
  // },
];

export default function PortfolioMarquee() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          <div className="col-12 col-lg-5 col-md-5" data-reveal="group">
            <span className="ak-badge" data-reveal="item">/ Recent Projects</span>
            <h2 className="fs-44" data-reveal="item">
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
          className="marquee-menu"
        >
          <div className="menu__item">
            <div className="container">
              <div className="row">
                <div className="col" data-reveal="group">
                  <a
                    href={item.link || "#"}
                    target={item.link ? "_blank" : "_self"}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className="menu__item-link"
                    onMouseEnter={(e) => handleMouseEnter(e, idx)}
                    onMouseLeave={(e) => handleMouseLeave(e, idx)}
                    data-reveal="item"
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
                  {[
                    ...item.tickerItems,
                    ...item.tickerItems,
                    ...item.tickerItems,
                    ...item.tickerItems,
                    ...item.tickerItems,
                    ...item.tickerItems,
                  ].map((ticker, tIdx) => (
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