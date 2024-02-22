import React from 'react';

function Footer(){

    const date= new Date().getFullYear;

    return(
        <footer style={{backgroundColor: "#040D12", color:"#FFFFEC"}} className='container-fluid d-flex flex-column justify-content-center align-items-center'>
            <p className='my-3 fw-bold'>© {date} E-TERRA MANAGEMENT. ALL RIGHTS RESERVED.</p>
            <p className='fw-bold'>Contact Us</p>
            <ul className='list-unstyled d-flex align-items-center'>
                <li className='mx-3' href='#'><i class="fa-brands fa-twitter fa-xl"></i></li>
                <li className='mx-3' href='#'><i class="fa-brands fa-instagram fa-xl"></i></li>
                <li className='mx-3' href='#'><i class="fa-brands fa-linkedin fa-xl"></i></li>
            </ul>
        </footer>
            
    );
}

export default Footer;