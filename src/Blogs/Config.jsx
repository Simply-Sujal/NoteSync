// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCs80dcnUkP9VCp3P37y4IoWgAi7_mDleo",
  authDomain: "multi-shop-6e849.firebaseapp.com",
  projectId: "multi-shop-6e849",
  storageBucket: "multi-shop-6e849.appspot.com",
  messagingSenderId: "848464856847",
  appId: "1:848464856847:web:10e24dce0d796c126fa07a",
  measurementId: "G-1PXL046D1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};