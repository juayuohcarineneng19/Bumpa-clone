import React from 'react'
import './Testimonial.css'

function Testimonial() {

    const spanStyle={
        color:'#008000'
    };

  return (
    <div className='testimonial'>
        <div className="heading3">
            <h1>Trusted By Over <span style={spanStyle}>50,000</span> SME's</h1>
            <p>Our customers talk about how Bumpa solves real life business problems for them

</p>
        </div>

    </div>
  )
}

export default Testimonial