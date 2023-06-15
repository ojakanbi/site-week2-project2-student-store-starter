import React from 'react';
import Logo1 from "../../images/slack_logo.png";
import Logo2 from "../../images/slack-img.png";
import { Outlet } from "react-router-dom";
//import the welcome css
import "./Welcome.css";


export default function Welcome() {

    return (
        <>
        
        <div className="header-container">
        <section className="header-info">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          
          <p> We have all kinds of goodies.
             Click on any of the items to start filling up your 
             shopping cart. Checkout whenever your'e ready.

          </p>
        </section>
        <section>
          <img src={Logo1} id="logo-head"></img>
        </section>
      </div>
      
      </>
    )
}