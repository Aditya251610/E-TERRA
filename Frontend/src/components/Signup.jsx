import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { toast } from 'react-toastify';
import axios from 'axios';

function Signup(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contact, setContact] = useState();
    const [location, setLocation] = useState();
    const [pincode, setPinCode] = useState();
    const [userType, setUserType] = useState();
    const Navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!name || !email || !password || !contact || !location || !pincode || !userType) {
            toast.error('All fields are mandatory!', { autoClose: 3000 });
            return;
        } else{
            axios.post('http://localhost:3001/user/signup', {name, email, password, contact, location, pincode, userType})
            .then(result => {
                console.log(result);
                toast.success("Signup successfull!", {autoClose: 3000});
                Navigate('/user/login');
            })
            .catch(err => console.log(err));
        }
    }

    return(
        <div className='container d-flex flex-column justify-content-center align-items-center mx-auto vh-100 mb-4'>
            <h1 className='my-5'>
                <ReactTyped strings={['WELCOME TO E-TERRA.', 'THE BEST PLATFORM FOR E-WASTE MANAGEMENT.']} typeSpeed={80} backSpeed={35} loop />
            </h1>
            <div className='card mb-4' style={{width: "30rem", height: "30rem"}}>
                <form onSubmit={handleSubmit} className='form-control d-flex flex-column justify-content-center align-items-center mb-4'>
                    <h1 className='d-flex justify-content-center align-items-center mx-auto my-4'>SIGN UP</h1>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} type='text' className='form-control form-control-lg mb-3 my-4'></input>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} type='text' className='form-control form-control-lg mb-3'></input>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} type='password' className='form-control form-control-lg mb-3'></input>
                    <input placeholder='Contact Number' onChange={(e) => setContact(e.target.value)} type='text' className='form-control form-control-lg mb-3'></input>
                    <input placeholder='Location' onChange={(e) => setLocation(e.target.value)} type='text' className='form-control form-control-lg mb-3'></input>
                    <input placeholder='PINCODE' onChange={(e) => setPinCode(e.target.value)} type='text' className='form-control form-control-lg mb-3'></input>
                    <select placeholder='Select User Type' onChange={(e) => setUserType(e.target.value)} className='form-select form-control form-control-lg mb-3'>
                        <option value="options">Select user type</option>
                        <option value="Consumer">Consumer</option>
                        <option value="Dealer">Dealer</option>
                    </select>
                    <button className='btn btn-lg btn-dark w-50 rounded my-2' type='submit'>Sign Up</button>
                <p className='my-3 justify-content-center align-items-center mx-auto'>Already have an account?</p>
                <Link to='/user/login' className='btn btn-dark btn-lg w-50 rounded mb-4 mx-auto'>Log In</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;