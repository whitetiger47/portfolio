import React from 'react'
import "./topbar.scss"
import {Person,Email} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">Smit</a>
            <div className="itemContainer">
                <Person className="icon"/>
                <span>+1 (902)-580-7465</span>
            </div>
            <div className="itemContainer">
                <Email className="icon"/>
                <span>thakkarsmit28@gmail.com</span>
            </div>
            
        </div>
        
        <div className="right">
            
        </div>
      </div>
    </div>
  )
}
