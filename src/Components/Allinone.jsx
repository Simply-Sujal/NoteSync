import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Allinone = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-[#212121] text-4xl md:text-5xl font-bold text-center '>All-In-One <span className='text-green-500'>Platform </span></h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>NoteSync. provides you the best high top notch quality notes for your semester exams.
                </p>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Seamless Experience</h3>
                            <p className='text-lg pt-2 pb-4'>Experience the convenience of taking your notes effortlessly with NoteSync's user-friendly interface.</p>
                        </div>
                    </div> 
                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>HandWritten Notes</h3>
                            <p className='text-lg pt-2 pb-4'>NoteSync will provide you the best among the Handwritten notes.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Top Video Resources</h3>
                            <p className='text-lg pt-2 pb-4'>The greatest possible video resources in high resolution will be made available by NoteSync.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Intelligent Organisation</h3>
                            <p className='text-lg pt-2 pb-4'>NoteSync will organize your notes properly. In about 4-5 clicks, you may access notes from NoteSync.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Device Compatibility</h3>
                            <p className='text-lg pt-2 pb-4'>Notesync is supported by all devices for easy operation in terms of compatibility.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Offline Access</h3>
                            <p className='text-lg pt-2 pb-4'>Simply download it and you may access your NoteSync notes with just one click while offline.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Get in Touch</h3>
                            <p className='text-lg pt-2 pb-4'>Getting in touch with the NoteSync team is quite straightforward.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Regular Updates</h3>
                            <p className='text-lg pt-2 pb-4'>Always get the updated and recent best notes in Notesync platform.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Allinone
