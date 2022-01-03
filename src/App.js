import Home from "./screens/home/Home.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
