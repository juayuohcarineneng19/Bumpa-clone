import React from 'react'
import './Logo.css'


function Logo() {
  
  return (
    <div>
    <div className="logo-carousel"> 
      <div className="heading5">
            <h1>Bumpa in the press</h1>
            <p>The media recognises what we are doing for small businesses in Africa.</p> 
        </div>
    </div>
    <div className="carousel">
        <div className="marquee">
          <div className="marquee-inner">
          <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
        <img src="image5.jpg" alt="Image 5" />
        <img src="image6.jpg" alt="Image 6" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Logo