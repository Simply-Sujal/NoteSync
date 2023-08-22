import React from 'react';

const NoteList = ({ subject }) => {
    return (
        <div className='w-[100%] mt-5'>
            <div className='max-w-[1240px] mx-auto font-medium text-gray-900'>
                <h3 className='text-3xl'>{subject.name} <span className='text-green-600'>PYQ's</span></h3>
                <div className='mt-4'>
                    {subject.notes.map((note, index) => (
                        <div  key={index}
                        className='cursor-pointer border-2 border-sky-500 flex flex-col justify-center mb-2 hover:bg-sky-400 transition duration-200 ease-in-out rounded hover:rounded-md hover:text-white'>
                            <a key={index}  href={note.url} target='_blank' rel='noopener noreferrer'>
                                <div className='p-3 font-medium text-black hover:text-white'>
                                    {note.name}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoteList;
