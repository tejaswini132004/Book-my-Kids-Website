import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginSignUp from './Pages/LoginSignUp.jsx'
import PostAJob from './Pages/PostAJob.jsx'
import Community from './Pages/Community.jsx'
import Shortlist from './Pages/Shortlist.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home category='home'/>}/>
        <Route path='/LoginSignUp' element={<LoginSignUp/>}/>
        <Route path='/PostAJob' element={<PostAJob/>}/>
        <Route path='/Community' element={<Community/>}/>
        <Route path='/Shortlist' element={<Shortlist/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
