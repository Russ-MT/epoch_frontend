import React, { useEffect, useState } from "react";
import "./SecondPage.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function SecondPage(props) {
  const currRef = useRef(null);
  const divRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(currRef);
  const isDivInView = useInView(divRef);
  const isCardInView = useInView(cardRef);

  return (
    <div className="second--container" ref={currRef}>
      <div className="header--container">
        <motion.section
          className="main--container tracked-div"
          initial={{ y: isInView ? "200px" : 0 }}
          animate={{ y: isInView ? 0 : "200px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="left--container">
            <h1 className="soft--header">DESIGN,</h1>
            <h1 className="soft--header">STORIES,</h1>
            <h1 className="soft--header">
              {" "}
              <span style={{ color: "rgb(0, 0, 184)" }}> INNOVATIVE</span> &
              TECHNOLOGY,
            </h1>
            <h1 className="main--header">
              A PLACE FOR EXCITEMENTS&{" "}
              <span style={{ color: "rgb(0, 0, 184)" }}>EXPERIMENTS</span>{" "}
            </h1>
          </div>
          <div className="right--container">
            <img src="img/scope2.png" alt="test" />
          </div>
        </motion.section>
      </div>
      <motion.section
        className="second--main--container"
        // initial={{ y: isInView ? "1000px" : 0 }}
        // animate={{ y: isInView ? 0 : "1000px" }}
        // transition={{ duration: 1 }}
        // initial={{ y: isDivInView ? "100px" : 0 }}
        // animate={{ y: isDivInView ? 0 : "100px" }}
        // transition={{ duration: 0.5 }}
        // initial={{ y: isDivInView ? "1000px" : 0 }}
        // animate={{ y: isDivInView ? 0 : "1000px" }}
        // transition={{ duration: 0.5 }}
        ref={divRef}
      >
        <div className="image--container">
          <div className="image--container--mini">
            <img
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
              alt="test"
            />
          </div>
          <div className="image--container--mini " id="second--img">
            <img
              src="https://images.unsplash.com/photo-1684577753340-de97c66fa6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="test"
            />
          </div>
        </div>
        <div
          className="card--container"
          ref={cardRef}
          // initial={{
          //   y: isCardInView ? "100px" : 0,
          // }}
          // animate={{
          //   y: isCardInView ? 0 : "100px",
          // }}
          // transition={{ duration: 1 }}
        >
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

          <div className="lower--card--container">
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
        </div>
      </motion.section>
    </div>
  );
}

export default SecondPage;
