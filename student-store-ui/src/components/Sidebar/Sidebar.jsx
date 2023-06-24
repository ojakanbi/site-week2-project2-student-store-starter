import * as React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import SidebarOpen from "./SidebarOpen";

// This component represents a sidebar that can be toggled open or closed.
export default function Sidebar({ cart, setCart, open, setOpen }) {




  console.log(cart)
  // Function to toggle the sidebar open or closed.
  function toggleSidebar(event) {
    event.stopPropagation();
    setOpen(!open);
  }
  
 
 
  

  function checkout() {
    event.preventDefault()
    if (cart.length > 0) {
      setCheckoutComplete(true);
    } else {
      alert("There's nothing in your cart to check out.");
    }
    
  }

  // Set the CSS class based on the state of the sidebar.
  const className = open ? "sidebar" : "sidebar-open";
  const buttonClass = open ? "toggle-button-button-close" : "toggle-button-button-open"

  return (
    
    // The sidebar section with a wrapper div.
    <section className={className}>
     
        {/* Button to toggle the sidebar */}
        <button className={buttonClass} onClick={toggleSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>

    


        {/* Sidebar content */}
        <SidebarOpen cart={cart} setCart={setCart} open={open} setOpen={setOpen}/>
     
    </section>
    
  );
}
