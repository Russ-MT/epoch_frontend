import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  triggerDetails,
  triggerAnimation,
} from "../../features/BackgroundColor/BackgroundColor";
import Bar from "../../assets/bars.svg";
import Cross from "../../assets/xmark.svg";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);

  const triggerDetail = () => {
    dispatch(triggerDetails({ click: false, id: null }));
  };

  const handleClick = () => {
    triggerDetail();
    dispatch(triggerAnimation(true));
  };

  return (
    <motion.header
      style={{
        backgroundColor: bgColor,
      }}
      initial={{ y: "-500px" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="nav--container">
        <div
          className="logo"
          style={{ color: bgColor === "black" ? "white" : "black" }}
        >
          epoch
        </div>
        <div className="nav--links">
          <NavLink
            to="/"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              fontSize: isActive ? "20px" : "15px",
              fontWeight: isActive ? 300 : 200,
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              fontSize: isActive ? "20px" : "15px",
              fontWeight: isActive ? 300 : 200,
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={handleClick}
          >
            About
          </NavLink>
          <NavLink
            to="services"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              fontSize: isActive ? "20px" : "15px",
              fontWeight: isActive ? 300 : 200,
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={handleClick}
          >
            Services
          </NavLink>
          <NavLink
            to="socials"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              fontSize: isActive ? "20px" : "15px",
              fontWeight: isActive ? 300 : 200,
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={handleClick}
          >
            Socials
          </NavLink>
          <NavLink
            to="career"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              fontSize: isActive ? "20px" : "15px",
              fontWeight: isActive ? 300 : 200,
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={handleClick}
          >
            Careers
          </NavLink>
        </div>
        <div className="nav--mobile--container">
          {!isClick && (
            <img
              src={Bar}
              alt="bar"
              className="nav--bar"
              onClick={() => setIsClick(true)}
            />
          )}

          {isClick && (
            <img
              src={Cross}
              alt="bar"
              className="nav--bar"
              onClick={() => setIsClick(false)}
            />
          )}
        </div>
      </div>

      {isClick && (
        <div className="oval--container">
          <div className="nav--links">
            <NavLink
              to="/"
              // onClick={handleNavClick}
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.7,
              })}
              className="nav--link"
              onClick={() => setIsClick(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              // onClick={handleNavClick}
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.7,
              })}
              className="nav--link"
              onClick={() => setIsClick(false)}
            >
              About
            </NavLink>
            <NavLink
              to="services"
              // onClick={handleNavClick}
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.7,
              })}
              className="nav--link"
              onClick={() => setIsClick(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="socials"
              // onClick={handleNavClick}
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.7,
              })}
              className="nav--link"
              onClick={() => setIsClick(false)}
            >
              Socials
            </NavLink>
            <NavLink
              to="career"
              // onClick={handleNavClick}
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.7,
              })}
              className="nav--link"
              onClick={() => setIsClick(false)}
            >
              Careers
            </NavLink>
          </div>
        </div>
      )}

      {/* <div className="animation--container"></div> */}
    </motion.header>
  );
}

export default Navbar;
