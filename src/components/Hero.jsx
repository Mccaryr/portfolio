import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import SpaceBG from '../assets/Plexus_Space_bg.mp4'


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <section className='relative w-full mx-auto' >
       <video autoPlay loop muted playsInline className="bg-no-repeat bg-center object-cover" style={{height:'70vh', width:'100vw'}}>
              <source src={SpaceBG} type="video/mp4" />
              Your browser does not support the video tag.
        </video>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} whitespace-nowrap ...`}>Hi, I'm <span className='text-[#915eff]'>Rob</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software dev whose deeply passionate about pushing the limits of tech.
          </p>
        </div>
        {isMobile ? 
          <div className='absolute inset-0 top-[30vh] flex flex-col justify-center items-center mt-5 max-w-7x1 mx-auto flex flex-row items-start gap-5'>
          <ComputersCanvas />
          </div>
          :
          <ComputersCanvas />
        }
      
      </div>
    </section>
  )
}

export default Hero