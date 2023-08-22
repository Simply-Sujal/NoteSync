import React from 'react'
import ButtonFill from '../Components/ButtonFill'
import ButtonOutline from '../Components/ButtonOutline'
import { Link } from 'react-router-dom'

const Mission = () => {

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };
    
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] md:py-[80px] flex flex-col md:flex-row mx-auto'>
                <div className='basis-[45%] pb-5'>
                    <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg" alt="aboutpagevectorimage" className='w-full' />
                </div>

                <div className='basis-[55%] px-5'>
                    <h1 className='text-4xl pb-5 text-green-400 font-semibold'>NoteSync. <span className='text-[#1C1427]'>Mission</span></h1>
                    <p className='text-start py-3 text-[17px] text-[#1C1427]'>At NoteSync.  , our mission is to empower college engineering students by providing them with comprehensive, high-quality, and easily accessible subject notes. We are dedicated to supporting students in their academic journey, helping them excel in their studies, and preparing them for successful careers in the engineering field.</p>
                    <p className='text-start py-3 text-[17px] text-[#1C1427]'>We strive to cover a wide range of engineering disciplines and offer a comprehensive library of notes, ensuring that students can find relevant and reliable resources for their specific courses and subjects.</p>
                    <p className='text-start py-3 text-[17px] text-[#1C1427]'>NoteSync also provides the top video materials that we believe are beneficial for our engineering students, and you can find the most filtered out video lectures. Developed by certain professionals and educators.</p>
                    <div className='py-3 flex gap-2'>
                        <Link to="/resource" onClick={handleLinkedInClick}><ButtonFill>Resource</ButtonFill></Link>
                        <Link to='/video' onClick={handleLinkedInClick}><ButtonOutline>Video</ButtonOutline></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission
