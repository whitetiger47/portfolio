import React, { useState } from 'react';
import "./projects.scss";
import Projectlist from '../projectlist/Projectlist';

export default function Projects() {
  const [selected,setSelected] = useState("featured")


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
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn: ANd9GcQWZxqJ65p2YnxZ1Ddd5BTo2t1GQ1SFqJvb7jYaf54uNtftW9lMLg" 
        alt="" />
        <h3>Banking App</h3>
        </div>
      </div>

    </div>
  )
}
