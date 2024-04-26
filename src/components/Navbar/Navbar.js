import React from 'react'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div>
          <nav className="navbar">
      <div className="left">
        <span className="title">AGRO DAPP</span>
      </div>
      <div className="right">
        <a href = '/farmer' className="login">Login Farmer</a>
        <a href = '/consumer' className="login">Login Customer</a>
        {/* <button className="register">Register</button> */}
      </div>
    </nav>
    </div>
  )
}

export default Navbar
