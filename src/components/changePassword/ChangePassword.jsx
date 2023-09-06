import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';

const ChangePassword = () => {
   const [error, setError] = useState()
    const handleSubmit =(e)=>{
        const auth = getAuth(app)
        e.preventDefault();
        const email = e.target.email.value;

        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert("Please check your email and change password.")
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
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

                <div className='flex flex-col'>
                    <small className='text-red-500'>{error? error: null}</small><br/>
                    <input
                        className='border-[1px] border-gray-500 rounded-md py-1 px-3 bg-blue-400 font-semibold cursor-pointer'
                        type="submit"
                        value="Send"/>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword
