import React from 'react'
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

function Navbar() {
  // const toggleButton = document.getElementByClassName("toggle-button")[0]
  // const mainNavList = document.getElementsByClassName("main-nav-list")[0]
  // // const navButtons = document.getElementsByClassName("navbuttons")[0]

  // toggleButton.addEventListener('click',() =>{
  //  mainNavList.classList.toggle('active')
  //   // navButtons.classList.toggle('active')
  // })
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <a href="#"><img src="./img/omnifood-logo.png" alt=""className='logo' /></a>
      </div>
      <div className="main-nav">
      <ul className="main-nav-list ">
        <li><a href="#" className="main-nav-link">Features</a></li>
        <li><a href="#" className="main-nav-link">Company</a></li>
        <li><a href="#" className="main-nav-link">Community</a></li>
        <li><a href="#" className="main-nav-link">Pricing</a></li>
        <li><a href="#" className="main-nav-link">Learn</a></li>
        <li><a href="#" className="main-nav-link nav-cta">Sell on Instagram</a></li>
        
      </ul>
      </div>
      <div className="navbuttons ">
      <a href="#" class="btn btn--outline margin-right-sm  "><strong> Login </strong></a>
         <a href="#" class="btn btn--full ">Get Started</a>
      </div>
      
      {/* menu bars */}
      <a href="#" className="toggle-button">
        <span className="bars"></span>
        <span className="bars"></span>
        <span className="bars"></span>
      </a>
    </div>
  )
}

export default Navbar