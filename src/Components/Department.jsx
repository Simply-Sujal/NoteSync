import React from 'react'
import Resources from '../Pages/Resources'
import ButtonFill from './ButtonFill'
import { Link } from 'react-router-dom'

const Department = () => {
    const data = [
        {
            id: 1,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Software Engineering",
            totalnotes: "100 Notes"
        },
        {
            id: 2,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Computer Network",
            totalnotes: "80 Notes"
        },
        {
            id: 3,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Database Mangement",
            totalnotes: "50 Notes"
        },
        {
            id: 4,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Data Structure",
            totalnotes: "150 Notes"
        },
        {
            id: 5,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Operating System",
            totalnotes: "80 Notes"
        },
        {
            id: 6,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Discrete Mathematics",
            totalnotes: "50 Notes"
        },
        {
            id: 7,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Discrete Mathematics",
            totalnotes: "70 Notes"
        },
        {
            id: 8,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Economics",
            totalnotes: "20 Notes"
        }
    ]
    return (
        <>
            <section className='text-center mt-20'>
                <div className='w-[80%] m-auto text-center'>
                    <div className='py-10 text-center'>
                        <h2 className='text-[#212121] text-4xl md:text-5xl font-bold'>Explore various <span className='text-green-500'> Departments </span></h2>
                    </div>
                    <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                        {
                            data.map((item) => (
                                <div key={item.id} className='bg-[#fff] py-6 px-5 shadow-2xl  cursor-pointer hover:bg-sky-400 transition duration-200 ease-in-out hover:text-white transition duration-200 hover:rounded'>
                                    <div className='h-20 mx-auto w-20'>
                                        <img src={item.image} className='text-red-800 bg-cover' />
                                    </div>
                                    <h1 className='text-[20px] leading-8 my-5 font-bold text-center'>{item.topic}</h1>
                                    <Link to='/resources'>
                                        <span className='bg-[#f8f8f8] rounded-md text-[#007dfe] text-1xl py-1 px-2 font-semibold'>{item.totalnotes}</span></Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className='py-10'>
                        <Link to='/resources'>
                            <button className=' bg-[#22c55e] text-white rounded-full shadow-sm shadow-green-700 font-semibold md:text-sm text-xs tracking-wide md:px-16 px-9 py-3'>Know More</button>
                        </Link>
                    </div>

                </div>
            </section >
        </>
    )
}

export default Department
