import React from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Hero() {
  return (
    <div className="contain">
      <div className="jumbotron jumbotron-fluid">
        <h1
          className="jumbo-h1"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          Mike Nezzer
        </h1>
        <br></br>
        <h2 className="jumbo-h2">
          Full Stack Developer &#9734; Accountant &#9734; Musician
        </h2>
      </div>
    </div>
  );
}

export default Hero;
