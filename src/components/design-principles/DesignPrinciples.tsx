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
    image: "/icon-1.svg",
    title: "Human-Centered",
    description:
      "Understand how people actually think, behave, and work. Then design experiences that feel clear, useful, and natural.",
  },
  {
    image: "/icon-1.svg",
    title: "Systems Thinking",
    description:
      "Build beyond individual screens. I create scalable patterns, interactions, and design systems that make products easier to evolve.",
  },
];



export default function DesignPrinciples() {
  return (
    <section className="section">
      <div className="container">
        
        <div className="row justify-content-center text-center">
          <div className="col-5">
            <h2>I don't <span className="font-rubik">design screens.</span> I design how products <span className="font-rubik">make sense.</span></h2>
          </div>
          <div className="w-100"></div>
          <div className="col-4">
            <p className="mt-4">Great products sit at the intersection of business goals, human needs, and thoughtful technology. My role is to connect those pieces and turn complexity into clarity.</p>
          </div>
        </div>

        <div className="row pt-5 g-0">
          {principles.map((principle, index) => (
            <div className="col ak-card" key={principle.title}>
              <div className="mb-200">
                <Image src={principle.image} alt="" width={110} height={110}/>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}