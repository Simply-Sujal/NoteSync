import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className='w-screen h-[70px] bg-[#ffffff] p-4 z-10 fixed drop-shadow-lg'>
                <nav className='px-4 flex justify-between items-center mx-auto w-full h-full '>
                    <Link to="/" onClick={handleLinkedInClick}><h1 className='text-3xl font-semibold cursor-pointer sm:text-4xl'>Note<span className='text-green-500'>Sync.</span></h1></Link>

                    <ul className='md:flex hidden items-center gap-10 py-4'>
                        <NavLinks />
                    </ul>

                    {/* mobile view nav  */}
                    <ul className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-lg p-7 pt-20 duration-500
                ${open ? 'right-0' : 'right-[-100%]'}`}>
                        <NavLinks />
                    </ul>

                    {
                        open ? <CgClose onClick={() => setOpen(!open)} className='text-black text-2xl md:hidden z-50 cursor-pointer ' />
                            :
                            <HiOutlineMenuAlt1 onClick={() => setOpen(!open)} className='text-black text-2xl md:hidden z-50 cursor-pointer ' />
                    }
                </nav>

            </div>
        </>

    )
}

export default Header
