import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Lenis from "@studio-freight/lenis";
import Services from "./Pages/Services/Services";

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
