import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiTwotoneLike } from 'react-icons/ai';

const BlogMain = ({ selectedNiche, blogs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [fetchedBlogs, setFetchedBlogs] = useState([]);

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
                                    <Link to={`/blogdetails/${blog.id}`}><button className="btn btnss mt-3">View Article</button></Link>
                                </div>
                                <div className="card-footer text-muted">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p>{blog.date}</p>
                                            {/* <p>{blog.time}</p> */}
                                        </div>
                                        <div>
                                            <img src={blog.thumbnail} width={30} height={30} alt="" style={{ borderRadius: '50%' }} />
                                            {/* <p className='mx-2'> {blog.owner} </p> */}
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





