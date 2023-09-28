import React, { useEffect, useState } from 'react';
import { auth, provider } from './Config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiTwotoneLike } from 'react-icons/ai';

const BlogMain = ({ selectedNiche, blogs, user }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [fetchedBlogs, setFetchedBlogs] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        // Fetch blog data if not already provided
        if (!blogs || blogs.length === 0) {
            axios.get('/blogData.json').then((response) => {
                setFetchedBlogs(response.data.blogs);
            });
        }
    }, [blogs]);

    const allBlogs = fetchedBlogs.length > 0 ? fetchedBlogs : blogs;
    const filteredBlogs = Array.isArray(allBlogs) ? allBlogs : [];
    const filteredBlogsByNiche = selectedNiche === 'All' ? filteredBlogs : filteredBlogs.filter((blog) => blog.topic === selectedNiche);

    const filteredBlogsWithSearch = filteredBlogsByNiche.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to handle "View Article" click by title
    const handleViewArticle = (blogTitle) => {
        // Check if the user is logged in
        if (!user) {
            // User is not logged in, trigger sign-in popup
            // signInWithPopup(auth, provider).then((data) => {
            //     // After successful sign-in, navigate to the article
            //     navigate(`/blogdetails/${blogId}`);
            // });
            // alert("Please login to view the article.");
            // Find the blog by title
            const blog = filteredBlogsWithSearch.find((blog) => blog.title === blogTitle);
            if (blog) {
                navigate(`/blogdetails/${encodeURIComponent(blog.title)}`);
            }
        } else {
            // User is logged in, proceed to view the article
            // Find the blog by title
            const blog = filteredBlogsWithSearch.find((blog) => blog.title === blogTitle);
            if (blog) {
                navigate(`/blogdetails/${encodeURIComponent(blog.title)}`);
            }
        }
    };

    return (
        <>
            <input type='text' placeholder='Search for a blog...' value={searchTerm} onChange={handleSearchChange} className='w-full px-4 py-2 border border-sky-400 rounded-full focus:outline-none focus:border-sky-500 my-5' />

            <div className='container'>
                <div className='row'>
                    {filteredBlogsWithSearch.map((blog, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div className="card text-center">
                                <img className="card-img-top" src={blog.url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: '700' }}>{blog.title}</h5>
                                    <p className="card-text">{blog.about.slice(0, 70)}{blog.about.length > 70 ? '...' : ''}</p>
                                    <button className="btn btnss mt-3" onClick={() => handleViewArticle(blog.title)}>View Article</button>
                                </div>
                                <div className="card-footer text-muted">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p>{blog.date}</p>
                                        </div>
                                        <div>
                                            <img src={blog.thumbnail} width={30} height={30} alt="" style={{ borderRadius: '50%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogMain;
