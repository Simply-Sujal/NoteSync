
import React from 'react'
import ButtonFill from '../Components/ButtonFill'
import ButtonOutline from '../Components/ButtonOutline'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomePage = () => {
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
            <div className='w-full h-screen bg-hero flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 mt-20 md:pt-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>Empowering Students through<span className='text-green-500'> Comprehensive Notes.</span></h1>
                        <p className='py-3 text-[18px]'>This platform provides you with the best notes and materials to help you ace your upcoming semester.</p>
                        <div className='flex md:gap-4 gap-2 flex-wrap flex-col md:flex-row md:justify-start justify-center pb-4'>
                            <Link to='/resources'><ButtonFill>PDF</ButtonFill></Link>
                            <Link to='/video'><ButtonOutline>Video</ButtonOutline></Link>
                        </div>
                        <div className='flex md:justify-start md:flex-row justify-center items-center md:items-s gap-5'>
                            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' onClick={handleLinkedInClick1} />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' onClick={handleLinkedInClick2} />
                            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' onClick={handleLinkedInClick3} />
                            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' onClick={handleLinkedInClick4} />
                        </div>
                    </div>

                    <div>
                        <img src="https://img.freepik.com/free-vector/studying-concept-illustration_114360-1301.jpg?w=2000" alt="" className='w-full' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomePage