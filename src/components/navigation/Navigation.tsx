"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./Navigation.css";
// import LiquidGlass from "./LiquidGlass";
// import "./LiquidGlass.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <header className="site-nav" data-reveal="group">
      <nav className={`navbar navbar-expand-lg ${
          scrolled ? "is-scrolled" : ""
        }`}>

        {/* Bootstrap navbar content */}
        <div className="navbar-content container-fluid" data-reveal="item">
          <a className="fs-16 align-items-center gap-2 d-flex" href="/">
            <Image src="/ak-logo-dark.svg" alt="" width={28} height={28}/>
            <span className="mt-1">Aftab Khalid</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-14">
              <li className="nav-item">
                <a className="nav-link" href="/about" data-reveal="item">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/writing" data-reveal="item">
                  Writing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/resume" data-reveal="item">
                  Resume
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="mailto:hello@aftabkhalid.com" data-reveal="item">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
