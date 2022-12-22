import Nav from './Nav'
import React from 'react';
import './App.css';
import './Nav.css'
import Footer from './Footer';
import './Footer.css'

function App() {
  return (<>
    <div className='wrapper'>
      <img className='home-image-top' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1670009087/tacos/Buffalo-Chicken-Tacos-19_wn6vdj.jpg'></img>
      <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img className='home-image-bottom' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1670023547/tacos/guinesstaco_tzufpw.jpg' alt='' />
    </div>
    </>
  );
}

export default App;