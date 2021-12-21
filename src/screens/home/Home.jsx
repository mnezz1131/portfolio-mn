import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Hero from "../../components/Hero/Hero.jsx"
import Portfolio from "../../components/Portfolio/Portfolio.jsx";


function Home() {
  return <div>
    <Hero />
    <AboutMe />
    <Portfolio />
  </div>;
}

export default Home;
