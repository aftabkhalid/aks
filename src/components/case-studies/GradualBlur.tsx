"use client";

import React from "react";
import "./GradualBlur.css";

interface GradualBlurProps {
  position?: "top" | "bottom" | "left" | "right";
  strength?: number;
  height?: string;
  layers?: number;
}

export const GradualBlur: React.FC<GradualBlurProps> = ({
  position = "bottom",
  strength = 1.5,
  height = "160px",
  layers = 8,
}) => {
  // Fixed direction mapping: gradient moves TOWARD the target edge
  const directionMap = {
    bottom: "to bottom",
    top: "to top",
    left: "to left",
    right: "to right",
  };

  const direction = directionMap[position] || "to bottom";

  return (
    <div
      className={`gradual-blur-container gradual-blur-${position}`}
      style={{ height }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const step = i + 1;
        // Exponential blur calculation for smooth optical diffusion
        const blurValue = Math.pow(1.8, step) * strength;

        // Progressive mask bands ensuring 0% blur at the entry boundary
        const startStop = ((i / layers) * 100).toFixed(1);
        const endStop = (((i + 1) / layers) * 100).toFixed(1);

        const maskGradient = `linear-gradient(${direction}, transparent ${startStop}%, black ${endStop}%)`;

        return (
          <div
            key={i}
            className="gradual-blur-layer"
            style={{
              backdropFilter: `blur(${blurValue}px)`,
              WebkitBackdropFilter: `blur(${blurValue}px)`,
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        );
      })}
    </div>
  );
};

export default GradualBlur;