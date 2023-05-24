import React, { useEffect, useRef } from "react";
import "./SecondHelper.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

function SecondHelper(props) {
  const stadyRef = useRef(null);
  const leftBox = useRef(null);

  useEffect(() => {
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      leftBox.current,
      { y: 0 },
      { y: "120vh", duration: 1, ease: "none" }
    );

    setTimeout(() => {
      ScrollTrigger.create({
        animation: timeln,
        trigger: stadyRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      });
    }, 1000);

    ScrollTrigger.refresh();
    ScrollTrigger.update();
  });

  return (
    <div className="helper--container">
      <div className="text--container" ref={stadyRef}>
        <div className="left--container" ref={leftBox}>
          <div className="text--left--container">
            <h1>OUR OFFERS</h1>
          </div>
        </div>
        <div className="right--container">
          <div className="text--inner--container">
            <h1>WEB DEVELOPEMNT</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              tempora sit autem animi non dignissimos, eos qui quos doloremque!
              Ratione maiores sequi, neque cum necessitatibus illum tempore
              fugit temporibus quas.
            </p>
          </div>
          <div className="text--inner--container">
            <h1>APP DEVELOPMENT</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              tempora sit autem animi non dignissimos, eos qui quos doloremque!
              Ratione maiores sequi, neque cum necessitatibus illum tempore
              fugit temporibus quas.
            </p>
          </div>
          <div className="text--inner--container">
            <h1>DIGITAL MARKETING HELPER TOOLS</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              tempora sit autem animi non dignissimos, eos qui quos doloremque!
              Ratione maiores sequi, neque cum necessitatibus illum tempore
              fugit temporibus quas.
            </p>
          </div>
          <div className="text--inner--container">
            <h1>CHARACTER DEVELOPEMENT</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              tempora sit autem animi non dignissimos, eos qui quos doloremque!
              Ratione maiores sequi, neque cum necessitatibus illum tempore
              fugit temporibus quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHelper;
