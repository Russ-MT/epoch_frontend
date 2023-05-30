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
              Ready to work with us ? Reach out to discuss how we can help you
              build a strong digital brand presence.
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FifthPage;
