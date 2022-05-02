import React from 'react'
import "./projectlist.scss"

export default function Projectlist({id,title,active,setSelected}) {
  return (
    <li className={active ? "projectlist active" : "projectlist"} 
    onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
