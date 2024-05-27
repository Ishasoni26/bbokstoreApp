import React from 'react'
import Footer from '../Components/Footer'
import Courses from '../Components/Course'



const courses = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Courses/>
      </div>
      <Footer/>
    </div>
  )
}

export default courses
