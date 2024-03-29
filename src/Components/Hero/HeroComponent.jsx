import React from 'react'
import "./HeroComponent.css"

function HeroComponent() {
  return (
    <div className="hero">
        <div className="text">
        <h2>The best business management app for SMEs.</h2>
        <p>
          Create a business website, issue invoices, record sales, receive
          financial reports & manage all business operations on the Bumpa app.
        </p>
        <a href="/" class="btn btn--full">Get Started</a>
      </div>
      <div className="image">
        <img src="/img/hero-image.png" alt="herophoto" />
      </div>
    </div>
  )
}

export default HeroComponent