import React from 'react'
// import { Link } from 'react-router-dom's
import VideoHome from '../VideoComponent/VideoHome'
import SearchVideo from '../VideoComponent/SearchVideo'
// import SelectionForm from '../VideoComponent/SelectionForm'
// import VideoCard from '../VideoComponent/VideoCard'
import Footer from '../Components/Footer'

const VidResources = () => {
    return (
        <div className='pt-[72px]'>
            <VideoHome />
            <SearchVideo />
            {/* <SelectionForm /> */}
            {/* <VideoCard /> */}
            <Footer />
        </div>
    )
}

export default VidResources
