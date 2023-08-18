// src/components/SubjectList.js
import React from 'react';

const SubjectList = ({ year, subjects, onSubjectSelect }) => {
    return (
        <div className='w-[100%]'>
            <div className='max-w-[1240px] mx-auto'>
                <h2 className='text-center mt-10 text-4xl font-bold'>Welcome to <span className='text-green-400'>{year}</span> Notes</h2>

                <div className='mt-5'>
                    {subjects.map((subject, index) => (
                        <div key={index} onClick={() => onSubjectSelect(subject)} className='cursor-pointer border-2 border-sky-500 flex flex-col justify-center mb-2 hover:bg-sky-400 transition duration-200 ease-in-out rounded hover:rounded-md hover:text-white'>
                            <h1 className='p-3 font-medium text-black hover:text-white'> {subject.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubjectList;
