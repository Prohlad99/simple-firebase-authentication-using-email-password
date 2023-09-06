import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import app from './../../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app);
    const [error, setError] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            verifyEmail(user);
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const verifyEmail= (user)=>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result)
        })

    }
  return (
    <div className='flex justify-center mt-10'>
      <form onSubmit={(e)=>handleSubmit(e)} className='border-[1px] border-indigo-400 inline-block p-4 rounded-md' action="">
        <div>
            <label htmlFor="email">Email</label><br />
            <input className='border-[1px] border-gray-500 rounded-md py-1 px-3 ' type="email" id='email' name='email'/>
        </div>

        <div className='my-4'>
            <label htmlFor="password">Password</label><br />
            <input className='border-[1px] border-gray-500 rounded-md py-1 px-3 ' type="password" id='password' name='password'/>
        </div>

        <div className='flex flex-col'>
            <p><small>Already have an account?</small> <Link className="text-sm text-blue-600" to="/login">Login</Link> </p>
            <small className='text-red-500'>{error? error : null}</small><br />
            <input className='border-[1px] border-gray-500 rounded-md py-1 px-3 bg-blue-400 font-semibold cursor-pointer' type="submit" value="Register"/>
        </div>
      </form>
    </div>
  )
}

export default Register
