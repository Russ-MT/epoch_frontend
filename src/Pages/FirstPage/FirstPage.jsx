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
              <div className="title--container">
                <h1 className="first-page--title">
                  EP <div className="o--container"></div>CH
                </h1>
                {/* <h1></h1> */}
                {/* <span>(Creative Lab)</span> */}
              </div>
            </div>
            <div className="right--container">
              <div className="white--div"></div>
              <div className="black--div"></div>
              <div className="blue--div"></div>
            </div>
          </div>
          <div className="lower--container">
            <motion.img src="img/example.webp" alt="test" ref={imgRef} />
            <div className="right--container">
              <motion.p
                className="first-page--body"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                Antinomy offers a wide range of services that apply to many
                industries. We uncover insights, design concepts and develop
                solutions - both large and small.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FirstPage;
