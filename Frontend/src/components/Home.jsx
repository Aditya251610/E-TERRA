import { useLocation } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get('userType');
  const userName = params.get('userName');
  return (
    <div className="App">
      <Header type={userType} name={userName} />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
