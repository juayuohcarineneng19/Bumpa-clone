import React from 'react'
import './BusinessPlan.css'

function BusinessPlan() {
  return (
    <div className='business-plan'>
         <div className="heading4">
            <h1>Choose a Bumpa plan</h1>
            <p>There’s a Bumpa plan that fits your business.</p>
        </div>


    <div className="card-wrapper">
        <div className="card">
        <h5 className="card-title"> Bumpa Basic </h5>
        <p className="card-price"><span class="price-tag">N0 </span> /Price</p>
          <p className="description">For new businesses</p>
          <hr className="line" />
          <ul className="card-list">
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
    </div>        
    </div>
     </div>
    
  )
}

export default BusinessPlan