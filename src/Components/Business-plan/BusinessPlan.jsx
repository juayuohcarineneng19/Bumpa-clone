import React from 'react'
import './BusinessPlan.css'
import { FaCheck} from 'react-icons/fa';


function BusinessPlan() {
  const iconStyles= {
    fontSize:".7rem",
    fontWeight:'100',
    marginRight:'.8rem',
    // color:'red'
  }
  return (
    <div className='business-plan'>
         <div className="heading4">
            <h1>Choose a Bumpa plan</h1>
            <p>There’s a Bumpa plan that fits your business.</p>
        </div>
    <div className="card-wrapper">
        <div className="card">
        <h5 className="card-title"> Bumpa Basic </h5>
        <p className="card-price"><span class="price-tag">NO</span>/month</p>
          <p className="description">For new businesses</p>
          <hr className="line" />
          <ul className="card-list">
            <li> <span style={iconStyles}><FaCheck/></span>Free business website</li>
            <li> <span style={iconStyles}><FaCheck/></span>Online transaction charge (1.5%)</li>
            <li> <span style={iconStyles}><FaCheck/></span>25 products listings</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 invoices & receipts </li>
            <li> <span style={iconStyles}><FaCheck/></span>Unlimited discounts & coupons</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 sales record</li>
            <li> <span style={iconStyles}><FaCheck/></span>20 messaging credits</li>
            <li> <span style={iconStyles}><FaCheck/></span>Business Analytics</li>
            <li> <span style={iconStyles}><FaCheck/></span>Free .bumpa.shop domain</li>
          </ul>
          <a href="/" class="btn  btn--full btn--busines">Get Started</a>
    </div>     

    <div className="card">
        <h5 className="card-title"> Bumpa Basic </h5>
        <p className="card-price"><span class="price-tag">NO</span>/month</p>
          <p className="description">For new businesses</p>
          <hr className="line" />
          <ul className="card-list">
            <li> <span style={iconStyles}><FaCheck/></span>Free business website</li>
            <li> <span style={iconStyles}><FaCheck/></span>Online transaction charge (1.5%)</li>
            <li> <span style={iconStyles}><FaCheck/></span>25 products listings</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 invoices & receipts </li>
            <li> <span style={iconStyles}><FaCheck/></span>Unlimited discounts & coupons</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 sales record</li>
            <li> <span style={iconStyles}><FaCheck/></span>20 messaging credits</li>
            <li> <span style={iconStyles}><FaCheck/></span>Business Analytics</li>
            <li> <span style={iconStyles}><FaCheck/></span>Free .bumpa.shop domain</li>

          </ul>
          <a href="/" class="btn  btn--full btn--busines">Get Started</a>
    </div>        

    <div className="card">
        <h5 className="card-title"> Bumpa Basic </h5>
        <p className="card-price"><span class="price-tag">NO</span>/month</p>
          <p className="description">For new businesses</p>
          <hr className="line" />
          <ul className="card-list">
            <li> <span style={iconStyles}><FaCheck/></span>Free business website</li>
            <li> <span style={iconStyles}><FaCheck/></span>Online transaction charge (1.5%)</li>
            <li> <span style={iconStyles}><FaCheck/></span>25 products listings</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 invoices & receipts </li>
            <li> <span style={iconStyles}><FaCheck/></span>Unlimited discounts & coupons</li>
            <li> <span style={iconStyles}><FaCheck/></span>50 sales record</li>
            <li> <span style={iconStyles}><FaCheck/></span>20 messaging credits</li>
            <li> <span style={iconStyles}><FaCheck/></span>Business Analytics</li>
            <li> <span style={iconStyles}><FaCheck/></span>Free .bumpa.shop domain</li>
          </ul>
          <a href="/" class="btn  btn--full btn--busines">Get Started</a>
    </div>           
    </div>
    <p className='borderbottom'>compare plans and features</p>
     </div>
    
  )
}

export default BusinessPlan