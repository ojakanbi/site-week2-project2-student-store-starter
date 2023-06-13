import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo.jsx"

export default function Navbar() {
  return (
    <nav className="navbar">
     

      <div className = "content">

      <Logo />

      <ul className="link">
        <li> <a>Home </a> </li>
        <li> <a>About Us </a> </li>
        <li> <a>Contact Us </a> </li>
        <li> <a>Buy Now</a> </li>

      </ul>
      
      </div>
      
      
    </nav>
  )
}
