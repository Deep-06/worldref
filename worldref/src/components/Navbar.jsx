import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center', backgroundColor:'lightgray',}}>
    <h3>Worldref</h3>
    <Link to='/'>Login</Link>
      <Link to='/home'>Home</Link>
      <Link to='product'>Product</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Navbar