import React from 'react'
import Main from '../assets/Main.jpg'
import p1 from '../assets/P1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

const StudentsEnjoying = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-4 px-4'>
            <h2 className='text-[#212121] text-4xl md:text-5xl font-bold text-center'>Some <span className='text-green-500'>Happy Faces </span>of  Students </h2>
            <p className='text-center py-4 text-gray-600'>Happy Face due to NoteSync.</p>

            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img src={Main} alt="pic1" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' />
                <img src={p1} alt="pic2" className='w-full h-full object-cover' />
                <img src={p2} alt="pic3" className='w-full h-full object-cover' />
                <img src={p3} alt="pic4" className='w-full h-full object-cover' />
                <img src={p4} alt="pic5" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default StudentsEnjoying
