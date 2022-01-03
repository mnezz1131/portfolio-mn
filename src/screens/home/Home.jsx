import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-background-image">
        <h1 className="home-title">Mike Nezzer</h1>
        <br></br>
        <h2 className="home-desc">
          Full Stack Developer &#9734; Accountant &#9734; Musician
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
