import React, { useState } from 'react';
import ytVideos from './SomeVideo';

const CategorySection = ({ handleCategorySelect }) => {
    // this is for selecting the domain you want to learn
    const college = [
        { id: 1, collegeYear: 'College Courses' },
        { id: 2, collegeYear: 'Development' },
        { id: 3, collegeYear: 'Data Structure & Algo.' },
        { id: 4, collegeYear: 'AI/ML' },
    ];

    // this is for selecting the category which gives dark sky once you click
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <>
            <div className='flex flex-col md:flex-col gap-6 mt-4'>
                <div className='flex gap-2 md:gap-5'>
                    {college.map((item) => (
                        <div
                            key={item.id}
                            className={`px-2 md:px-2 py-3 text-[10px] md:text-[18px] rounded-md cursor-pointer transition-all duration-200 ease-in-out ${selectedCategory === item.collegeYear ? 'bg-sky-400 font-bold' : 'bg-sky-200 hover:bg-sky-300'
                                }`}
                            onClick={() => {
                                setSelectedCategory(item.collegeYear);
                                handleCategorySelect(item.collegeYear);
                            }}
                        >
                            {item.collegeYear}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategorySection;
