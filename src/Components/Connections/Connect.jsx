import React from 'react'
import './Connect.css'

function connect() {
    const connectStyle ={
        color:'#008000'
    }
  return (
    <div className='connect'>
        <div className="advert-text1">
          <h1>Connected Apps</h1>
            <p>
            Your Bumpa app works easily with these business tools.
            </p>

            <a style={connectStyle} href="/home">Learn more &rarr;</a>
            </div>

            <div className="logos">
            <div className="connect-logos">
                <img src="/img/facebook.png" alt="" />
            </div>
            <div className="advert-text1">
          <h1>Facebook</h1>
            <p>
                connected <span></span>
            </p>
            </div>
            </div>
            
    </div>
  )
}

export default connect