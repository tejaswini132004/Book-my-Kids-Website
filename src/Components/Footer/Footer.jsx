import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="info">

        
        <div className="info-items">
            <h3>Company</h3><br></br>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>How we work</li>
            <li>Contact Us</li>
        </div>

        <div className="info-items">
            <h3>Artists and Recruiters</h3><br></br>
            <li>Casting Calls</li>
            <li>Join Our Community</li>
            <li>Agencies</li>
            <li>Popular Auditions</li>
            <li>Post a Job</li>
            <li>Find Talent</li>
            <li>Partners</li>
        </div>

        <div className="info-items">
            <h3>Support</h3><br></br>
            <li>Help</li>
            <li>Pricing</li>
            <li>FAQ's</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </div>
        </div>
        <div className="connect-with-us">
        <h3>Connect with us</h3>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
