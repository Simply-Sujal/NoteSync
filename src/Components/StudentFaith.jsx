import React from 'react'

const StudentFaith = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[#212121] text-4xl md:text-5xl font-bold'>Why <span className='text-green-500'> NoteSync. ? </span></h2>
                    <p className='text-2xl md:text-3xl py-6 text-gray-500 text-center'>People who are looking to excel their semester can get updated, handwritten, top-quality notes from NoteSync.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-4 px-2 text-center '>
                    <div className='border py-8 rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                        <img src="https://static.vecteezy.com/system/resources/previews/012/863/003/non_2x/take-note-of-the-diary-flat-design-icon-illustration-vector.jpg" alt="" className='h-24 md:h-36 mx-auto' />
                        <p className='text-gray-400 mt-2'>High-Quality Notes</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                        <img src="https://img.freepik.com/free-icon/video_318-782760.jpg" alt="" className='h-24 md:h-36 mx-auto' />
                        <p className='text-gray-400 mt-2'>Video Resources</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                        <img src="https://www.247software.com/hubfs/247_Software_2022/Regular%20Updates.svg" alt="" className='h-24 md:h-36 mx-auto' />
                        <p className='text-gray-400 mt-2'>Regular Updates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentFaith
