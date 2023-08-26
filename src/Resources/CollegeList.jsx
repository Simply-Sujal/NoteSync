import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './01.css';

const CollegeList = ({ onCollegeSelect }) => {
    const [colleges, setColleges] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCollegeClick = (college) => {
        const collegeSection = document.getElementById('college-section');
        if (collegeSection) {
            collegeSection.scrollIntoView({ behavior: 'smooth' });
        }
        onCollegeSelect(college);
    };

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            setColleges(response.data.colleges);
        });
    }, []);

    const filteredColleges = colleges.filter((college) =>
        college.college.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-full max-w-4xl mx-auto'>
            <h2 className='text-center  text-4xl font-bold'>Select Your <span className='text-green-400'>College</span></h2>
            <input type='text' placeholder='Search for a college...' value={searchTerm} onChange={handleSearchChange} className='w-full px-4 py-2 border border-sky-400 rounded-full focus:outline-none focus:border-sky-500 my-5' />
            <div className='mt-5 h-72 overflow-auto'>
                

                {filteredColleges.map((college) => (
                    <div key={college.id} onClick={() => handleCollegeClick(college)} className='cursor-pointer border-2 border-sky-500 flex flex-col justify-center mb-2 hover:bg-sky-400 transition duration-200 ease-in-out rounded hover:rounded-md hover:text-white'>
                        <h1 align='center' className='p-3 font-medium text-black hover:font-bold'>
                            {college.college}
                        </h1>
                    </div>
                ))}
            </div>
            <div id='college-section' className='mb-10'>&nbsp; <br /> &nbsp;</div>
        </div>
    );
};

export default CollegeList;
