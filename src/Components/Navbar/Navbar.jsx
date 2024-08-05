import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h4 className='nav-h4'>BOOK MY KIDS</h4>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/PostAJob"><li>Post a Job</li></Link>
            <Link to="/Shortlist"><li>Shrotlist</li></Link>
            <Link to="/Community"><li>Community</li></Link>
            <Link to="/LoginSignUp"><button className='nav-btn'>Login/Sign Up</button></Link>
          </ul>
        
        </nav>
    </div>
  )
}

export default Navbar
