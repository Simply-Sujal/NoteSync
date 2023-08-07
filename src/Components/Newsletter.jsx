import React from 'react'
import ButtonFill from './ButtonFill'

const Newsletter = () => {
    return (
        <div className='w-full mt-10 py-20 m text-white bg-black px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-5'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Secret Notes are waiting for you !!!</h1>
                    <p>Sign in to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='Enter Email' />
                        <button className='bg-[#22c55e] text-black rounded-md shadow-sm shadow-green-700 font-medium md:text-sm text-xs tracking-wide w-[200px] ml-4 my-6 px-5 py-3'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#22c55e]'>privacy policy.</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
