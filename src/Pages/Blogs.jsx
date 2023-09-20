import React from 'react';
import BlogHeader from '../Blogs/BlogHeader';
import Footer from '../Components/Footer';
import blogData from '/public/blogData.json'; 

const Blogs = () => {
  return (
    <>
      <div className='md:pt-20 pt-20'>
        <BlogHeader blogs={blogData} />
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
