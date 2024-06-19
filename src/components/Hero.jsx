import React from 'react';
import './Styles/css.css';
// import Heropic from '../assets/datasetsta_thumb.jpg';
import Heropic from '../assets/deeper3.gif';

export default function Hero() {
  return (
    <div className="hero">
      <video className="background-video" autoPlay loop muted>
        <source src="https://www.youtube.com/embed/fZ5pORFxUxw?si=iJi7BIanqXEYiL6p" type="video/mp4" />
       
      </video>
        <div className="hero-left">
            <h1><span>D</span>eep<span>F</span>ake Detection</h1>
            <p>Upload image to detect Fake or Real</p>
        </div>
        <div className="hero-right">
           <img src={Heropic}/>
        </div>
    </div>
  )
}
