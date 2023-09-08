import React from 'react'
import './Connect.css'

function connect() {
    const connectStyle ={
        color:'#008000'
    }
  return (
    <div className='connect'>
        <div className="advert-text1 advert-text1-helper">
          <h1>Connected Apps</h1>
            <p>
            Your Bumpa app works easily with these business tools.
            </p>

            <a style={connectStyle} href="/home">Learn more &rarr;</a>
            </div>

            <div className="logos-section ">
            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/facebook.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>Facebook</h3>
           <p> <span style={connectStyle}>&#46;</span>Connected</p>
            </div>
            </div>
            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/instagram.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>Instagram</h3>
           <p> <span style={connectStyle}>&#46;</span> Connected</p>
            </div>
            </div>
            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/hostintegration.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>Whogohst</h3>
           <p> <span style={connectStyle}>&#46;</span>Connected</p>
            </div>
            </div>
            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/paystack.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>Paystack</h3>
           <p> <span style={connectStyle}>&#46;</span>Connected</p>
            </div>
            </div>
            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/flw.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>FlutterWave</h3>
           <p> <span style={connectStyle}>&#46;</span>Connected</p>
            </div>
            </div>

            <div className="logos">
            <div className="connect-logos">
               <div className="logo-wrapper">
                 <img src="/img/pixel.png" alt="" />
               </div>
            </div>
            <div className="text1">
          <h3>Pixel</h3>
           <p> <span style={connectStyle}>&#46;</span>Connected</p>
            </div>
            </div>
            </div> 
    </div>
  )
}

export default connect