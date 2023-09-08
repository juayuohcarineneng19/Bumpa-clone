import React from 'react'

function Carousel() {
  return (
    <div className="carousel-wrap">
    <div className='testimonial-carousel'>
        <div className="test">
        <div className="testimonial-card">
            <img src="/img/steph.jpg" alt="steph testimonial"/>
        </div>
        <div className="testimony">
            <h3>"Thank You Bumpa"</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Id et illum deleniti voluptas numquam unde maxime nam
                  voluptatum aperiam eos blanditiis, quae itaque,
                 aliquid libero atque nobis illo. Voluptate, voluptatibus.</p>   
                 <p>Steph</p>
        </div>
        </div>

        <div className="test">
        <div className="testimonial-card">
            <img src="/img/ore.jpg" alt="steph testimonial"/>
        </div>
        <div className="testimony">
            <h3>"Bumpa"</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Id et illum deleniti voluptas numquam unde maxime nam
                  voluptatum aperiam eos blanditiis, quae itaque,
                 aliquid libero atque nobis illo. Voluptate, voluptatibus.</p>   
                 <p>Ore</p>
        </div>
        </div>

        <div className="test">
        <div className="testimonial-card">
            <img src="/img/peculiar.jpg" alt="steph testimonial"/>
        </div>
        <div className="testimony">
            <h3>"Thank"</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Id et illum deleniti voluptas numquam unde maxime nam
                  voluptatum aperiam eos blanditiis, quae itaque,
                 aliquid libero atque nobis illo. Voluptate, voluptatibus.</p>   
                 <p>Peculiar</p>
        </div>
        </div>       
    </div>
    </div>
  )
}

export default Carousel