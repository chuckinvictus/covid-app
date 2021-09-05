import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      height="1000px"
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
            }
          },
          color: {
            value: "#6590c7"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 3,
              color: "#6590c7"
            },
          },
          opacity: {
            value: .5,
            random: false,
            anim: {
              enable: true,
              speed: .2,
              opacity_min: 0.2,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 70,
            color: "#122e52",
            opacity: .6,
            width: .5
          },
          move: {
            enable: true,
            speed: .5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        fpsLimit: 30
      }}
    />
  </div>
);
