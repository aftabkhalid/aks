"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import gsap from "gsap";
import "./Navigation.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrambleReady, setScrambleReady] = useState(false);

  const logoTextRef = useRef<HTMLSpanElement>(null);
  const scrambleTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent page scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // --------------------------------
  // Scramble Text
  // --------------------------------

  const scrambleLogo = (text: string) => {
    if (!scrambleReady || !logoTextRef.current) return;

    const ScrambleTextPlugin = (window as any).ScrambleTextPlugin;

    if (!ScrambleTextPlugin) return;

    gsap.registerPlugin(ScrambleTextPlugin);

    // Kill previous animation
    scrambleTween.current?.kill();

    scrambleTween.current = gsap.to(logoTextRef.current, {
      duration: 1.2,
      scrambleText: {
        text,
        chars: "upperAndLowerCase",
        revealDelay: 0.05,
        tweenLength: true,
      },
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <>
      {/* Load ScrambleTextPlugin */}
      <Script
        src="https://assets.codepen.io/16327/ScrambleTextPlugin3.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setScrambleReady(true);
        }}
      />

      <header className="site-nav" data-reveal="group">
        <nav
          className={`navbar navbar-expand-lg ${
            scrolled ? "is-scrolled" : ""
          }`}
        >
          <div
            className="navbar-content container-fluid"
            data-reveal="item"
          >
            {/* Logo */}
            <a
              className="fs-16 align-items-center gap-2 d-flex position-relative z-3"
              href="/"
              onClick={closeMenu}
              onMouseEnter={() => scrambleLogo("Aftab Khalid")}
            >
              <Image
                src="/ak-logo-dark.svg"
                alt=""
                width={28}
                height={28}
              />

              <span
                ref={logoTextRef}
                className="mt-1 ak-logo"
                onMouseEnter={() => scrambleLogo("Aftab Khalid")}
              >
                Aftab Khalid
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-toggle ${
                menuOpen ? "is-open" : ""
              }`}
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span></span>
              <span></span>
            </button>

            {/* Desktop Navigation */}
            <div className="desktop-navigation">
              <ul className="navbar-nav ms-auto fs-14">
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/writing">
                    Writing
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/resume">
                    Resume
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="mailto:hello@aftabkhalid.com"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Full Screen Mobile Overlay */}
          <div
            className={`mobile-menu-overlay ${
              menuOpen ? "is-open" : ""
            }`}
          >
            <div className="mobile-menu-content">
              <nav>
                <a href="/about" onClick={closeMenu}>
                  About
                </a>

                <a href="/writing" onClick={closeMenu}>
                  Writing
                </a>

                <a href="/resume" onClick={closeMenu}>
                  Resume
                </a>

                <a
                  href="mailto:hello@aftabkhalid.com"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}