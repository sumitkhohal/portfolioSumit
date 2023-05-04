import React from "react";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import SocialLinks from "./Components/SocialLinks";
import Project from "./Components/Project";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
        <SocialLinks />
      </div>
    </>
  );
};

export default App;
