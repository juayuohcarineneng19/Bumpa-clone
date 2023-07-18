import React from 'react'
import './BumpaHelp.css'
import Accordion from './Accordion';

function BumpaHelpComponent() {

    const spanStyle={
        color:'#008000'
    };
  return (
    <div className='bumpahelpcomponent'>
        <div className="heading3">
            <h1>How <span style={spanStyle}>Bumpa</span> can help you</h1>
            <p>There’s a Bumpa feature for every business need.</p>
        </div>

        <div className="websitehome">
           <div> <Accordion/> </div>
            <div className="img-website">
            <img src="/img/websitehome.png" alt="feaure" />
        </div>
        </div>
        
    </div>
  )
}

export default BumpaHelpComponent