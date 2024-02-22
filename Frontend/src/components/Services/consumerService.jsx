import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function ConsumerService(props){

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [amount, setAmount] = useState();
    const [price, setPrice] = useState();
    const userName = props.name;
    const userType = props.type;
    const Navigate = useNavigate();

    const handleClick = (e) =>{
        e.preventDefault();

        if(!name || !phone || !amount || !price){
            toast.error("All Feilds are manadatory!")
        } else{
            axios.post("http://localhost:3001/user/services", {name, phone, amount, price})
            .then(result =>{
                console.log(result);
                toast.success("Data Added Successfully!");
                Navigate(`/user/services?userName=${userName}&userType=${userType}`);
            })
            .catch(err => console.log(err));
        }
    }

    return(
        <div className='container-fluid d-flex flex-column'>
                <div className='row'>
                    <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='rounded w-100 px-4 mb-3' src='https://static.vecteezy.com/system/resources/previews/023/860/358/non_2x/eco-friendly-people-garbage-collector-man-with-waste-people-sort-garbage-by-type-into-containers-for-recycling-ecology-concept-flat-illustration-care-garbage-separation-people-sorting-vector.jpg'></img>
                    </div>

                    <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                        <h1>E-WASTE COLLECTION</h1>
                        <p>
                            Safely dispose of your electronic waste by availing our doorstep collection <br />
                            service. Our team ensures secure handling and eco-friendly disposal of your <br />
                            outdated or unused electronics.
                        </p>
                    </div>
                </div>

                <div className='row py-5'>
                    <div className='px-4 mb-3 col d-flex flex-column justify-content-center align-items-center text-center'>
                        <h1>QUICK AND EASY SELLING</h1>
                        <p>
                        Sell your e-waste effortlessly! Our streamlined process allows consumers to sell <br />
                        their electronics hassle-free. From old gadgets to unused appliances, turn your <br />
                        e-waste into a valuable resource.
                        </p>
                    </div>

                    <div className='px-4 mb-3 col d-flex flex-column justify-content-center align-items-center'>
                        <img className='rounded w-100 mb-3 px-4' src='https://c8.alamy.com/comp/2F7K8JA/buy-or-sell-businessman-or-investor-is-thinking-about-finances-vector-cartoon-stick-figure-illustration-2F7K8JA.jpg' alt='image1' />
                    </div>
                </div>

                <div className='row py-5'>
                    <div className='px-4 mb-3 col d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='rounded w-100 px-4 mb-3' src='https://assets-global.website-files.com/62137861fa1d2b19482bbe20/643fcc53a89c3380323326d4_What%20is%20competitive%20pricing.png' alt='image'></img>
                    </div>

                    <div className='col mb-3 d-flex flex-column align-items-center justify-content-center text-center px-4'>
                        <h1>COMPETITIVE PRICING</h1>
                        <p>
                            Receive fair and competitive prices for your e-waste. We believe in transparent <br />
                            transactions, ensuring that consumers get the best value for their electronics <br />
                            while contributing to a sustainable environment.
                        </p>
                    </div>
                </div>

                <div className='row py-5'>
                    <div className='px-4 mb-3 col d-flex flex-column justify-content-center align-items-center text-center'>
                        <h1>ENVIRONMENTALLY RESPONSIBLE DISPOSAL.</h1>
                        <p>
                            Choose a greener path for your e-waste. We adhere to environmentally responsible <br />
                            disposal practices, ensuring that hazardous materials are properly managed, and <br />
                            valuable components are recycled.
                        </p>
                    </div>

                    <div className='px-4 mb-3 col d-flex flex-column justify-content-center align-items-center'>
                        <img className='rounded w-100 mb-3 px-4' src='https://www.dwmpl.com/wp-content/uploads/2023/09/ewaste-challenge-01-scaled.jpg' alt='image1' />
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='card my-5 w-50 d-flex flex-column justify-content-center align-items-center text-center'>
                        <h2 className='my-3'>SELL YOUR WASTE</h2>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <input onChange={(e) => setName(e.target.value)} className='form-control form-control-lg my-3' placeholder='Name' type='text' />
                            <input onChange={(e) => setPhone(e.target.value)} className='form-control form-control-lg my-3' placeholder='Phone Number' type='text' />
                            <input onChange={(e) => setAmount(e.target.value)} className='form-control form-control-lg my-3' placeholder="Amount of Waste (in KG's)" type='text' />
                            <input onChange={(e) => setPrice(e.target.value)} className='form-control form-control-lg my-3' placeholder='Price(per KG)' type='text' />
                            <Link to={`/user/services?userName=${userName}&userType=${userType}`}><button onClick={handleClick} className='btn btn-lg btn-success my-3'>Submit</button></Link>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ConsumerService;