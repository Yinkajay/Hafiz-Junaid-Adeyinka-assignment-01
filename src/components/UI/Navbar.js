import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to='/Register'><a>Register</a></NavLink>
        <NavLink to='/Calculator'><a>Calculator</a></NavLink>
        <NavLink to='/Login'><a>Login</a></NavLink>
      </nav>
    </div>
  )
}
  
export default Navbar