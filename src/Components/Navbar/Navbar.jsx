import React from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);

  return (
    <motion.header
      style={{ backgroundColor: bgColor }}
      initial={{ y: "-500px" }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav--container">
        <div
          className="logo"
          style={{ color: bgColor === "black" ? "white" : "black" }}
        >
          LOGO
        </div>
        <div className="nav--links">
          <NavLink
            to="/"
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
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "black" ? "white" : "black",
            })}
            className="nav--link"
          >
            About
          </NavLink>
          <NavLink
            to="socials"
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
