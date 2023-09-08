import React from 'react'
import { NavLink } from "react-router-dom";

import './Navbar.css'

function Navbar() {
  
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <NavLink href="#"><img src="./img/omnifood-logo.png" alt=""className='logo' /></NavLink>
      </div>
      <div className="main-nav">
      <ul className="main-nav-list ">
        <li><NavLink href="#" className="main-nav-link">Features</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Community</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Pricing</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Learn</NavLink></li>
        <li><NavLink href="#" className="main-nav-link nav-cta">Sell on Instagram</NavLink></li>
        
      </ul>
      </div>
      <div className="navbuttons">
      <a href="/" class="btn btn--outline margin-right-sm"><strong> Login </strong></a>
         <a href="/" class="btn btn--full">Get Started</a>
      </div>
      
      {/* menu bars */}
      <NavLink href="#" className="toggle-button">
        <span className="bars"></span>
        <span className="bars"></span>
        <span className="bars"></span>
      </NavLink>
    </div>
  )
}

export default Navbar