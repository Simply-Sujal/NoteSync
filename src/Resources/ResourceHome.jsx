import React from 'react'
import ResourceLogo from '../assets/ResourceLogo.png'
import ButtonOutline from '../Components/ButtonOutline'
import ButtonFill from '../Components/ButtonFill'
import { Link } from 'react-router-dom'

const ResourceHome = () => {

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    const handleClick = () => {
        
        const notesSection = document.getElementById('notes-section');
        if (notesSection) {
            notesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='w-full bg-[#ebf3ff] h-screen bg-hero flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 mt-20 md:pt-8 gap-6'>
                        <h1 className='text-3xl md:text-6xl font-bold'>Accessing Resources<span className='text-green-500 my-3'> using College Year</span></h1>
                        <p className=' text-[18px]'>We provide the easiest and simplest option to get your study materials as well as pyq's for the upcoming semester.</p>
                        <div className='flex md:flex-row flex-col gap-3 md:gap-5'>
                            <div onClick={() => handleClick()}><ButtonFill>Notes</ButtonFill></div>
                            <Link to='/pyq' onClick={handleLinkedInClick}><ButtonOutline>PYQ's</ButtonOutline></Link>
                        </div>
                    </div>

                    <div>
                        <img src={ResourceLogo} alt="Resource" className='w-full' />
                    </div>
                </div>
            </div>

            <div id='notes-section'>&nbsp; <br /> &nbsp; <br /></div>
        </>
    )
}

export default ResourceHome
