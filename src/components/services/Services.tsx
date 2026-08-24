"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Product Strategy",
    description:
      "I help teams turn unclear ideas into focused product direction, aligning user needs, business goals, and priorities before execution begins.",
    image: "/service-1.jpg",
  },
  {
    number: "02",
    title: "UX / UI Design",
    description:
      "I design digital experiences that are clear, intuitive, and purposeful, balancing user needs with business outcomes.",
    image: "/service-2.jpg",
  },
  {
    number: "03",
    title: "AI Product Design",
    description:
      "I turn powerful AI capabilities into understandable, useful experiences that give people clarity, control, and confidence.",
    image: "/service-3.jpg",
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "I build scalable design systems that connect product strategy, interaction patterns, visual language, and reusable components.",
    image: "/service-4.jpg",
  },
  {
    number: "05",
    title: "Prototyping",
    description:
      "I turn ideas into tangible prototypes that help teams explore possibilities, test assumptions, and make better decisions faster.",
    image: "/service-5.jpg",
  },
  {
    number: "06",
    title: "Product Experience",
    description:
      "I shape the experience across the product, connecting strategy, UX, interface, and systems into something people can understand and trust.",
    image: "/service-6.jpg",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  /*
   * ==========================================
   * DESKTOP GSAP ANIMATION
   * ==========================================
   */

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        const imgs = gsap.utils.toArray<HTMLElement>(
          ".desktop-services .service-img-card img"
        );

        gsap.set(imgs, {
          clipPath: "inset(0% 0% 0% 0%)",
          objectPosition: "50% 50%",
        });

        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".desktop-services .services-scroll-row",
            start: "top top",
            end: "bottom bottom",
            pin: ".desktop-services .services-pinned-col",
            scrub: true,
          },
        });

        imgs.forEach((currentImage, index) => {
          const nextImage = imgs[index + 1];

          if (!nextImage) return;

          const sectionTimeline = gsap.timeline();

          sectionTimeline
            .to(
              currentImage,
              {
                clipPath: "inset(0% 0% 100% 0%)",
                objectPosition: "50% 60%",
                duration: 1.5,
                ease: "none",
              },
              0
            )
            .to(
              nextImage,
              {
                objectPosition: "50% 50%",
                duration: 1.5,
                ease: "none",
              },
              0
            );

          mainTimeline.add(sectionTimeline);
        });

        return () => {
          mainTimeline.kill();
        };
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="section section-services position-relative"
      id="services"
    >
      <div className="container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="row pb-5 align-items-end" data-reveal="group">
          <div className="col-12 col-lg-5">
            <h2 data-reveal="item">
              I design products that make{" "}
              <span className="font-rubik">complex things</span> feel simple.
            </h2>
          </div>

          <div className="col-12 col-lg-4 ms-auto mt-3 mt-lg-0">
            <p
              data-reveal="item"
              className="text-dark opacity-75 fs-5 mb-0"
            >
              From defining the right problem to shaping the experience and
              bringing it to life, I work across strategy, UX, UI, and
              emerging AI experiences to create products people understand,
              use, and trust.
            </p>
          </div>
        </div>


        {/* ==========================================
            DESKTOP VERSION
            GSAP + PINNED IMAGE
        ========================================== */}

        <div className="desktop-services d-none d-lg-block">

          <div className="row services-scroll-row position-relative">

            {/* LEFT: SERVICES */}
            <div className="col-lg-4">

              {services.map((service) => (
                <div
                  key={service.number}
                  className="vh-100 d-flex align-items-center"
                >
                  <div>

                    <span className="fw-semibold text-dark opacity-50 d-block mb-2 fs-6">
                      {service.number}
                    </span>

                    <h2 className="mb-3">
                      {service.title}
                    </h2>

                    <p className="fs-5 text-dark opacity-75 mb-0">
                      {service.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>


            {/* RIGHT: PINNED IMAGE STACK */}
            <div className="col-lg-6 ms-auto vh-100 d-flex align-items-center services-pinned-col">

              <div
                className="position-relative w-100"
                style={{ height: "720px" }}
              >

                {services.map((service, index) => (
                  <div
                    key={`img-${service.number}`}
                    className="service-img-card position-absolute top-0 start-0 w-100 h-100 rounded-3 overflow-hidden"
                    style={{
                      zIndex: services.length - index,
                    }}
                  >

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-fit-cover"
                      sizes="540px"
                      priority={index === 0}
                    />

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ==========================================
            MOBILE VERSION
            NO GSAP
        ========================================== */}

        <div className="mobile-services d-lg-none">

          {services.map((service) => (
            <article
              key={service.number}
              className="mobile-service"
            >

              {/* IMAGE */}

              <div className="mobile-service-image">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-fit-cover"
                  sizes="100vw"
                />

              </div>


              {/* CONTENT */}

              <div className="mobile-service-content">

                <span className="fw-semibold text-dark opacity-50 d-block mb-2 fs-6">
                  {service.number}
                </span>

                <h2 className="mb-3">
                  {service.title}
                </h2>

                <p className="fs-5 text-dark opacity-75 mb-0">
                  {service.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}