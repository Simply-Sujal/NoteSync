import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Allinone = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-[#212121] text-4xl md:text-5xl font-bold text-center '>All-In-One <span className='text-green-500'>Platform </span></h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>NoteSync. provides you the best hight top notch quality notes for your semester as well teaching assistant.
                </p>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Seamless Experience</h3>
                            <p className='text-lg pt-2 pb-4'>Experience the convenience of taking your notes effortlessly with NoteSync's user-friendly interface and advanced features.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Real-Time Synchronization</h3>
                            <p className='text-lg pt-2 pb-4'>Never worry about losing your notes again! NoteSync ensures real-time synchronization across all your devices.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Collaborate with Ease</h3>
                            <p className='text-lg pt-2 pb-4'>Boost productivity by collaborating with friends, colleagues, or classmates in real-time. </p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Intelligent Organization</h3>
                            <p className='text-lg pt-2 pb-4'>Quickly find and access your notes based on keywords, topics, or custom labels.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Powerful Search Functionality</h3>
                            <p className='text-lg pt-2 pb-4'>NoteSync's powerful search feature enables you to locate specific information within seconds.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Multi-Media Integration</h3>
                            <p className='text-lg pt-2 pb-4'>Enhance your notes with multimedia elements like images, videos.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Customizable Templates</h3>
                            <p className='text-lg pt-2 pb-4'>Personalize your note-taking experience with customizable templates tailored to your needs.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-7 mr-4 text-2xl text-green-500'>
                            <BiCheck />
                        </div>
                        <div className=''>
                            <h3 className='font-bold text-lg'>Offline Access</h3>
                            <p className='text-lg pt-2 pb-4'>Access your notes in one single click just download it and you will be accessing it offline.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Allinone
