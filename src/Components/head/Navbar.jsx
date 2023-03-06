import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <a href="#">Logo</a>
      </div>
      <ul className="main-nav">
        <li><a href="#" className="main-nav-link">Features</a></li>
        <li><a href="#" className="main-nav-link">Company</a></li>
        <li><a href="#" className="main-nav-link">Community</a></li>
        <li><a href="#" className="main-nav-link">Pricing</a></li>
        <li><a href="#" className="main-nav-link">Learn</a></li>
        <li><a href="#" className="main-nav-link">Sell on Instagram</a></li>
      </ul>
      <div className="navbuttons">
        <button className="btnLogin btn">Login</button>
        <button className="btn btnGetStarted">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar