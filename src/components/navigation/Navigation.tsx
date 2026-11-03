"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import "./Navigation.css";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const scrambleLogo = () => {
    if (!logoTextRef.current) return;

    // Kill previous animation
    scrambleTween.current?.kill();

    scrambleTween.current = gsap.to(logoTextRef.current, {
      duration: 1.2,

      scrambleText: {
        text: "Aftab Khalid",
        chars: "upperAndLowerCase",
        revealDelay: 0.05,
        tweenLength: true,
      },

      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
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
          <Link
            className="fs-16 align-items-center gap-2 d-flex position-relative z-3"
            href="/"
            onClick={closeMenu}
            onMouseEnter={scrambleLogo}
          >
            <Image
              src="/ak-logo-dark.svg"
              alt=""
              width={28}
              height={28}
            />

            <span
              ref={logoTextRef}
              className="mt-1"
            >
              Aftab Khalid
            </span>
          </Link>

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
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/writing">
                  Writing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/resume">
                  Resume
                </Link>
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
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>

              <Link href="/writing" onClick={closeMenu}>
                Writing
              </Link>

              <Link href="/resume" onClick={closeMenu}>
                Resume
              </Link>

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
  );
}