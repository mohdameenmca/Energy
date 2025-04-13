import React from 'react'
import './Sidemenu.css'
import {Outlet, Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='Sidemenu'>

        <h2>Energy</h2>
        <ul>
            <Link to="/"><li>Overview</li></Link>
           
            <Link to="/bills"><li>Bills</li></Link>
           <Link to="/reading"> <li>Reading</li></Link>      
           <Link to="/profile"> <li>Profile</li></Link>            
        </ul>
      
    </div>
  )
}

export default SideMenu