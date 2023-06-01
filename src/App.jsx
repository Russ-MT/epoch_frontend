import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Lenis from "@studio-freight/lenis";
import Services from "./Pages/Services/Services";
import Careers from "./Pages/Careers/Careers";
import Socials from "./Pages/Socials/Socials";
import ScrollToTop from "./Components/ScrollWrapper/ScrollWrapper";

// const lenis = new Lenis({
//   duration: 1, // Change the scroll speed
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="career" element={<Careers />}></Route>
          <Route path="socials" element={<Socials />}></Route>
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
