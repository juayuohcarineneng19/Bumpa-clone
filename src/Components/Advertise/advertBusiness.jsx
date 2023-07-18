import React from 'react'
import AdvertiseComponent from './AdvertiseComponent'
import "./AdvertiseComponent.css"

function advertBusiness() {
  return (
    <div className='advertBusiness'>
        <AdvertiseComponent
        heading = "Bring your business online"
        text = "Create a professional business website in 60 seconds and start selling to anyone on the internet."
        link="Learn More"
        img ="/img/business.png"
        />

        <AdvertiseComponent
        heading = "Become a tech-enabled business"
        text = "Create invoices & receipts, save customer details and record your daily sales from the shop, website, social media and marketplaces easily on your mobile phone."
        link="Learn More"
        img ="/img/connect.png"
        />

        
 </div>
  )
}

export default advertBusiness