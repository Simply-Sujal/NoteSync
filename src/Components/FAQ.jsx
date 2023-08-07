import React from 'react'
import Accordian from './Accordian'

const data = [
    {
        id: 1,
        question: "Why use notesyn for taking notes and learning?",
        answer: "NoteSync. is the only platform that delivers engineering top-notch high-quality notes to individuals and teaches you how to prepare one day before the exam and achieve good grades."
    }, {
        id: 2,
        question: "Do handwritten notes come with NoteSync?",
        answer: "Yes, NoteSync offers handwritten documents, ppts, pdfs, and much more electronic files."
    },
    {
        id: 3,
        question: "Is notsync applicable to all engineering departments?",
        answer: "Yes, it is mostly focused on fundamental engineering areas such as CSE, IT, ELECTRICAL, CIVIL, MECHANICAL, and many more to come!"
    },
    {
        id: 4,
        question: "Does notesync impose any fees for the resources they provide?",
        answer: "No, notesync does not currently charge its users for anything; everything is free!"
    },
    {
        id: 5,
        question: "Are there any Notesyn mobile apps available?",
        answer: "No, we do not currently have a mobile application, but we will undoubtedly develop one."
    }
]

const FAQ = () => {
    return (
        <div className='w-full my-32 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold'><span className='text-[#212121]'> FAQ's </span></h2>
            <div className='max-w-[800px] mx-auto px-3 my-10'>
                {
                    data.map((item) => {
                        // destruct
                        const { question, answer } = item;
                        return (<div className='bg-[#F5F5F5] p-5 my-2 rounded-md' key={item.id}>
                            <Accordian
                                question={question}
                                answer={answer}></Accordian>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FAQ
