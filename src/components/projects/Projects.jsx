import React, { useEffect, useState } from 'react';
import "./projects.scss";
import Projectlist from '../projectlist/Projectlist';
import { featuredPortfolio } from '../../data';

export default function Projects() {
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    

  ];

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
        default:
          setData(featuredPortfolio)
    }


  },[selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map(item=>(
          <Projectlist title={item.title} 
          active={selected===item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <div className="item">
        <a href={d.source}><img src={d.img}
        alt="" /></a>
        <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}


