import React, { useState } from 'react';
import ytVideos from './SomeVideo';
import { Link } from 'react-router-dom';

const VideoCard = ({ selectedCategory }) => {
    let filteredVideos = ytVideos;

    if (selectedCategory) {
        filteredVideos = ytVideos.filter((video) => video.year === selectedCategory);
    } else {
        filteredVideos = ytVideos.slice(0, 12); // Display the first 10 items when no category is selected
    }

    const headingText = selectedCategory
        ? `Recommended Courses for ${selectedCategory}`
        : 'Recommended Courses';

    // adding the video search functionality 
    const [searchVideo, setSearchVideo] = useState('');

    if (searchVideo) {
        filteredVideos = filteredVideos.filter(video =>
            video.courseName.toLowerCase().includes(searchVideo.toLowerCase())
        );
    }

    return (
        <>
            <div className='w-full bg-[#F5F5F5] py-4 text-center'>
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="border py-2 pl-4 rounded-full w-[50%] align-center focus:outline-none focus:border-blue-400"
                    value={searchVideo}
                    onChange={e => setSearchVideo(e.target.value)}
                />
                <div className='max-w-[1320px] mx-auto'>
                    <h1 className='text-4xl text-center py-6 pt-10 text-[#001C30] font-medium'>
                        {headingText}
                    </h1>
                </div>
                <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-6'>
                    {filteredVideos.map((item) => (
                        <div key={item.id} className='text-center shadow-lg rounded-lg h-96 cursor-pointer' >
                            <div className='overflow-hidden'>
                                <img src={item.courseImage} alt='coursethumbnail' className='md:hover:scale-[1.06] duration-500 rounded-lg' />
                            </div>
                            <h4 className='py-2 text-[18px] font-medium md:text-2xl'>
                                {item.courseName.length > 20
                                    ? `${item.courseName.substring(0, 20)}...`
                                    : item.courseName}
                            </h4>
                            <p className='py-2'>{item.aboutCourse}</p>
                            <Link to={item.linking}>
                                <button type='submit' className='bg-green-400 text-white rounded-full w-[80%] px-5 py-2 mb-2 hover:bg-green-500 align-bottom transition duration-200 ease-in-out font-medium'>
                                    {item.watch}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoCard;
