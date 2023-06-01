import React from "react";
import "./ThirdPage.scss";
import { useRef } from "react";
import "intersection-observer";
import { useInView, motion } from "framer-motion";
import arrowRightDown from "../../assets/arrowrightdown.svg";

function ThirdPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);

  return (
    <>
      <div className="third-page" ref={currRef}>
        <motion.div
          className="third-page--container"
          initial={{ y: isInView ? "100px" : 0 }}
          animate={{ y: isInView ? 0 : "100px" }}
          transition={{ duration: 1 }}
        >
          <img src="img/test.jpeg" alt="test" />
          <motion.div className="article">
            <div className="h1--container" style={{ overflow: "hidden" }}></div>
            <div className="h1--container" style={{ overflow: "hidden" }}>
              <motion.p
                className="article--description targetDiv"
                initial={{
                  y: isInView ? "100px" : 0,
                  opacity: isInView ? 0 : 1,
                }}
                animate={{
                  y: isInView ? 0 : "100px",
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 1 }}
              >
                We believe that the potential of web3 can be realized when we
                start with imagination, not limitations.No borders,no
                rulers,just people making cool shit, together.In the
                Yugaverse,fans and players are owner sand creators,and in the
                game of web3,everyone can create and play together on one team.
              </motion.p>
              <motion.a
                className="learn-more"
                initial={{
                  y: isInView ? "100px" : 0,
                  opacity: isInView ? 0 : 1,
                }}
                animate={{
                  y: isInView ? 0 : "100px",
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 1 }}
              >
                Learn More
                <img src={arrowRightDown} alt="test" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ThirdPage;
