import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function Navigation() {

const list = [
  { name: "Energy", path: "/" },
  { name: "Electrical", path: "/" },
  { name: "Gas", path: "/" },
  { name: "Help", path: "/" },
  { name: "About", path: "/" },
  { name: "Account", path: "/Signin" }
];

  return (
    <div className='nav'>
        <h2>Energy</h2>
        <ul>
            {
                list.map((mylist,index)=>{
                   return <li key={index}><Link to={mylist.path}>{mylist.name}</Link></li>
                })
            }
            
        </ul>

    </div>
  )
}

export default Navigation