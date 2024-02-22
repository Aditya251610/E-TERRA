import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import image1 from './Images/image1.jpeg';
import image2 from './Images/image2.jpeg';
import image3 from './Images/image3.jpeg';

function AboutUs(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userType = params.get('userType');
    const userName = params.get('userName');

    return(
        <>
            <div>
                <Header type={userType} name={userName} />
                <div className='my-4 d-flex flex-column justify-content-center align-items-center text-center'>
                    <h1 className='my-3'>The Team</h1>
                    <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center'>
                        <div className='col my-5'>
                            <div className='row d-flex flex-column justify-content-center align-items-center text-center'>
                                <div className='card mx-3 w-75 d-flex flex-column justify-content-center align-items-center text-center'>
                                    <div className='row'>
                                        <div className='col d-flex flex-start mx-5 my-3'>
                                            <img className='w-25 rounded-circle' src={image1} alt='Nafees'></img>
                                        </div>
                                        <div className='col mt-4 mx-3 d-flex flex-column justify-content-center align-items-center text-center'>
                                            <h2>NAFEES AYUBI (VTU20070)</h2>
                                            <h4>Veltech Rangarajan Dr. Sagunthala R&D Institute of science and technology.</h4>
                                            <p>
                                                I'm NAFEES AYUBI, a web developer fluent in HTML, CSS, JavaScript, Node.js, <br />
                                                Express.js, React.js, and MongoDB. Passionate about crafting seamless digital <br />
                                                experiences, I blend frontend finesse with backend prowess. Let's <br />
                                                collaborate to bring your visions to life in the dynamic realm of <br />
                                                the web. Welcome aboard!
                                            </p>
                                            <div className='d-flex'>
                                                <a className='float-end mx-3 mb-3' href='https://www.linkedin.com/in/nafees-ayubi-498b86257/'><i className="fa-brands fa-linkedin fa-xl" /></a>
                                                <a className='float-end mx-3 mb-3' href='https://github.com/nafeesayubi'><i className='fa-brands fa-github fa-xl' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col my-5'>
                            <div className='row d-flex flex-column justify-content-center align-items-center text-center'>
                                <div className='card mx-3 w-75 d-flex flex-column justify-content-center align-items-center text-center'>
                                    <div className='row'>
                                        <div className='col d-flex flex-start mx-5 my-3'>
                                            <img className='w-25 rounded-circle' src={image2} alt='Nafees'></img>
                                        </div>
                                        <div className='col mt-4 mx-3 d-flex flex-column justify-content-center align-items-center text-center'>
                                            <h2>S ADARSH (VTU19722)</h2>
                                            <h4>Veltech Rangarajan Dr. Sagunthala R&D Institute of science and technology.</h4>
                                            <p>
                                                I'm S ADARSH, a web enthusiast skilled in Python, HTML, CSS, and intermediate JavaScript. <br />
                                                With a passion for clean design and functional interfaces, I'm dedicated to creating engaging <br />
                                                online experiences. Let's collaborate to turn your ideas into captivating digital realities. <br />
                                                Excited to embark on this journey together!
                                            </p>
                                            <div className='d-flex'>
                                                <a className='float-end mx-3 mb-3' href='www.linkedin.com/in/s-adarsh-ab05192b6'><i className="fa-brands fa-linkedin fa-xl" /></a>
                                                <a className='float-end mx-3 mb-3' href='https://github.com/Adarshnair0407'><i className='fa-brands fa-github fa-xl' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col my-5'>
                            <div className='row d-flex flex-column justify-content-center align-items-center text-center'>
                                <div className='card mx-3 w-75 d-flex flex-column justify-content-center align-items-center text-center'>
                                    <div className='row'>
                                        <div className='col d-flex flex-start mx-5 my-3'>
                                            <img className='w-25 rounded-circle' src={image3} alt='Nafees'></img>
                                        </div>
                                        <div className='col mt-4 mx-3 d-flex flex-column justify-content-center align-items-center text-center'>
                                            <h2>NIHARIKA KUMARI (VTU20070)</h2>
                                            <h4>Veltech Rangarajan Dr. Sagunthala R&D Institute of science and technology.</h4>
                                            <p>
                                                I'm NIHARIKA KUMARI, a web enthusiast weaving digital wonders with HTML, CSS, and JavaScript. <br />
                                                Proficient in Node.js for powerful backend magic. From elegant interfaces to dynamic functionalities, <br />
                                                I blend creativity and code. Let's embark on a journey to elevate your online presence together. <br />
                                                Welcome to my world of web wizardry!
                                            </p>
                                            <div className='d-flex'>
                                                <a className='float-end mx-3 mb-3' href='https://www.linkedin.com/in/niharika-kumari-3302262a6'><i className="fa-brands fa-linkedin fa-xl" /></a>
                                                <a className='float-end mx-3 mb-3' href='https://github.com/Niharika2016'><i className='fa-brands fa-github fa-xl' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default AboutUs;