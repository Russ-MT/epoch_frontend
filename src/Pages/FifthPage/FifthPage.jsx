import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./FifthPage.scss";

function FifthPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);

  const handleContactClick = () => {
    window.location.href = "mailto:myo111thant@gmail.com";
  };

  return (
    <>
      <div className="fourth-page" ref={currRef}>
        <motion.div
          className="fourth-page--container"
          animate={{ opacity: isInView ? 1 : 0 }}
          initial={{ opacity: isInView ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text--container">
            <NavLink onClick={handleContactClick}>
              <h1 className="contact">Contact Us</h1>
            </NavLink>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              suscipit dolorum qui illo, animi odit repellat soluta numquam
              officiis repudiandae obcaecati voluptates vel, minus aspernatur id
              voluptas hic labore perferendis?
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FifthPage;
