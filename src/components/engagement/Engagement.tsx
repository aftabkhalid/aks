"use client";
import MagneticButton from "@/components/magnetic-button/MagneticButton";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Engagement.css";
import Image from "next/image";

const imageStyle = {
  width: '100%',
  height: 'auto',
}

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
            <h2 className="fs-48" data-reveal="item">Aftab Khalid is a Lahore-based <span className="font-rubik">UX Designer</span> working across branidng, <span className="font-rubik">interaction design,</span> and AI workflows.</h2>
            <p data-reveal="item">I design and build fully custom web experiences end to end. Recent client involvements include NeutoAI, TomeAI, FinMin and OceanMoney.</p>
            <MagneticButton className="btn btn-lg btn-dark rounded-pill" href="https://linkedin.com/in/aftabkhalid" target="_blank" data-reveal="item">
              View Linkedin
            </MagneticButton>
          </div>
          <div className="col-12 col-lg-6 col-md-6 ms-auto">
            <div className="row g-2 mt-5 align-items-end">
              <div className="col-12 col-lg-6 col-md-6">
                <Image style={imageStyle} src="/ak-profile.png" alt="" width={600} height={410} data-reveal="item"/>
              </div>
              <div className="col-12 col-lg-6 col-md-6 d-none d-md-block">
                <Image style={imageStyle} src="/flux.png" alt="" width={498} height={650} data-reveal="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}