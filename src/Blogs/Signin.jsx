import React, { useEffect, useState } from 'react';
import { auth, provider } from './Config';
import { signInWithPopup } from 'firebase/auth';

const Signin = () => {
    const [user, setUser] = useState(null);

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setUser(data.user);
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("username", data.user.displayName); // Set the username
                
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });

    };
    // console.log(data.user.displayName);
    // console.log(data.user.email);
    
    useEffect(() => {
        setUser({
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username') // Retrieve the username
 
        });
        console.log(username);
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.username || user.email}!</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <button className='mt-32' onClick={handleClick}>Sign in with Google</button>
            )}

            
        </div>
    );
};

export default Signin;
