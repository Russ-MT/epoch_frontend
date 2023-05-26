import React, { useEffect, useState } from "react";
import "./SecondPage.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

function SecondPage(props) {
  const currRef = useRef(null);
  const divRef = useRef(null);
  const isInView = useInView(currRef);
  const isDivInView = useInView(divRef);

  return (
    <div className="second--container" ref={currRef}>
      <motion.section
        className="main--container tracked-div"
        initial={{ y: isInView ? "100px" : 0 }}
        animate={{ y: isInView ? 0 : "100px" }}
        transition={{ duration: 1 }}
      >
        <div className="left--container">
          <h1 className="soft--header">DESIGN,</h1>
          <h1 className="soft--header">STORIES,</h1>
          <h1 className="soft--header">INNOVATIVE & TECHNOLOGY,</h1>
          <h1 className="main--header">
            A PLACE FOR <span>EXCITEMENTS</span> &{" "}
            <span style={{ backgroundColor: "rgb(0, 0, 184)", color: "white" }}>
              EXPERIMENTS
            </span>{" "}
          </h1>
        </div>
        <div className="right--container">
          <img src="img/exampleTwo.jpeg" alt="test" />
        </div>
      </motion.section>
      <motion.section
        className="second--main--container"
        initial={{ y: isDivInView ? "100px" : 0 }}
        animate={{ y: isDivInView ? 0 : "100px" }}
        transition={{ duration: 1 }}
        ref={divRef}
      >
        <div className="card--container">
          <div className="card card--one">
            {" "}
            <h1>WHY US?</h1>
          </div>
          <motion.div className="card card--two">
            <h1>"WE ARE A TEAM OF YOUNG AND ENTHUSIASTS"</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              quibusdam! Natus exercitationem quibusdam sapiente temporibus,
              dolore voluptas debitis quasi porro tenetur perspiciatis minima
              est iure maxime esse harum repellendus magni.
            </p>
            <div className="lower--part">
              <h1 className="num">01</h1>
              <h1 className="num">&rarr;</h1>
            </div>
          </motion.div>

          <motion.div className="card card--four">
            <h1>"WE'VE GOT TECH GUYS"</h1>
            <p>
              We know how to code. Website, Mobile App, Desktop App - you name
              it. And We are developing util tools for Business Needs.
            </p>
            <div className="lower--part">
              <h1 className="num">02</h1>
              <h1 className="num">&rarr;</h1>
            </div>
          </motion.div>
          <motion.div className="card card--five">
            <h1>"WE'VE GOT ARTISTS"</h1>
            <p>
              They can draw ofcourse. Character development, 3D , any kind of
              art.
            </p>
            <div className="lower--part">
              <h1 className="num">03</h1>
              <h1 className="num">&darr;</h1>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default SecondPage;
