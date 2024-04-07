"use client";
// src/components/StarGrid.tsx

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function StarGrid() {
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef(null);
  const grid = [14, 30];

  useGSAP(
    () => {
      gsap.set(".star-grid-item", {
        opacity: 0,
        transformOrigin: "center",
        color: "#fff",
      });
      gsap.set(containerRef.current, { opacity: 1 });

      const tl = gsap.timeline();

      tl.to(".star-grid-item", {
        keyframes: [
          {
            opacity: 0,
            duration: 0,
          },
          {
            opacity: 0.4,
            duration: 0.6,
            color: "#ffd057",
            rotate: "+=90",
            scale: 3,
            stagger: {
              amount: 2,
              grid,
              from: "center",
            },
          },
          {
            opacity: 0.2,
            duration: 0.6,
            color: "#fff",
            scale: 1,
            rotate: "-=90",
            delay: -1,
            stagger: {
              amount: 3,
              from: "center",
              grid,
            },
          },
        ],
      });

      tl.to(".star-grid-item", {
        delay: 6,
        repeat: -1,
        repeatDelay: 6,
        keyframes: [
          {
            scale: 3,
            duration: 0.6,
            rotate: "+=90",
            color: "#ffd057",
            opacity: 0.4,
            stagger: {
              amount: 2,
              from: "center",
              grid,
            },
          },
          {
            scale: 1,
            duration: 0.6,
            rotate: "-=90",
            color: "#fff",
            opacity: 0.2,
            delay: -1,
            stagger: {
              from: "center",
              amount: 3,
              grid,
            },
          },
        ],
      });
    },
    { scope: containerRef },
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="star-grid"
      ref={containerRef}
      opacity={0}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) =>
          [...Array(grid[1])].map((_, j) => (
            <path
              key={`${i + j}`}
              fill="currentColor"
              opacity=".2"
              className="star-grid-item"
              d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
            />
          )),
        )}
      </g>
    </svg>
  );
}
