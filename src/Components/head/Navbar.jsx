import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import './Navbar.css'

function Navbar() {

          // State for menu open/closed 
        const [menuOpen, setMenuOpen] = useState(false);

        // Toggle menu function
        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        }

  
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <h2 className="logo">Bumpa </h2>
      </div>

      <div className={`main-nav ${menuOpen ? 'active' : ''}`}>
      <ul className="main-nav-list ">
        <li><NavLink href="#" className="main-nav-link">Features</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Community</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Pricing</NavLink></li>
        <li><NavLink href="#" className="main-nav-link">Learn</NavLink></li>
        <li><NavLink href="#" className="main-nav-link nav-cta">Sell on Instagram</NavLink></li>
        
      </ul>

      <div className="navbuttons">
      <a href="/" class="btn btn--outline margin-right-sm"><strong> Login </strong></a>
         <a href="/" class="btn btn--full">Get Started</a>
      </div>
      </div>
 


                            <div className="menu-icons">

                      {/* Hamburger Icon */}
                       <FontAwesomeIcon 
                        icon={faBars}
                        onClick={toggleMenu} 
                        className={!menuOpen ? 'menu-icon' : 'hide'} 
                      /> 

                      {/* Close Icon */}
                       <FontAwesomeIcon
                        icon={faTimes}  
                        onClick={toggleMenu}
                        className={menuOpen ? 'menu-icon' : 'hide'} 
                      />

                      </div> 


    </div>

  )
}

export default Navbar