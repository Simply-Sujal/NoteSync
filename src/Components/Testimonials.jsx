import React from 'react'

const Testimonials = () => {
    return (
        <div className='max-w-6xl px-5 mx-auto mt-24 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Success <span className='text-green-500'> Stories</span></h2>

            {/* ---- Testitmonial container -----  */}
            <div className='flex flex-col mt-24 gap-10 md:gap-1 md:flex-row md:space-x-6'>
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#eefdf8] md:w-1/3'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5fb6793008c78b1a0da3dde3/1615412953861-HOUCW3840SP7C3RFKC41/Nikola+Medimorec_Slocat.jpg" alt="" className='w-20 -mt-14 rounded-full' />
                    <h5 className='text-lg font-bold'>Abhinav Aakash</h5>
                    <p className='text-sm text-darkGrayishBlue'>Great site here, I got everything with one click, and most importantly, everything is well-structured for engineering students.</p>
                </div>
                <div className=' md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#eefdf8] md:w-1/3'>
                    <img src="https://dhruvacft.ac.in/wp-content/uploads/2021/07/teacher5.jpg" alt="" className='w-20 -mt-14 rounded-full mx-auto' />
                    <h5 className='text-lg font-bold'>Ankita Ojaswi</h5>
                    <p className='text-sm text-darkGrayishBlue'>I am very happy with this website; I select my college year and found it quite easy to obtain the specific academic notes.</p>
                </div>
                <div className='md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#eefdf8] md:w-1/3'>
                    <img src="https://swinworkforce.org/wp-content/uploads/2022/02/nicolas-horn-dOb-CIj8iFg-unsplash-scaled.jpg" alt="" className='w-20 -mt-14 rounded-full mx-auto' />
                    <h5 className='text-lg font-bold'>Animesh Singh</h5>
                    <p className='text-sm text-darkGrayishBlue'>This website is fantastic for engineering students because you will receive your notes in a very structured manner with a superb user interface.</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
