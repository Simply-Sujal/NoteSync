import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios.get('/profile.json').then((response) => {
      // Find the user profile based on email
      const userProfile = response.data.posts.find((user) => user.email === email);
      setProfileData(userProfile);
    });
  }, [email]);

  if (!profileData) {
    return <h1 className='text-3xl'>No data to show. <br /><br /><br /><br />No data to show.</h1>;
  }

  return (
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nesciunt doloribus? Delectus molestias earum rerum ipsa impedit beatae, nihil facere voluptatibus doloremque eos reprehenderit similique praesentium. Tenetur quod eligendi cupiditate consequatur voluptates quasi nesciunt tempora velit voluptatem sunt, fugiat obcaecati ipsam sint illo officia ullam aliquid sapiente vitae quam voluptatum, dicta amet non iusto? Animi rem consectetur architecto vitae quidem deserunt ex sed impedit numquam itaque atque sit adipisci id blanditiis facilis est dicta, repellendus quibusdam distinctio sunt! Odit nam, magni consequuntur provident fuga numquam porro officiis, voluptatem consectetur deserunt deleniti ut maiores, vitae laboriosam error omnis. Modi, fugiat laboriosam.</p>
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {profileData.username}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
      <p><strong>Phone Number:</strong> {profileData['Phone number']}</p>
    </>
  );
};

export default Profile;
