import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import axios from 'axios';
 
function DealerService(){

    const [consumer, setConsumer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/user/consumerData')
            .then(response => {
                setConsumer(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching consumer data:', error);
            });
    }, []);

    return(
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
            <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <img className='rounded w-100 px-4 mb-4' src='https://techmonitor.ai/wp-content/uploads/sites/4/2022/06/GettyImages-1228516949.jpg'></img>
                </div>

                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <h1>BULK E-WASTE PROCUREMENT</h1>
                    <p>
                    Dealers, enhance your business by partnering with us for bulk e-waste procurement. <br />
                    Benefit from our efficient logistics and processing capabilities to streamline your <br />
                    e-waste supply chain.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <h1>PROFITABLE E-WASTE RECYCLING</h1>
                    <p>
                        Boost your profitability with our comprehensive e-waste recycling services. <br />
                        We focus on extracting valuable materials from e-waste, contributing to the circular <br />
                        economy and reducing the environmental impact.
                    </p>
                </div>
                
                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <img className='rounded w-100 px-5 mb-4' src='https://www.shutterstock.com/image-vector/icon-garbage-bags-money-bag-260nw-1482106937.jpg'></img>
                </div>
            </div>

            <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <img className='w-100 rounded px-5 my-4' src='https://static.vecteezy.com/system/resources/previews/005/330/265/non_2x/integrated-logistics-support-vector.jpg'></img>
                </div>

                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <h1>LOGISTICS SUPPORT</h1>
                    <p>
                        We provide efficient logistics support for dealers to facilitate the collection <br />
                        and transportation of e-waste. Our dedicated team ensures timely and secure delivery <br />
                        of electronic waste to our processing facilities.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <h1>REGULATORY COMPLIANCE</h1>
                    <p>
                        Stay compliant with e-waste regulations. Our services include assistance in adhering <br />
                        to legal requirements and certifications, ensuring that your e-waste management practices <br />
                        align with industry standards.
                    </p>
                </div>

                <div className='col d-flex flex-column justify-content-center align-items-center text-center'>
                    <img className='w-100 rounded my-4 px-4' src='https://cdn2.hubspot.net/hubfs/308986/COMPLIANCE.png'></img>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center text-center my-5'>
                <h1>
                    <ReactTyped strings={["TODAY'S DEALS....."]} typeSpeed={80} backSpeed={35} />
                </h1>
                <div className='col w-100'>
                    {consumer.map((consumer, index) => (
                        <div key={index} className='w-100 my-5'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col'><i className="fa-regular fa-user fa-2xl"></i></div>
                                        <div className='col'>
                                            <h5 className='card-title'>{consumer.name}</h5>
                                            <p className='card-text'>Contact: {consumer.phone}</p>
                                            <p className='card-text'>Amount: {consumer.amount} Kg</p>
                                            <p className='card-text'>Price(Per Kg): ₹{consumer.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DealerService;