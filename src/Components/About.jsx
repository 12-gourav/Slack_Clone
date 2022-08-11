import React from 'react';
import img from "../assets/message.png";
import "./header.css"

const About = () => {
  return (
    <div className='about'>
    <img src={img} alt="alt"/>
    <p>Let's Create Room and Chat with your friends.</p>
    </div>
  )
}

export default About