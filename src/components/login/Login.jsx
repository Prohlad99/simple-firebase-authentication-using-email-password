import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const[error, setError] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            setError(error.message)
            console.log(error.message)
        })
    }

    return (
        <div className='flex justify-center mt-10'>
            <form onSubmit={(e)=>handleSubmit(e)}
                className='border-[1px] border-indigo-400 inline-block p-4 rounded-md'
                action="">
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input
                        className='border-[1px] border-gray-500 rounded-md py-1 px-3 '
                        type="email"
                        id='email'
                        name='email'/>
                </div>

                <div className='my-4'>
                    <label htmlFor="password">Password</label><br/>
                    <input
                        className='border-[1px] border-gray-500 rounded-md py-1 px-3 '
                        type="password"
                        id='password'
                        name='password'/>
                </div>

                <div className='flex flex-col'>
                    <p><small>Forgotten Password?</small> <Link className="text-sm text-blue-600" to="/change-password">Click here</Link> </p>
                    <small className='text-red-500'>{error? error: null}</small><br/>
                    <input
                        className='border-[1px] border-gray-500 rounded-md py-1 px-3 bg-blue-400 font-semibold cursor-pointer'
                        type="submit"
                        value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default Login
