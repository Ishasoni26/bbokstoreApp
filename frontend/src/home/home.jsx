import React from 'react'
import Banner from '../Components/Banner'
import Freebook from '../Components/Freebook'
import Footer from '../Components/Footer'
import Navbar from '../Components/navbar'


const home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
  )
}

export default home
