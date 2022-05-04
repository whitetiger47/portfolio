import React, { useEffect, useState } from 'react';
import "./projects.scss";
import Projectlist from '../projectlist/Projectlist';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';

export default function Projects() {
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },

  ];

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
        case "web":
        setData(webPortfolio)
        break;
        case "mobile":
        setData(mobilePortfolio)
        break;
        case "design":
        setData(designPortfolio)
        break;
        case "content":
        setData(contentPortfolio)
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
        <img src={d.img}
        alt="" />
        <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}


