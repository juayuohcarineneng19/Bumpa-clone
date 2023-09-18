import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {

      const [clicked, setClicked] = useState(false);

      const handleClick = () => {
        setClicked(!clicked);
      }
      
  return (
    <div className='navbar scroll'>
        <div className="nav-logo">
        <h2 className="logo">Bumpa </h2>
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <FontAwesomeIcon
          icon={clicked ? faTimes : faBars}
          className="menu-icon"
        />
      </div>
 
      <div div className={clicked ? "main-nav active" : "main-nav"}>
            <ul className="main-nav-list ">
                <li><NavLink href="#" className="main-nav-link">Features</NavLink> </li>
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
    
    </div>

  )
}

export default Navbar