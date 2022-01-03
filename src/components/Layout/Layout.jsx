import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <Hero />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
