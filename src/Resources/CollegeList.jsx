import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeList = ({ onCollegeSelect }) => {
    const [colleges, setColleges] = useState([]);

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

    return (
        <>
            <div className='w-[100%]'>
                <div className='max-w-[1240px] mx-auto'>
                    <h1 className='text-center text-5xl font-semibold'>
                        Select Your <span className='text-green-400'>College</span>
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center mt-5 gap-2 md:gap-8'>
                        {colleges.map((college) => (
                            <div key={college.id} onClick={() => handleCollegeClick(college)} className='bg-sky-100 w-full md:w-28 rounded-md hover:bg-sky-400 transition duration-200 ease-in-out'>
                                <h1 align='center' className='cursor-pointer p-2 font-medium text-black hover:font-bold'>
                                    {college.college}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id='college-section'>&nbsp; <br /> &nbsp;</div>
        </>
    );
};

export default CollegeList;
