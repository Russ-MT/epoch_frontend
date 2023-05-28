import React from "react";
import "./SecondPageHelper.scss";
import { motion } from "framer-motion";

function SecondPageHelper(props) {
  return (
    <div className="secondhelper--container">
      <motion.section
        className="second--main--container"
        // initial={{ y: isDivInView ? "100px" : 0 }}
        // animate={{ y: isDivInView ? 0 : "100px" }}
        // transition={{ duration: 1 }}
        // ref={divRef}
      >
        <div className="image--container">
          <div className="image--container--mini">
            <img src="img/testThree.jpeg" alt="test" />
          </div>
          <div className="image--container--mini">
            <img
              src="img/testTwo.jpeg"
              alt="test"
              style={{ marginLeft: "5px" }}
            />
          </div>
        </div>
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

export default SecondPageHelper;
