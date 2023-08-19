import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YearList = ({ college, onYearSelect }) => {
    const [years, setYears] = useState([]);

    const handleYearClick = (year) => {
        // Scroll to the year section
        const yearSection = document.getElementById('year-section');
        if (yearSection) {
            yearSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Call the prop function
        onYearSelect(year);
    };

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            const collegeData = response.data.colleges.find((col) => col.college === college);
            if (collegeData) {
                setYears(collegeData.years);
            }
        });
    }, [college]);

    return (
        <>
            <div className='w-[100%] mt-12'>
                <div className='max-w-[1240px] mx-auto'>
                    <h1 className='text-center text-5xl font-semibold'>
                        Select Your <span className='text-green-400'> Year</span>
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center mt-5 gap-2 md:gap-8'>
                        {years.map((year) => (
                            <div key={year.id} onClick={() => handleYearClick(year)} className='bg-sky-100 rounded-md hover:bg-sky-400 transition duration-200 ease-in-out'>
                                <h1 className='cursor-pointer p-2 font-medium text-black hover:font-bold'>
                                    {year.year}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id='year-section'>&nbsp; <br /> &nbsp;</div>
        </>
    );
};

export default YearList;
