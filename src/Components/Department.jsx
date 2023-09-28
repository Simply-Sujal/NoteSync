import React from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
    const data = [
        {
            id: 1,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Software Engineering",
            totalnotes: "video",
            videoLink: "/softwareeng"
        },
        {
            id: 2,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Computer Network",
            totalnotes: "video",
            videoLink: "/cnbyamitkhurana"
        },
        {
            id: 3,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Database Mangement",
            totalnotes: "video",
            videoLink: "/dbms"
        },
        {
            id: 4,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Data Structure",
            totalnotes: "video",
            videoLink: "/dsaincnesoacademy"
        },
        {
            id: 5,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Operating System",
            totalnotes: "video",
            videoLink: "/oscodehelp"
        },
        {
            id: 6,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Discrete Mathematics",
            totalnotes: "video",
            videoLink: "/discretemathematics"
        },
        {
            id: 7,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Computer Organization",
            totalnotes: "video",
            videoLink: "/coabinduagarwala"
        },
        {
            id: 8,
            image: "https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-computer-science-line-icon-vector-png-image_6643745.png",
            topic: "Artificial intelligence",
            totalnotes: "video",
            videoLink: "/aibyeasyenggclasses"
        }
    ];

    return (
        <>
            <section className='text-center mt-20'>
                <div className='w-[80%] m-auto text-center'>
                    <div className='py-10 text-center'>
                        <h2 className='text-[#212121] text-4xl md:text-5xl font-bold'>Explore various <span className='text-green-500'> Departments </span></h2>
                    </div>
                    <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                        {data.map((item) => (
                            <Link to={item.videoLink} key={item.id}>
                                <div className='bg-[#fff] py-6 px-5 shadow-2xl cursor-pointer hover:bg-sky-400 transition duration-200 ease-in-out hover:text-white hover:rounded'>
                                    <div className='h-20 mx-auto w-20'>
                                        <img src={item.image} alt={item.topic} className='text-red-800 bg-cover' />
                                    </div>
                                    <h1 className='text-[20px] leading-8 my-5 font-bold text-center'>{item.topic}</h1>
                                    <span className='bg-[#f8f8f8] rounded-md text-[#007dfe] text-1xl py-1 px-2 font-semibold'>{item.totalnotes}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Department;
