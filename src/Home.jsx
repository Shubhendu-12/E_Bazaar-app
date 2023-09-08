import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeaturedProducts from './components/FeaturedProducts'

const Home = () => {
  return (
    <>
    <div className='bg-blue-50 mx-auto'>
      <HeroSection/>
      <FeaturedProducts/>
      <Services/>
      <Trusted/>
      </div>
    </>
  )
}

export default Home
