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
            name: "Blogs",
            link: "/blog"
        },
        {
            id: 5,
            name: "About",
            link: "/about"
        },
        {
            id: 6,
            name: "ContactUs",
            link: "/contact-us"
        },
    ];

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            {
                Links.map((item) => (
                    <li key={item.id} className='font-semibold hover:text-green-500'>
                        <Link to={item.link} onClick={handleLinkedInClick}>{item.name}</Link>
                    </li>
                ))
            }
        </>
    )
}

export default NavLinks
