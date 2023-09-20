import React, { useState } from 'react';
import BlogMain from './BlogMain';
import { Link } from 'react-router-dom';
import {AiFillQuestionCircle} from 'react-icons/ai';

const BlogHeader = ({ blogs }) => {
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [showEarningInfo, setShowEarningInfo] = useState(false);

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };



    // Ensure that blogs is an array before applying filter
    const filteredBlogs = Array.isArray(blogs) ? blogs : [];

    // Filter blogs based on the selected topic
    const filteredBlogsByTopic =
        selectedTopic === 'All'
            ? filteredBlogs
            : filteredBlogs.filter((blog) => blog.topic === selectedTopic);

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 className='' align='center' style={{ fontFamily: 'fantasy' }}>
                        <u>Blogs by Our </u>
                        <span><u>Contributors</u></span>
                    </h1>
                    <div>
                        <a className='text-blue-700' href='https://forms.gle/RmFPpsVXxvcx6W8C7' target='blank'><b>Post Blog</b></a> &nbsp;
                        <Link to='/blogearning' className='mx-1 '><AiFillQuestionCircle className='text-2xl' /></Link>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div>
                    <label htmlFor="topicDropdown">Select Topic:</label>
                    <select
                        id="topicDropdown"
                        value={selectedTopic}
                        onChange={handleTopicChange}
                    >
                        <option value="All">All</option>
                        <option value="General">General</option>
                        <option value="Technology">Technology</option>
                        <option value="AutoMobile">AutoMobile</option>
                        <option value="Finance">Finance</option>
                        <option value="College">College</option>
                    </select>
                </div>
                <BlogMain selectedNiche={selectedTopic} blogs={filteredBlogsByTopic} />
                
            </div>
        </>
    );
};

export default BlogHeader;
