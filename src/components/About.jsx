import React from 'react';
import './Styles/about.css'

const About = () => {
  return (
    <section id='about'>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
      Deepfakes are manipulated videos where faces are swapped realistically. We can use deep learning to detect them.
Your approach combines ResNet and LSTM models. ResNet extracts features from each video frame.
LSTMs analyze the sequence of frames, looking for inconsistencies that might indicate manipulation.
By training on real and deepfake videos, the model learns to differentiate between them.
This can help identify potential misinformation or malicious content spread through deepfakes.
      </p>
    </div></section>
  );
};

export default About;
