import { useState } from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false) 

// Toggle menu function
const toggleMenu = () => {
  setMenuOpen(!menuOpen)
}

  
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <h2 className="logo">Bumpa </h2>
      </div>
      <div className="main-nav">
      <ul className={`main-nav-list ${menuOpen ? 'active' : ''}`}>
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
      <div className="hamburger" onClick={() => toggleMenu()}>
          <div class="line"></div>
            <div class="line"></div>
               <div class="line"></div>
        </div>

    </div>
  )
}

export default Navbar