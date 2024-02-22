import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import {toast} from 'react-toastify';
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!email || !password) {
            toast.error('All fields are mandatory!', { autoClose: 3000 });
            return;
        } else{
            axios.post('http://localhost:3001/user/login', { email, password })
            .then(result => {
                console.log(result);
                const { result: loginResult, userName, userType } = result.data;
                if (loginResult === "success") {
                    toast.success('Logged in successfully!', { autoClose: 3000 });
                    Navigate(`/user/home?userName=${userName}&userType=${userType}`);
                } else {
                    toast.error('Bad Credentials!', { autoClose: 3000 });
                }
            })
            .catch(err => {
                console.log(err);
                toast.error('Error during login', { autoClose: 3000 });
            });
        }

    }

    return(
        <div className='container d-flex flex-column justify-content-center align-items-center mx-auto vh-100 mb-4'>
            <h1 className='my-5'>
                <ReactTyped strings={['WELCOME TO E-TERRA.', 'THE BEST PLATFORM FOR E-WASTE MANAGEMENT.']} typeSpeed={80} backSpeed={35} loop />
            </h1>
            <div className='card mb-4' style={{width: "30rem", height: "30rem"}}>
                <form onSubmit={handleSubmit} className='form-control d-flex flex-column justify-content-center align-items-center mb-4'>
                    <h1 className='d-flex justify-content-center align-items-center mx-auto my-4'>LOGIN</h1>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} type='text' className='form-control form-control-lg mb-3'></input>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} type='password' className='form-control form-control-lg mb-3'></input>
                    <button className='btn btn-lg btn-dark w-50 rounded my-2' type='submit'>Login</button>
                <p className='my-3 justify-content-center align-items-center mx-auto'>Don't have an account?</p>
                <Link to='/user/signup' className='btn btn-dark btn-lg w-50 rounded mb-4 mx-auto'>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;