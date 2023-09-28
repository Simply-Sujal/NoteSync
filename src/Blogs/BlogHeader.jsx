import React, { useEffect, useState } from 'react';
import { auth, provider } from './Config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import BlogMain from './BlogMain';
import { Link } from 'react-router-dom';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';

const BlogHeader = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleSignIn = () => {
    if (!user) {
      signInWithPopup(auth, provider).then((data) => {
        setUser(data.user);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("displayName", data.user.displayName);
      });
    } else {
      signOut(auth).then(() => {
        setUser(null);
        localStorage.removeItem("email");
        localStorage.removeItem("displayName");
        navigate('/', { replace: true });
      });
    }
  };

  useEffect(() => {
    setUser(localStorage.getItem('email'));
    setUser(localStorage.getItem('displayName'));
  }, []);

  useEffect(() => {
    if (blogs.length === 0) {
      fetch('/blogData.json')
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data.blogs);
        })
        .catch((error) => {
          console.error('Error fetching blog data:', error);
        });
    }
  }, [blogs]);

  const filteredBlogsByTopic = selectedTopic === 'All'
    ? blogs
    : blogs.filter((blog) => blog.topic === selectedTopic);

  const handlePostBlog = () => {
    if (user) {
      window.location.href = 'https://forms.gle/RmFPpsVXxvcx6W8C7';
    } else {
      signInWithPopup(auth, provider).then((data) => {
        setUser(data.user);
        localStorage.setItem('email', data.user.email);
        window.location.href = 'https://forms.gle/RmFPpsVXxvcx6W8C7';
      });
    }
  };

  // const handleProfile = () => {
  //   navigate('/profile'); // Redirect to the profile page
  // };

  const handleProfile = () => {
    // Pass the email and username as query parameters when redirecting to the profile page
    navigate(`/profile?email=${user.email}&username=${user.displayName}`);
  };

  return (
    <>
      <div>
        <div>
          <button className='mt-24' onClick={handleSignIn}>
            {user ? "Logout" : "Signin with Google"}
          </button>
        </div>
        <div >
          {user ? <ImProfile   onClick={handleProfile} /> : " "}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className='' align='center' style={{ fontFamily: 'fantasy' }}>
            <u>Blogs by Our </u>
            <span><u>Contributors</u></span>
          </h1>
          <div>
            <button className='text-blue-700' onClick={handlePostBlog}><b>Post Blog</b></button> &nbsp;
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
        <BlogMain selectedNiche={selectedTopic} blogs={filteredBlogsByTopic} user={user} />
      </div>
    </>
  );
};

export default BlogHeader;
