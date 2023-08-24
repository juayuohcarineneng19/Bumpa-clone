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
          <img src="/img/logos/techcrunch.png" alt="logo 3" />
        <img src="/img/logos/the-new-york-times.png" alt="logo 4" />
        <img src="/img/logos/forbes.png" alt="logo 2" />
        <img src="/img/logos/usa-today.png" alt="logo 5" />
        <img src="/img/logos/the-new-york-times.png" alt="pic 6" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Logo