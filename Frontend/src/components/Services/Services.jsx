import React from 'react';
import { useLocation } from 'react-router-dom';
import DealerService from './dealerService';
import ConsumerService from './consumerService'; 
import { ReactTyped } from 'react-typed';
import Header from '../Header';
import Footer from '../Footer';

function Services() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userType = params.get('userType');
    const userName = params.get('userName');

    return (
        <>
            <Header type={userType} name={userName} />
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
                <h1 className='py-3'>
                    <ReactTyped strings={['WHAT WE OFFER.....']} typeSpeed={80} backSpeed={35} />
                </h1>
                {userType === 'Dealer' ? <DealerService /> : null}
                {userType === 'Consumer' ? <ConsumerService type={userType} name={userName}/> : null}
            </div>
            <Footer />
        </>
    );
}

export default Services;
