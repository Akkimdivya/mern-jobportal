import React from 'react'

import app from '../firebase/firebase.config';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const handleLogin=()=>{
    signInWithPopup(auth, googleProvider).then((result) => {
    const user = result.user;
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const Login = () => {
  return (
    <div className='h-screen w-full flex item-center justify-center'>
        <button className='bg-primary px-8 py-2 text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login