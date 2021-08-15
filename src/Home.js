import React from 'react';
import banner from './img/banner41.jpg';
import './App.css';

function Home() {
  return (
    <>
    <div className="banner">
        <div className="imageBanner">
           <img src={banner} alt="Nature" />
           <div className="boxBanner">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button>Blog</button>
           </div>
        </div>
    </div>
    </>
  );
}

export default Home;
