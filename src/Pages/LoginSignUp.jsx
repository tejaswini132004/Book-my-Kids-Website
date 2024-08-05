import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className='Login-container'>
        <div className="Login-main1">
            <h3>Welcome to Book My Kids!</h3><br></br>
            <p>Join Book my Kids to access exclusive casting opportunities, connect with industry professionals, and start your journey towards stardom. Join our community and take the first step in showcasing your talent!</p>
        </div>
      <div className="Login-main2">
        <div className="Login-main2-container">
            <h4>User Login</h4><br></br>
            <div className="Login-input">
            <label>Email</label>
            <input type='text'/><br></br>
            <label>Password</label>
            <input type='text'/>
        <div className="Login-checkbox">
        <input type='checkbox' /> &nbsp; Remember Me<br></br>
            </div> 
            
            </div>
            
            <button className='Login-btn1'>Login</button>
            <p style={{fontWeight:200}}>Forgot Password?</p>
            <div className="Login-with">
                <p>OR</p>
                <p>Login With</p>
            </div>
            <div className="Login-img">
                <img src='./images/business (1).png'/>
                <img src='./images/instagram (1).png'/>
                <img src='./images/facebook (1).png'/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
