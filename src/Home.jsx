import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'

const Home = () => {
  return (
    <>
    <div className='bg-blue-50 mx-auto'>
      <HeroSection/>
      <Services/>
      <Trusted/>
      </div>
    </>
  )
}

export default Home
