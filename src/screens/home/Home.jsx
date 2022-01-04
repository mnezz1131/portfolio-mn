import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-background-image">
        <h1
          className="home-title"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          Mike Nezzer
        </h1>
        <br></br>
        <h2
          className="home-desc"
         
        >
          Full Stack Developer &#9734; Accountant &#9734; Musician
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
