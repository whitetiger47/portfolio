import React from 'react'
import "./probackground.scss"
import  {useState } from "react";
export default function Probackground() {
    const[currentSlide,setCurrentSlide]=useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/symcor.png",
      title: "Symcor",
      desc:
        "Data Analyst",
      date: "March 2022 - Present",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/august.png",
      title: "August Infotech",
      date: "January 2021 - June 2021",
      desc:
        "Python Developer Intern",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/advancetech.jpg",
      title: "Advancetech Controls Pvt. Ltd.",
      date: "December 2020 - March 2021",
      desc:
        "Internet Of Things (IOT) Intern",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    way==="left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="probackground" id="probackground">
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          {data.map(d=>(
          
          <div className="container">
            
            <div className ="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon}  alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  
                  
                  <span>{d.date}</span>
                  
                </div>
              </div>
              <div className="right">  
              </div>
            </div>
            
          </div>
          ))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  );
}
