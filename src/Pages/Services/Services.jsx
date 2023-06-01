import React, { useEffect, useRef } from "react";
import "./SecondHelper.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { motion } from "framer-motion";
import FifthPage from "../FifthPage/FifthPage";

gsap.registerPlugin(ScrollTrigger);

function Services(props) {
  const stadyRef = useRef(null);
  const leftBox = useRef(null);
  const currRef = useRef(null);

  useEffect(() => {
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      leftBox.current,
      { y: 0 },
      { y: "100vh", duration: 1, ease: "none" }
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
    <>
      <motion.div
        className="helper--container"
        ref={currRef}
        // initial={{ y: "1000px" }}
        // animate={{ y: 0 }}
        // exit={{ y: 0 }}
        // transition={{ duration: 1 }}
      >
        <div className="img--container">
          <img
            src="https://images.unsplash.com/photo-1673380823385-75929e08ea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzA5Njg0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="test"
          />
          <div className="text--description">
            <p>
              We create digital spaces that reimagine the way people interact
              with brands.
            </p>
          </div>
        </div>
        <div className="text--container" ref={stadyRef}>
          <div className="left--container" ref={leftBox}>
            <div className="text--left--container">
              <h1>OUR SERVICES.</h1>
            </div>
          </div>
          <div className="right--container">
            <div className="text--inner--container">
              <h1>WEB DEVELOPEMNT</h1>
              <p>
                Front–end, back–end, headless shopify e–commerce, experimental &
                creative development, hybrid native apps, web3, webgl.
              </p>
            </div>
            <div className="text--inner--container">
              <h1>APP DEVELOPMENT</h1>
              <p>
                Art direction, creative direction, brand design, design system,
                wireframes & prototyping, app & e–commerce, social content,
                motion design, CGI.
              </p>
            </div>
            <div className="text--inner--container">
              <h1>DIGITAL MARKETING HELPER TOOLS</h1>
              <p>
                Art direction, creative direction, brand design, design system,
                wireframes & prototyping, app & e–commerce, social content,
                motion design, CGI.
              </p>
            </div>
            <div className="text--inner--container">
              <h1>DESIGN</h1>
              <p>
                Art direction, creative direction, brand design, design system,
                wireframes & prototyping, app & e–commerce, social content,
                motion design, CGI.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <FifthPage />
    </>
  );
}

export default Services;
