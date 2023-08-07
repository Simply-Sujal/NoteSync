import React from 'react'
import Sujal from '../assets/Sujal.jpeg'
import { FaLinkedin } from 'react-icons/fa'

const Team = () => {
    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/sujal-timilsina-a26299197/";
    };
    return (
        <div className='w-full bg-[#C5DFF8] '>
            <div className='mx-auto max-w-[1320px] px-2 container flex flex-col py-10 gap-3 md:flex-row md:gap-12 md:py-32'>
                <div className='w-full md:w-[50%]'>
                    <h1 className='text-4xl font-semibold pb-5'>We make it all happen.</h1>
                    <p className='text-2xl pb-2'>My Vision</p>
                    <p className='text-[15px] text-[#001C30] font-normal'><span className='text-green-500 font-bold'>Excellence </span>: We are committed to delivering excellence in the quality of our resources, user experience, and customer support.</p>
                    <p><span className='text-green-500 font-bold'>Integrity </span>: We operate with integrity, ensuring the accuracy, credibility, and authenticity of our notes and interactions with our users.</p>
                    <p><span className='text-green-500 font-bold'>Learning and Growth </span>: We believe in lifelong learning and continuous improvement, both for ourselves and the students who use our platform.</p>
                    <p><span className='text-green-500 font-bold'>Student-Centric Approach </span>: We always prioritize the needs and success of our student users, aiming to provide the best possible support and resources tailored to their requirements.</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-black rounded-lg shadow-md mx-1 my-4 md:mx-4 md:my-0">
                    <div className="relative md:w-96 md:h-96 md:mb-14">
                        <img
                            src={Sujal}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-md "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick}
                            />
                        </div>
                        <h3 className=" text-white text-xl font-bold text-center">Sujal Timilsina</h3>
                        <p className="text-gray-200 text-center">Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
