import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import Cus from '../assets/Cus.jpg'

const FormNoteSync = () => {
    const handleLinkedInClick1 = () => {
        window.location.href = "https://www.instagram.com/me_console_coder/";
    };
    const handleLinkedInClick2 = () => {
        window.location.href = "https://twitter.com/362Sujal";
    };
    const handleLinkedInClick3 = () => {
        window.location.href = "https://www.linkedin.com/in/sujal-timilsina-a26299197/";
    };
    const handleLinkedInClick4 = () => {
        window.location.href = "https://www.youtube.com/@consolecoder6724/featured";
    };
    return (
        <>
            <div className='w-full h-[400px] md:h-[600px] bg-gray-900/90 absolute'>
                <img src={Cus} alt="" className='w-full h-full md:h-[753px] object-cover' />
            </div>

            <div className='w-full flex min-h-screen justify-center items-center pt-[420px] md:pt-[800px] py-10'>
                <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-green-600 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white '>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>

                            <p className='pt-2 text-whitw text-sm'>
                                Your thoughts matter! Feel free to share them with us through this form.
                            </p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <BsTelephoneFill className="text-xl text-cyan-500" />
                                <span>+(91) 9123227497</span>
                            </div>

                            <div className='inline-flex space-x-2 items-center'>
                                <GrMail className="text-xl text-cyan-500" />
                                <span>helpme@notesync.in</span>
                            </div>

                            <div className='inline-flex space-x-2 items-center'>
                                <MdLocationOn className="text-xl text-cyan-500" />
                                <span>KIIT University , Bhubaneswar</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <BsLinkedin className='text-[white]  cursor-pointer' onClick={handleLinkedInClick1} />
                            <BsTwitter className='text-[white]  cursor-pointer' onClick={handleLinkedInClick2} />
                            <BsFacebook className='text-[white]  cursor-pointer' onClick={handleLinkedInClick3} />
                            <FaYoutube className='text-[white]  cursor-pointer' onClick={handleLinkedInClick4} />
                        </div>
                    </div>

                    <div>
                        <div className='bg-white rounded-xl shadow-lg p-8 text-gray-400 md:w-96'>
                            <form action="https://formspree.io/f/xgejovkl" method='POST' className='flex flex-col space-y-4'>
                                <div>
                                    <label for="" className='text-sm'>Name</label>
                                    <input type="text" name='Name' placeholder='Your name' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:rind-2 focus:ring-green-400' />
                                </div>

                                <div>
                                    <label for="" className='text-sm'>Email</label>
                                    <input type="email" name='Email' placeholder='Email Address' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:rind-2 focus:ring-green-400' />
                                </div>


                                <div>
                                    <label for="" className='text-sm'>Message</label>
                                    <textarea rows="4" placeholder='Message' name='Message' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:rind-2 focus:ring-green-400'></textarea>
                                </div>

                                <button className='inline-block self-end bg-green-400 font-bold rounded-lg px-6 py-2 uppercase text-sm text-black'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormNoteSync
