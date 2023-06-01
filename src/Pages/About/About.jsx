import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import AboutFirstPage from "../AboutFirstPage/AboutFirstPage";
import TaleOfUs from "../../Components/TaleOfUs/TaleOfUs";
import Goals from "../../Components/Goals/Goals";

function About(props) {
  return (
    <React.Fragment data-barba="wrapper">
      <motion.div
        className="about"
        data-barba="container"

        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 1 }}
        // transition={{ duration: 1 }}
      >
        <AboutFirstPage />
        <TaleOfUs />
        <Goals />
      </motion.div>
    </React.Fragment>
  );
}

export default About;
