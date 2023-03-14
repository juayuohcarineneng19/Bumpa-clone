import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faRandom, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-solid-svg-icons'


import './Footer.css'

function footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="logo-col">
                <p className="logo-footer">
                    <a href="#"><img src="./img/omnifood-logo.png" alt=""className='logo' /></a>
                </p>
                <p className="footer-text">
                The 360 business management experience for small businesses across Africa
                </p>
                <ul className="social-icons">
                    <li> <a href="#" className="footer-links"><FontAwesomeIcon icon= {faRandom} /></a></li>
                     
                </ul>
            </div>
            <div className="company-col">
                <p className="footer-heading"> <a href="#">Company</a> </p>
                <ul className="footer-nav">
                    <li className="footer-links"><a href="#">About Us</a></li>
                    <li className="footer-links"><a href="#">Pricing</a></li>
                    <li className="footer-links"><a href="#">Career</a></li>
                </ul>
            </div>
            <div className="resources-col">
                <p className="footer-heading"> <a href="#">Resources</a></p>
                <ul className="footer-nav">
                    <li className="footer-links"><a href="#">Blog</a></li>
                    <li className="footer-links"><a href="#">FAQs</a></li>
                    <li className="footer-links"><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="legal-col">
                <div className="footer-heading"><a href="#">Legal</a></div>
                <ul className="footer-nav">
                    <li className="footer-links"><a href="#">Legal</a></li>
                    <li className="footer-links"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default footer