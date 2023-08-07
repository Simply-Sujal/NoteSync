import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YearList = ({ onYearSelect }) => {
    const [years, setYears] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            setYears(response.data.years);
        });
    }, []);

    return (
        <div className='w-[100%]'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-center text-5xl font-semibold'>Select Your <span className='text-green-400'>College</span> year</h1>
                <div className='flex flex-col md:flex-row justify-center mt-5 gap-2 md:gap-8'>
                    {years.map((year, index) => (
                        <div key={index} onClick={() => onYearSelect(year)} className='bg-sky-100 rounded-md hover:bg-sky-400 transition duration-200 ease-in-out ' >
                            <h1 className='cursor-pointer p-2 font-medium text-black hover:font-bold'>{year.year}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YearList;
