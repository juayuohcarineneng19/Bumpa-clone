import React from 'react'
import './AdvertInfo.css'

function AdvertInfo() {
  return (
    <div className="advert-section">
        <div className="img-advert">
            <img src="/img/phone.png" alt=" advertsection" />
        </div>
        <div className="advert-text1">
          <h1>Grow your business like a pro!</h1>
            <p>
            Connect all the tools you need to grow your business, like payments, Google Analytics, Facebook Pixel, Instagram, etc, to your Bumpa app.
            </p>

            <a href="/home">Learn more &rarr;</a>
        </div>
    </div>

  )
}

export default AdvertInfo