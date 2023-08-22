import React from 'react'
import SolvingPYQ from '../assets/SolvingPYQ.png'
import ButtonOutline from '../Components/ButtonOutline'
import ButtonFill from '../Components/ButtonFill'
import { Link } from 'react-router-dom'

const PYQHome = () => {
    return (
        <>
            <div className='w-full bg-[#ebf3ff] h-screen bg-hero flex flex-col items-center justify-center'>
                <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 mt-20 md:pt-8 gap-2 md:gap-5'>
                        <h1 className='text-3xl md:text-6xl font-bold'>PYQs as Your<span className='text-green-500 my-3'> Secret Weapon</span></h1>
                        <p className='text-[15px] md:text-[18px]'>Explore Our Comprehensive Collection of Previous Year Questions - Your Ultimate Resource for Exam Preparation Excellence.</p>
                        <div className='flex md:flex-row flex-col gap-3 md:gap-5'>
                            <Link to='/resources'><ButtonFill>Notes</ButtonFill></Link>
                            <Link to='/video'><ButtonOutline>Videos</ButtonOutline></Link>
                        </div>
                    </div>

                    <div>
                        <img src={SolvingPYQ} alt="Solving PYQ's" className='w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PYQHome
