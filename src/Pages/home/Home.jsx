import React from 'react'
import Navbar from '../../Components/head/Navbar'
import Footer from '../../Components/footer/Footer'
import "./Home.css"
import HeroComponent from '../../Components/Hero/HeroComponent'
import AdvertBusiness from '../../Components/Advertise/advertBusiness'
import AdvertInfo from '../../Components/Advertise/AdvertInfo'
import Accordion from '../../Components/ImportanceOfBumpa/Accordion'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroComponent/>
        <AdvertBusiness/>
        <AdvertInfo/>
        <Accordion/>
        <Footer/>
    </div>
  )
}

export default Home