import React from "react";
import "./Socials.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Socials(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="social--container">
      <div className="body--container">
        <div className="text--container">
          <NavLink href="#" className="text--header">
            WE ARE NOW ON
          </NavLink>
        </div>
        <div className="text--container">
          <NavLink href="#" className="text--header">
            TWITTER
          </NavLink>
        </div>
        <div className="text--container">
          <NavLink href="#" className="text--header">
            REDDIT
          </NavLink>
        </div>
        <div className="text--container">
          <NavLink href="#" className="text--header">
            FACEBOOK
          </NavLink>
        </div>
      </div>
      {/* <div className="left--container">
        {" "}
        <div className="title--container">
          <h1 className="first-page--title">
            "Let's Connect To The World Of Digitals"
          </h1>
          {/* <h1></h1> */}
      {/* <span>(Creative Lab)</span> 
        </div>
      </div> */}
    </div>
  );
}

export default Socials;
