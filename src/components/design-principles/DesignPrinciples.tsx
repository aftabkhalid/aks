"use client";

import "./DesignPrinciples.css";
import Image from "next/image";

const principles = [
  {
    image: "/icon-1.svg",
    title: "Product Thinking",
    description:
      "Start with the problem, not the interface. I connect user needs, business goals, and product strategy before designing the solution.",
  },
  {
    image: "/icon-2.svg",
    title: "Human-Centered Design",
    description:
      "Understand how people actually think, behave, and work. Then design experiences that feel clear, useful, and natural.",
  },
  {
    image: "/icon-3.svg",
    title: "Systems Thinking",
    description:
      "Build beyond individual screens. I create scalable patterns, interactions, and design systems that make products easier to evolve.",
  },
];



export default function DesignPrinciples() {
  return (
    <section className="pt-120">
      <div className="container">
        
        <div className="row justify-content-center text-lg-center" data-reveal="group">
          <div className="col-12 col-lg-5 col-md-6">
            <h2 data-reveal="item">I don't <span className="font-rubik">design screens.</span> I design how products <span className="font-rubik">make sense.</span></h2>
          </div>
          <div className="w-100"></div>
          <div className="col-12 col-lg-4 col-md-6">
            <p className="mt-4" data-reveal="item">Great products sit at the intersection of business goals, human needs, and thoughtful technology. My role is to connect those pieces and turn complexity into clarity.</p>
          </div>
        </div>

        <div className="row pt-5 g-0">
          {principles.map((principle, index) => (
            <div className="col-12 col-md-4 ak-card" key={principle.title} data-reveal="group">
              <div className="mb-80 mb-lg-200">
                <Image src={principle.image} alt="" width={110} height={110} data-reveal="item"/>
              </div>
              <h3 data-reveal="item">{principle.title}</h3>
              <p data-reveal="item">{principle.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}