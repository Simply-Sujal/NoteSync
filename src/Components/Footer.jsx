import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleLinkedInClick1 = () => {
        window.location.href = "https://www.instagram.com/notesync_in/";
    };
    const handleLinkedInClick2 = () => {
        window.location.href = "https://twitter.com/NoteSync_in";
    };
    const handleLinkedInClick3 = () => {
        window.location.href = "https://www.linkedin.com/in/sujal-timilsina-a26299197/";
    };
    const handleLinkedInClick4 = () => {
        window.location.href = "https://www.youtube.com/@consolecoder6724/featured";
    };
    return (
        <>
            <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
                <div className='p-5'>
                    <ul>
                        <p className='text-3xl font-bold text-[#212121] pb-6'>Note<span className='text-green-500'>Sync.</span>
                        </p>
                        <div className='flex gap-6 pb-5'>
                            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' onClick={handleLinkedInClick1} />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' onClick={handleLinkedInClick2} />
                            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' onClick={handleLinkedInClick3} />
                            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' onClick={handleLinkedInClick4} />
                        </div>
                    </ul>
                </div>

                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Home</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/resources'>Resource</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/video'>Video</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/about'>About</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/contact-us'>Contact Us</Link></li>
                    </ul>
                </div>


                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Notes</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='https://drive.google.com/file/d/1hjvxfPjpdfNFROJ98B2yJpBt0RkjIwwA/view'>PDF</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='https://docs.google.com/document/d/1hPUF-yFvsbELvf1bS8KCS27y-oiB3Qkv/edit'>DOC's</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='https://drive.google.com/drive/folders/1Am0ewd2Xv3b0dHwrYOVP_fQThmXbMj2e'>Lecture Notes</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='https://drive.google.com/drive/folders/1uTJF6N_odID3tcVnlzeRqglNDk6rpVlb'>Assignment</Link></li>
                    </ul>
                </div>


                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='https://chat.whatsapp.com/KwDtVov5yrw3StSWe87hWo'>Community</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/termsandconditions'>Terms & Conditions</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/disclaimer'>Disclaimer</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-green-500 cursor-pointer'><Link to='/privacy-policy'>Privacy Policies</Link></li>
                    </ul>
                </div>
            </div >

            <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
                <h1 className='text-gray-800 font-semibold '>&#169; 2023 - 2024 All rights reserved | Build with ❤️ by {" "}<span className='hover:text-green-500 font-semibold cursor-pointer'>NoteSync.</span></h1>
            </div>

        </>
    )
}

export default Footer