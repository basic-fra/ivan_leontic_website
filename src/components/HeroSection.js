import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/video-1.mp4" autoPlay loop muted playsInline
        preload="auto"/>
        {/* <h1 className="glowing-text"> */}
        <h1>  Latest project</h1>
        {/* <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>WATCH Video <i className='far fa-play-circle' /> 
                </Button>
        </div> */}
    </div>
  )
}

export default HeroSection