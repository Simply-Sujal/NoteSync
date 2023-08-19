import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { GiPathDistance } from 'react-icons/gi'
import { CgNotes } from 'react-icons/cg'
import Supportimg from '../assets/SupportUser.jpg'

const Support = () => {

    const handleClick = () => {
        const collegeSection = document.getElementById('faq');
        if (collegeSection) {
            collegeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className='w-full mt-[70px]'>
                {/* <h2 className='text-[#212121] text-4xl md:text-5xl font-bold text-center py-14'>Technical <span className='text-green-500'>Supports </span></h2> */}

                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img src={Supportimg} alt="" className='w-full h-full object-cover mix-blend-overlay' />
                </div>

                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <div className='px-4 py-12'>
                        <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                        <h3 className='text-5xl font-bold py-6 text-center'>Join our Socials</h3>
                        <p className='py-4 text-3xl text-slate-300'>Notesync also provides a number of ways to contact the NoteSync team in order to ask questions or raise concerns.You can ask questions on our social media with various people.There, you can clarify your doubts, interact with others, and many more.</p>
                    </div>


                    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>

                            <div className='p-8'>
                                <div className='w-16 text-white p-4 bg-[#007dfe] rounded-xl mt-[-4rem]'>
                                    <BiSupport className='text-3xl' />
                                </div>
                                <h3 className='font-bold text-2xl my-6'>FAQ's</h3>

                                <p className='text-gray-600 text-xl'>To get the solution to your query and learn more about us, please consult our FAQs.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-[#007dfe]'><Link to="" onClick={handleClick} className='flex align-middle items-center'>FAQ's <BsArrowRightShort className='w-5 ml-2' /></Link></p>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <div className='w-16 text-white p-4 bg-[#007dfe] rounded-xl mt-[-4rem]'>
                                    <GiPathDistance className='text-3xl' />
                                </div>
                                <h3 className='font-bold text-2xl my-6'>Reach Us</h3>

                                <p className='text-gray-600 text-xl '>You can ask questions or raise problems using the contact us form at any time, in any situation.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-[#007dfe]'><Link to='/contact-us' className='flex align-middle items-center'>Contact Us <BsArrowRightShort className='w-5 ml-2' /></Link></p>
                            </div>
                        </div>

                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <div className='w-16 text-white p-4 bg-[#007dfe] rounded-xl mt-[-4rem]'>
                                    <CgNotes className='text-3xl' />
                                </div>
                                <h3 className='font-bold text-2xl my-6'>Socials Outreach</h3>

                                <p className='text-gray-600 text-xl '>Join our socials to ask your doubt with different folks accross the country.</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-[#007dfe]'><Link to='https://chat.whatsapp.com/KwDtVov5yrw3StSWe87hWo' className='flex align-middle items-center'>Community<BsArrowRightShort className='w-5 ml-2' /></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Support
