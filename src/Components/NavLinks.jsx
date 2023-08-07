import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const Links = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Resources",
            link: "/resource"
        },
        {
            id: 3,
            name: "Video",
            link: "/video"
        },
        {
            id: 4,
            name: "About",
            link: "/about"
        },
        {
            id: 5,
            name: "ContactUs",
            link: "/contact-us"
        },
    ]
    return (
        <>
            {
                Links.map((item) => (
                    <li key={item.id} className='font-semibold hover:text-green-500'>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))
            }
        </>
    )
}

export default NavLinks
