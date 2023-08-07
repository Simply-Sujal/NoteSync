import React from 'react'

const ButtonOutline = ({ children }) => {
    return (
        <button className='w-full bg-transparent border border-[#22c55e] text-[#22c55e] rounded-full font-semibold md:text-sm text-xs tracking-wide md:px-12 px-8 py-3'>{children}</button>
    )
}

export default ButtonOutline
