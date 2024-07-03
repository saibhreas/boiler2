import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


export default function page() {
  return (
    <div className=' min-h-screen bg-black overflow-hidden'>
      <div className='max-w-7xl mx-auto p-5  dark:bg-black bg-#324da8  dark:bg-grid-white/[0.1] relative' >

          <Navbar  />
          <HeroSection />
     
      </div>
      <div className=" h=10 xlh:h32 bg-gradient-to-t from black absolute -bottom-5 left-0 xl:bottom=0 w-full">
        
        
      </div>

      
    </div>
  )
}

