import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; // Import animateScroll function

function Footer(props) {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 3000, // Set the desired duration in milliseconds
      smooth: "easeInOutQuint", // Set the easing function for a smoother animation (optional)
    });
  };

  return (
    <footer>
      <div className="footer--container">
        <div className="footer">
          <div className="footer--head">
            <div className="footer--head--one">
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
              <NavLink to="about" onClick={scrollToTop}>
                About
              </NavLink>
              <NavLink to="services" onClick={scrollToTop}>
                Services
              </NavLink>
            </div>

            <div className="footer--head--three">
              <NavLink to="socials" onClick={scrollToTop}>
                Social
              </NavLink>
              <NavLink to="career" onClick={scrollToTop}>
                Career
              </NavLink>
            </div>
            <div className="logo--container">
              <div className="title--container">
                <h1 className="first-page--title">
                  EP<div className="o--container"></div>CH
                </h1>
              </div>
            </div>
          </div>
          <div className="footer-paragraph">
            <p>From the smooth brains of Degenerate Laboratories Inc.</p>
            <p>&#169; All Rights Reserved 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
