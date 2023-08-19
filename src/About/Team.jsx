import React from 'react'
import Sujal1 from '../assets/Sujal1.jpg'
import Piyush from '../assets/Piyush.jpg'
import { FaLinkedin } from 'react-icons/fa'

const Team = () => {
    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/sujal-timilsina-a26299197/";
    };
    const handleLinkedInClick1 = () => {
        window.location.href = "https://www.linkedin.com/in/piyush-kumar-singh-902036248/";
    };
    const handleLinkedInClick2 = () => {
        window.location.href = "https://www.linkedin.com/in/radhika-rani-panda-50376a249/";
    };
    const handleLinkedInClick3 = () => {
        window.location.href = "https://www.linkedin.com/in/animeshhere/";
    };
    const handleLinkedInClick4 = () => {
        window.location.href = "https://www.linkedin.com/in/barsha-rani-parida-4a306a223/";
    };
    const handleLinkedInClick5 = () => {
        window.location.href = "https://www.linkedin.com/in/divyansh-suman-911027237/";
    };
    return (
        <div className='w-full bg-[#C5DFF8] '>
            <div className='mx-auto container flex flex-col py-10 md:flex-row md:gap-5 md:py-32 max-w-[1320px] px-3'>
                <div className='md:w-[50%] w-full'>
                    <h1 className='top-0 h-fit py-12 text-center text-3xl font-semibold md:sticky md:basis-96 md:py-40 md:text-left text-[#272829]'>The <span className='text-green-500'>team</span> that makes everything possible.
                    </h1>
                    {/* <p className='text-2xl pb-2'>Our Vision</p>
                    <p className='text-[15px] text-[#001C30] font-normal'><span className='text-green-500 font-bold'>Excellence </span>: We are committed to delivering excellence in the quality of our resources, user experience.</p>
                    <p><span className='text-green-500 font-bold'>Integrity </span>: We operate with integrity, ensuring the accuracy, credibility, and authenticity of our notes and interactions with our users.</p>
                    <p><span className='text-green-500 font-bold'>Learning and Growth </span>: We believe in lifelong learning and continuous improvement, both for ourselves and the students who use our platform.</p>
                    <p><span className='text-green-500 font-bold'>Student-Centric Approach </span>: We always prioritise our student users' needs and success, seeking to give the greatest possible study materials and video resources suited to their specific needs.</p> */}
                </div>

                <div className="mt-2 grid grow grid-cols-2 grid-rows-2 place-items-center gap-3 md:gap-2 xl:grid-cols-2">
                    {/* class="grid grow grid-cols-2 grid-rows-6 place-items-center gap-3 md:gap-8 xl:grid-cols-3" */}
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Sujal1}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Sujal Timilsina</h3>
                            <p className="text-gray-200 text-center">Founder</p>
                        </div>
                    </div>
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Piyush}
                            alt="Piyush"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick1}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Piyush</h3>
                            <p className="text-gray-200 text-center">Developer</p>
                        </div>
                    </div>
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Sujal1}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick2}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Radhika</h3>
                            <p className="text-gray-200 text-center">Contributor</p>
                        </div>
                    </div>
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Sujal1}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick3}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Animesh</h3>
                            <p className="text-gray-200 text-center">Contributor</p>
                        </div>
                    </div>
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Sujal1}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick4}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Barsha</h3>
                            <p className="text-gray-200 text-center">Contributor</p>
                        </div>
                    </div>
                    <div className="relative md:w-64 md:h-64 md:mb-14">
                        <img
                            src={Sujal1}
                            alt="Sujal"
                            className="w-full h-full object-cover rounded-t-xl "
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <FaLinkedin
                                className=" text-5xl cursor-pointer text-blue-600 duration-300 transition ease-in-out "
                                onClick={handleLinkedInClick5}
                            />
                        </div>
                        <div className='bg-black rounded-t-none rounded-b-xl'>
                            <h3 className=" text-white text-xl font-medium text-center">Divyansh</h3>
                            <p className="text-gray-200 text-center">Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
