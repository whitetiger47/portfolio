import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

let isLoading = true;

export default function Intro() {

  const textRef = useRef(null);

  useEffect(()=>{

    if(textRef.current && isLoading) {
      isLoading=false;
    
    init(textRef.current,{
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      
      strings: ["Developer","Designer","Content Creator"],
    });
  }

  },[]);

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/smit.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Smit Thakkar</h1>
            <h3>Freelance <span ref ={textRef}></span></h3>
          </div>
          <a href="#probackground">
          <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
