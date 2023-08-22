import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import VideoCard from './VideoCard'
import CategorySection from './CategorySection'

const SearchVideo = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <div className='flex flex-col px-10 items-center bg-[#F5F5F5] text-center'>
                <h2 className='font-extrabold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 uppercase mt-3'>Videos</h2>

                <h3 className='text-2xl mt-2 mb-4 text-gray-500'>The most convenient way to filter video resources by year.</h3>

                {/* This is category selection according to year  */}
                <CategorySection handleCategorySelect={handleCategorySelect} />
            </div>

            {/* This is the video card component */}
            <VideoCard selectedCategory={selectedCategory} />
        </>
    )
}

export default SearchVideo
