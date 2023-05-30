import React from 'react'
import Navbar from '../../Components/head/Navbar'
import Footer from '../../Components/footer/Footer'
import "./Home.css"
import HeroComponent from '../../Components/Hero/HeroComponent'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroComponent/>
        <Footer/>
    </div>
  )
}

export default Home