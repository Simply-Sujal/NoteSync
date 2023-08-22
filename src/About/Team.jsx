import React from 'react'
import Sujal from '../assets/Sujal.jpeg'
import Piyush from '../assets/Piyush.jpg'
import Barsha from '../assets/Barsha Rani.jpeg'
import Animesh from '../assets/Animesh.jpeg'
import Radhika from '../assets/Radhika.jpeg'
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
        <div className='w-full bg-blue-100'>
            <div className='mx-auto container py-16 px-4 md:max-w-5xl'>
                <h1 className='text-center text-3xl md:text-5xl font-semibold mb-8'>
                    The <span className='text-green-600'>Team</span> that makes everything possible.
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src={Sujal}
                            alt="Sujal"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Sujal Timilsina</h3>
                            <p className="text-sm">Founder</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src={Piyush}
                            alt="Team Member"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick1} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Piyush Kr. Singh</h3>
                            <p className="text-sm">Developer</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src={Radhika}
                            alt="Team Member"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick2} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Radhika Rani</h3>
                            <p className="text-sm">Contributor</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src={Animesh}
                            alt="Team Member"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick3} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Animesh Singh</h3>
                            <p className="text-sm">Contributor</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src={Barsha}
                            alt="Team Member"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick4} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Barsha Rani Parida</h3>
                            <p className="text-sm">Contributor</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                        <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738"
                            alt="Team Member"
                            className="w-full h-72 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                            <FaLinkedin className="text-4xl text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLinkedInClick5} />
                        </div>
                        <div className='bg-black text-white text-center py-2'>
                            <h3 className="text-lg font-semibold">Divyansh Suman</h3>
                            <p className="text-sm">Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
