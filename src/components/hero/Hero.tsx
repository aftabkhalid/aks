"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navigation from "../navigation/Navigation";

import HeroShader from "./HeroShader";

import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.from(".hero-statement", {
          y: 60,
          opacity: 0,
          duration: 1,
        })
          .from(
            ".hero-side",
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.55"
          );
      }, heroRef);

      return () => ctx.revert();
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section ref={heroRef} className="hero">
      <HeroShader />
      <div className="hero-gradient" />

      <div className="container-fluid ak-container">
        <div className="row vh-100">
          <div className="col-12 col-lg-12">
            <Navigation />
          </div>
          <div className="col-12">
            <div className="row px-4 align-items-center">
              <div className="col-12 col-lg-6">
                <h1 className="hero-statement fs-72">I design digital products, <span className="font-rubik">experiences,</span> and <span className="font-rubik">systems</span> that make difficult <span className="font-rubik">things easier</span> to <span className="font-rubik">understand</span> and use.</h1>
                
              </div>

              <div className="col-12 col-lg-3 ms-auto">
                <div className="hero-side">
                  <div className="hero-side-copy">
                    Leave the rest to me
                  </div>
                  <p>
                    Independent Product
                    <br />
                    Designer
                  </p>
                  <span className="hero-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

