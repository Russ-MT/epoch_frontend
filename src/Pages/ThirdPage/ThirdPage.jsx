import React from "react";
import "./ThirdPage.scss";
import { useRef } from "react";
import "intersection-observer";
import { useInView, motion } from "framer-motion";

function ThirdPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);

  return (
    <>
      <div className="third-page" ref={currRef}>
        {isInView && (
          <div className="third-page--container">
            <img src="img/test.jpeg" alt="test" />
            <motion.div className="article">
              <div className="h1--container" style={{ overflow: "hidden" }}>
                {/* <motion.h1
                  className="article--heading targetDiv"
                  initial={{
                    y: isInView ? "1000px" : 0,
                    opacity: isInView ? 0 : 1,
                  }}
                  animate={{
                    y: isInView ? 0 : "1000px",
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                >
                  <TypeWriterEffect
                    startDelay={0}
                    cursorColor="black"
                    multiText={[
                      "LET'S",
                      "CONNECT",
                      "THE ....",
                      "DOTS",
                      "LET'S CONNECT THE DOTS.",
                    ]}
                    multiTextDelay={2000}
                    typeSpeed={40}
                    multiTextLoop
                  />
                </motion.h1> */}
              </div>
              <div className="h1--container" style={{ overflow: "hidden" }}>
                <motion.p
                  className="article--description targetDiv"
                  initial={{
                    y: isInView ? "1000px" : 0,
                    opacity: isInView ? 0 : 1,
                  }}
                  animate={{
                    y: isInView ? 0 : "1000px",
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{ duration: 1.3 }}
                >
                  We believe that the potential of web3 can be realized when we
                  start with imagination, not limitations.No borders,no
                  rulers,just people making cool shit, together.In the
                  Yugaverse,fans and players are owner sand creators,and in the
                  game of web3,everyone can create and play together on one
                  team.
                </motion.p>
                <motion.a
                  className="learn-more"
                  initial={{
                    y: isInView ? "1000px" : 0,
                    opacity: isInView ? 0 : 1,
                  }}
                  animate={{
                    y: isInView ? 0 : "1000px",
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

export default ThirdPage;
