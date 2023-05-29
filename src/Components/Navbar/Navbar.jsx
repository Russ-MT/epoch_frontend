import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { triggerDetails } from "../../features/BackgroundColor/BackgroundColor";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);
  const dispatch = useDispatch();

  const triggerDetail = () => {
    dispatch(triggerDetails({ click: false, id: null }));
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
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={triggerDetail}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={triggerDetail}
          >
            About
          </NavLink>
          <NavLink
            to="services"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={triggerDetail}
          >
            Services
          </NavLink>
          <NavLink
            to="socials"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={triggerDetail}
          >
            Socials
          </NavLink>
          <NavLink
            to="career"
            // onClick={handleNavClick}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
            onClick={triggerDetail}
          >
            Careers
          </NavLink>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
