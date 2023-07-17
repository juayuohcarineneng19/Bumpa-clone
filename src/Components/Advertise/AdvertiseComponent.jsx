import React from 'react'
import "./AdvertiseComponent.css"

function AdvertiseComponent(props) {
  return (
    <div className='advert'>
        <div className="advert-info">
            <div className="advert-text">
              <h1> {props.heading} </h1>
            <p> {props.text} </p>

            <a href="/">{props.link}</a>

            </div>
            <div className="advert-image">
            <img src={props.img} alt=" online advert" />
        </div>

        </div>
   
    </div>
  )
}

export default AdvertiseComponent