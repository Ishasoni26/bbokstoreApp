import React from 'react'
import Contact from '../contact'
import Footer from '../Footer'
import Navbar from '../navbar'
const contactus = () => {
  return (
    <>
        <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Contact/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default contactus
