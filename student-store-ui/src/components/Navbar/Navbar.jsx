import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo.jsx"
import Logo1 from "../../images/slack_logo.png"
import Logo2 from "../../images/slack-img.png"
export default function Navbar() {
  return (
    <nav className="navbar">
     

      <div className = "content">
      <img src= {Logo1} className = "slack-img"></img>

      <ul className="link">
        <li> <a id = 'home'>Home </a> </li>
        <li> <a id = 'about'>About Us </a> </li>
        <li> <a id = 'contact'>Contact Us </a> </li>
        <li> <a id = 'buyNow'>Buy Now</a> </li>

      </ul>
      
      </div>
      
      
    </nav>
  )
}
