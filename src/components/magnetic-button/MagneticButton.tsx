"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  strength?: number;
  labelStrength?: number;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  href,
  strength = 0.4,
  labelStrength = 0.24,
  className = "",
  ...props
}: MagneticButtonProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const zone = zoneRef.current;
      if (!zone) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!btnRef.current || !labelRef.current) return;

        const rect = zone.getBoundingClientRect();
        const mapX = gsap.utils.mapRange(
          rect.left,
          rect.right,
          -rect.width / 2,
          rect.width / 2,
          e.clientX
        );
        const mapY = gsap.utils.mapRange(
          rect.top,
          rect.bottom,
          -rect.height / 2,
          rect.height / 2,
          e.clientY
        );

        gsap.to(btnRef.current, {
          x: mapX * strength,
          y: mapY * strength,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });

        gsap.to(labelRef.current, {
          x: mapX * labelStrength,
          y: mapY * labelStrength,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        if (!btnRef.current || !labelRef.current) return;

        gsap.to(btnRef.current, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
          overwrite: true,
        });

        gsap.to(labelRef.current, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
          overwrite: true,
        });
      };

      zone.addEventListener("mousemove", handleMouseMove);
      zone.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        zone.removeEventListener("mousemove", handleMouseMove);
        zone.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: zoneRef, dependencies: [strength, labelStrength] }
  );

  const content = (
    <>
      <span className="btn-bg" />
      <span ref={labelRef} className="label">
        {children}
      </span>
    </>
  );

  return (
    <div ref={zoneRef} className="mag-zone">
      {href ? (
        <Link
          ref={btnRef}
          href={href}
          className={`mag-btn ${className}`}
          {...props}
        >
          {content}
        </Link>
      ) : (
        <button
          ref={btnRef}
          className={`mag-btn ${className}`}
          {...props}
        >
          {content}
        </button>
      )}
    </div>
  );
}
