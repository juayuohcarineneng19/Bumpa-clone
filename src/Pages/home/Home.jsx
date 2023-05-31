import React from 'react'
import Navbar from '../../Components/head/Navbar'
import Footer from '../../Components/footer/Footer'
import "./Home.css"
import HeroComponent from '../../Components/Hero/HeroComponent'
// import AdvertiseComponent from '../../Components/Advertise/AdvertiseComponent'
import AdvertBusiness from '../../Components/Advertise/advertBusiness'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroComponent/>
        {/* <AdvertiseComponent/> */}
        <AdvertBusiness/>
        <Footer/>
    </div>
  )
}

export default Home