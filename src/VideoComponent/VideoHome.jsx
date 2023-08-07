import React from 'react'
import OnlineStudy from '../Video/OnlineStudying.mp4'
const VideoHome = () => {
    return (
        <div className='w-full h-screen relative'>
            <video src={OnlineStudy} className='w-full h-full object-cover' autoPlay loop muted />

            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 text-5xl font-bold'>
                <h1 className='pb-20'>Best Video Resources</h1>
            </div>
        </div>
    )
}

export default VideoHome
