import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Contact from "../../components/Contact/Contact.jsx"
function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
