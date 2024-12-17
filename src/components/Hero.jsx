import { useState, useEffect } from 'react'
import {styles} from '../styles'
import ShipCanvas from "./canvas/SpaceShip.jsx";
import {StarsCanvas} from "./canvas/index.js";


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
      <div className='bg-no-repeat bg-center object-cover h-[70vh] w-full'>
        <StarsCanvas />
      </div>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} whitespace-nowrap ...`}>Hi, I&apos;m <span className='text-[#915eff]'>Rob</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software dev who&apos;s deeply passionate about pushing the limits of tech.
          </p>
        </div>
        {isMobile ? 
          <div className='absolute inset-0 top-[30vh] flex-col justify-center items-center mt-5 max-w-7x1 mx-auto flex gap-5'>
          <ShipCanvas />
          </div>
          :
          <ShipCanvas />
        }
      
      </div>
    </section>
  )
}

export default Hero
