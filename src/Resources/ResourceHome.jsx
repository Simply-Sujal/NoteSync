import React from 'react'
import ResourceLogo from '../assets/ResourceLogo.png'

const ResourceHome = () => {
    return (
        <>
            <div className='w-full bg-[#ebf3ff] h-screen bg-hero flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 mt-20 md:pt-8'>
                        <h1 className='text-3xl md:text-6xl font-bold'>Accessing Resources<span className='text-green-500'> using College Year</span></h1>
                        <p className='py-3 text-[18px]'>We provide the easiest and simplest option to get your study materials for the upcoming semester.</p>
                        <div className='flex md:gap-4 gap-2 flex-wrap flex-col md:flex-row md:justify-start justify-center pb-4'>
                        </div>
                    </div>

                    <div>
                        <img src={ResourceLogo} alt="" className='w-full' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default ResourceHome
