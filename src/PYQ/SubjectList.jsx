import React from 'react';

const SubjectList = ({ year, college, subjects, onSubjectSelect }) => {
    const handleSubjectClick = (subject) => {
        onSubjectSelect(subject);
        // Scroll to the notes section
        // const notesSection = document.getElementById('notes-section');
        // if (notesSection) {
        //     notesSection.scrollIntoView({ behavior: 'smooth' });
        // }
    };

    return (
        <>
            <div className='w-[100%]'>
                <div className='max-w-[1240px] mx-auto'>
                    <h2 className='text-center mt-10 text-4xl font-bold'>Welcome to <span className='text-green-400'>{year}</span>  PYQ's  ({college})</h2>

                    <div className='mt-5'>
                        {subjects.map((subject, index) => (
                            <div key={index} onClick={() => handleSubjectClick(subject)}
                                className='cursor-pointer border-2 border-sky-500 flex flex-col justify-center mb-2 hover:bg-sky-400 transition duration-200 ease-in-out rounded hover:rounded-md hover:text-white'>
<<<<<<< HEAD
                                <a href={subject.googleLink} target='_blank'><h1 className='p-3 font-medium text-black hover:text-white'>
=======
                                <a target='blank' href={subject.googleLink}><h1 className='p-3 font-medium text-black hover:text-white'>
>>>>>>> 2bd1a3e16cbf8777c1f97b92184e00aa74ffd09b
                                    {subject.name}
                                </h1>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div id='notes-section'>&nbsp; <br /> &nbsp;</div> */}
        </>
    );
};

export default SubjectList;