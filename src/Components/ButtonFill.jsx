import React from 'react'

const ButtonFill = ({ children }) => {
    return (
        <button className='w-full bg-[#22c55e] text-white rounded-full shadow-sm shadow-green-700 font-semibold md:text-sm text-xs tracking-wide md:px-12 px-9 py-3'>{children}</button>
    )
}

export default ButtonFill
