import React from "react";
import Particles from "react-tsparticles";

function Background() {
  return (
    <Particles
      style={{
        position: "fixed",  // fixed to cover entire viewport
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,           // behind all content
      }}
      options={{
        background: {
          color: { value: "#0f0f0f" }, // dark background
        },
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#00bfff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2, direction: "none", outModes: "out" },
          links: { enable: true, distance: 150, color: "#00bfff", opacity: 0.4, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Background;
