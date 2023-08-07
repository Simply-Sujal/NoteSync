import React from 'react'

const OurMotto = () => {
    return (
        <div className='w-full h-screen relative bg-[#181823]'>
            <div className='mt-10 absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 font-bold items-center'>
                <div>
                    <h1 className='text-2xl md:text-4xl'>Providing comprehensive and reliable notes to support<br /> <span className='text-green-400'>Enginerring Students</span> in their academic journey.</h1>
                    <p className='my-3 text-[15px] font-normal leading-5 pt-2'>This platform provides you with the best notes and materials to help you ace your upcoming semester.</p>
                </div>
                <div className='mt-5 mb-5'>
                    <div className='grid md:grid-cols-3 gap-4 px-2 text-center '>
                        <div className='border py-4 px-5 md:px-9 bg-white rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                            <img src="https://static.vecteezy.com/system/resources/previews/012/863/003/non_2x/take-note-of-the-diary-flat-design-icon-illustration-vector.jpg" alt="" className='h-10 md:h-36 mx-auto' />
                            <p className='text-gray-400 mt-2'>High-Quality Notes</p>
                        </div>
                        <div className='border py-4 px-2 md:px-9 bg-white rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                            <img src="https://media.istockphoto.com/id/1320496766/vector/no-wifi-area-sing-isolate-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=DtWj62XGCHgKdp5i0akfxnbI4K8w0PsBKaef-7xt88s=" alt="" className='h-10 md:h-36 mx-auto' />
                            <p className='text-gray-400 mt-2'>Offline Access</p>
                        </div>
                        <div className='border py-4 px-5 md:px-9 bg-white rounded-xl shadow-xl hover:scale-[1.05] tranition ease-in-out duration-200'>
                            <img src="https://www.247software.com/hubfs/247_Software_2022/Regular%20Updates.svg" alt="" className='h-10 md:h-36 mx-auto' />
                            <p className='text-gray-400 mt-2'>Regular Updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMotto
