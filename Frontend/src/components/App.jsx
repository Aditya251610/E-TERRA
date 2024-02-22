import React from 'react';
import Home from './Home';
import Signup from './Signup';
import Services from './Services/Services';
import AboutUs from './AbouUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/signup' element={<Signup />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route
          path='/user/home'
          element={<Home />}
        ></Route>
        <Route
          path='/user/services'
          element={<Services />}
        ></Route>
        <Route path='/user/AboutUs' element={<AboutUs />} ></Route>
        <Route index element={<Login />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
