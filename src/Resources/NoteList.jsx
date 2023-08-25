import React from 'react';

const NoteList = ({ subject }) => {
    return (
        <div className='w-[100%] mt-5'>
            <div className='max-w-[1240px] mx-auto font-medium text-gray-900'>
                <h3 className='text-3xl'>{subject.name} Notes</h3>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 mt-4'>
                    {subject.notes.map((note, index) => (
                        <a key={index}  href={note.url} target='_blank' rel='noopener noreferrer'>
                        <div  key={index}
                        className='border-1 bg-white shadow-md hover:bg-blue-200 rounded hover:rounded-md hover:scale-[1.05] transition duration-150 ease-in-out flex flex-col justify-between m-2 gap-2'>
                            
                            <div>
                                <img src={subject.thumbnail} alt='thumbnails' className='w-32 h-32 mx-auto p-1' />
                            </div>
                            
                                <div className='bg-gray-300 hover:bg-green-400 transition duration-200 ease-in-out hover:rounded p-1 hover:text-white'>
                                    <h1 className='text-[16px] text-center'>
                                        {note.name}
                                    </h1>
                                </div>
                            
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoteList;
