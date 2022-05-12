import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">About me</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#probackground">Professional Background</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#education">Education & Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact me</a>
            </li>
        </ul>

    </div>
  )
}
