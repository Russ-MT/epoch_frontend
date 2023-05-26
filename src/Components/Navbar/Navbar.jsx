import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);
  const location = useLocation();

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
          >
            Careers
          </NavLink>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
