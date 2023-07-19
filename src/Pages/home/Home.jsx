import React from 'react'
import Navbar from '../../Components/head/Navbar'
import Footer from '../../Components/footer/Footer'
import "./Home.css"
import HeroComponent from '../../Components/Hero/HeroComponent'
import AdvertBusiness from '../../Components/Advertise/advertBusiness'
import AdvertInfo from '../../Components/Advertise/AdvertInfo'
import BumpaHelpComponent from '../../Components/ImportanceOfBumpa/BumpaHelpComponent'
import Connect from '../../Components/Connections/Connect'
function Home() {
  return (
    <div>
        <Navbar/>
        <HeroComponent/>
        <AdvertBusiness/>
        <AdvertInfo/>
        <BumpaHelpComponent/>
        <Connect/>
        <Footer/>
    </div>
  )
}

export default Home