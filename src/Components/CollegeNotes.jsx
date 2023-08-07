import React from 'react'
import Sikhsha from '../assets/Sikhsha.png'
import KIIT from '../assets/KIIT.png'
import Cvraman from '../assets/Cvraman.png'
import IITBBSR from '../assets/IITBBSR.png'
import Silicon from '../assets/Silicon.png'

const CollegeNotes = () => {
  return (
    <div className='w-full md:h-[200px] flex flex-col justify-between my-24 md:mt-1 pt-16 md:pb-64'>
      <div className='max-w-[1240px] md:mt-2 m-auto'>
        <div className='flex flex-col justify-center md:items-start gap-5 md:gap-10  w-full px-2 md:py-8'>
          <h2 className='text-4xl md:text-5xl font-bold uppercase text-center text-[#212121]'>universities whose  <span className='text-green-500'> notes </span>we have
          </h2>


          <div className='flex justify-center items-center w-10 md:w-40 gap-5 md:gap-20 mx-auto'>
            <img src={KIIT} alt="college2" className='md:h-20' />
            <img src={IITBBSR} alt="college2" className='md:h-20' />
            <img src={Sikhsha} alt="college1" className='md:h-20' />
            <img src={Cvraman} alt="college2" className='md:h-20' />
            <img src={Silicon} alt="college2" className='md:h-20' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeNotes
