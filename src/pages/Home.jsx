import React from 'react'
import Hero from '../components/Hero.jsx'
import PickUp from '../components/PickUp.jsx'
import ContinueLearning from '../components/ContinueLearning.jsx'
import Recommended from '../components/Recommended.jsx'
import FeaturedPaths from '../components/FeaturedPaths.jsx'
import Navbar from '../components/Navbar.jsx'
import MobileNavbar from '../components/MobileNavbar.jsx'

const Home = () => {
  const isMobile = window.innerWidth <= 830;

  return (
    <div className='w-[100vw] overflow-hidden'>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className="pl-[30px] pr-[30px] md:pl-[50px] md:pr-[50px] lg:pl-[170px] lg:pr-[170px] w-[100vw]">
        <Hero />
        <PickUp />
      </div>
      <div className="lg:pl-[170px] lg:pr-[170px] w-[100vw]">
        <ContinueLearning />
        <Recommended />
        <FeaturedPaths />
      </div>
    </div>
  )
}

export default Home