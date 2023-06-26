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
      {/* Render the navigation bar */}
      <nav className="navbar">
        <div className="content">
          {/* Render the logo */}
          <a href="/">
            <img src={Logo1} className="slack-img" alt="Slack Logo" />
          </a>
          {/* Render the navigation links */}
          <ul className="link">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a id="about" href="#aboutus">About Us</a>
            </li>
            <li>
              <a id="contact" href="#Contact">Contact Us</a>
            </li>
            <li>
              <a id="buyNow" href="">Buy Now</a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Render the Welcome component */}
      <Welcome />
      
      {/* Render the nested routes */}
      <Outlet />
    </>
  );
}