import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const links=[
    {text:"Home", path:"/home"},
    {text:"Product", path:"/product"},
    {text:"Login", path:"/"},
    {text:"Signup", path:"/signup"},
   
]
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center', backgroundColor:'#38A169',}}>
    <h3 style={{color:'white'}}>Worldref</h3>

    {links.map(({ text, path }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => {
            return isActive ? {color:"yellow" }: {color:"blue" }
          }}>
         {text}
        </NavLink>
      ))} 
   
    </div>
  )
}

export default Navbar