import React from "react";
import "./FirstPage.scss";
import { useRef, useEffect } from "react";
import "intersection-observer";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(ScrollTrigger);

function FirstPage(props) {
  const currRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const timeln = gsap.timeline();

    timeln.fromTo(
      imgRef.current,
      { y: 0 },
      { y: "-100px", duration: 1, ease: "none" }
    );

    ScrollTrigger.create({
      animation: timeln,
      trigger: currRef.current,

      scrub: true,
    });
  });

  return (
    <>
      <motion.div className="first-page--container" ref={currRef}>
        <div className="container">
          <div className="upper--container">
            <div className="left--container">
              {" "}
              <h1 className="first-page--title">
                EPOCH <span>(Creative Lab)</span>
              </h1>
            </div>
          </div>
          <div className="lower--container">
            <motion.img src="img/example.webp" alt="test" ref={imgRef} />
            <div className="right--container">
              <p className="first-page--body">
                Antinomy offers a wide range of services that apply to many
                industries. We uncover insights, design concepts and develop
                solutions - both large and small.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FirstPage;
