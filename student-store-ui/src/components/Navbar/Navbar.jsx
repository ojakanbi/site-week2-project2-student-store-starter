import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo.jsx";
import Logo1 from "../../images/slack_logo.png";
import Logo2 from "../../images/slack-img.png";
import { Outlet } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="content">
          <a id="home"  href="#home">
          <img src={Logo1}className="slack-img"></img>
            </a>
          <ul className="link">
            <li>
              
              <a id="home" href="#home">Home </a>
            </li>
            <li>
              
              <a id="about" href="#aboutus">About Us  </a>
            </li>
            <li>
              <a id="contact" href="#Contact"> Contact Us </a>
            </li>
            <li>
              
              <a id="buyNow" href="">Buy Now</a>
            </li>
          </ul>
        </div>
      </nav>
      <Welcome/>
      <Outlet />
    </>
  );
}
