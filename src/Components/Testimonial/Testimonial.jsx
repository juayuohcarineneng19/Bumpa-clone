import React, { useState, useEffect } from 'react';
import './Testimonial.css'
import Carousel from './Carousel';

function Testimonial() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= 50000) {
            clearInterval(interval);
            return prevCount;
          }
          return prevCount + 1000;
        });
      }, 100);
      return () => clearInterval(interval);
    }, []);
  


    const spanStyle={
        color:'#008000'
    };

  return (
    <div className='testimonial'>
        <div className="heading3">
            <h1>Trusted By Over <span style={spanStyle}>{ count }</span> SME's</h1>
            <p>Our customers talk about how Bumpa solves real life business problems for them</p>
        </div>
        <Carousel/>
        {/* <div className="testimonial_text">
          <h5>hgljkh</h5>
        </div> */}
    </div>
  )
}

export default Testimonial