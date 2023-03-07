import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <a href="#">Logo</a>
      </div>
      <div className="main-nav">
      <ul className="main-nav-list">
        <li><a href="#" className="main-nav-link">Features</a></li>
        <li><a href="#" className="main-nav-link">Company</a></li>
        <li><a href="#" className="main-nav-link">Community</a></li>
        <li><a href="#" className="main-nav-link">Pricing</a></li>
        <li><a href="#" className="main-nav-link">Learn</a></li>
        <li><a href="#" className="main-nav-link nav-cta">Sell on Instagram</a></li>
        
      </ul>
      </div>
      <div className="navbuttons">
      <a href="#" class="btn btn--outline margin-right-sm  "><strong> Login </strong></a>
         <a href="#" class="btn btn--full ">Get Started</a>
      </div>
    </div>
  )
}

export default Navbar