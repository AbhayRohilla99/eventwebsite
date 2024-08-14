import React from 'react'
import Slickslider from './Slickslider'
import Cslider from './Cslider'


const Hero = () => {
  return (
    <>
     <div className='w-[80vw] mx-auto my-6'>
        <div>
            <p className='capitalize text-[35px] text-center'>popular venue searches</p>
        </div>
        <div className='pt-6 w-[100%]'>
            <Slickslider />
        </div>
        
     </div>
     <div className='w-[100vw]'>
            <Cslider />
        </div>
    </>
  )
}

export default Hero