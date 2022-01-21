import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar_container'>
      <div className="navbar">
        <li>
          <NavLink className="navlink" to ="/">Home</NavLink>
        </li>
      <li>
        <NavLink className="navlink" to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink className="navlink" to="/about">About Me</NavLink>
      </li>
  
      <li>
        <NavLink className="navlink" to="/contact">Contact</NavLink>
        </li>
        </div>
    </div>
  )
}

export default Navbar
