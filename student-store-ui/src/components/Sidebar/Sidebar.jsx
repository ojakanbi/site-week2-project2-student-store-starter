import * as React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import SidebarOpen from "./SidebarOpen";

export default function Sidebar({ cart, setCart, open, setOpen }) {
  function toggleSidebar(event) {
    event.stopPropagation();
    setOpen(!open);
  }

  function checkout() {
    event.preventDefault();
    if (cart.length > 0) {
      setCart([]);
      setCheckoutComplete(true);
    } else {
      alert("There's nothing in your cart to check out.");
    }
  }

  // Determine the appropriate class name for the sidebar
  const className = open ? "sidebar" : "sidebar-open";
  // Determine the appropriate class name for the toggle button
  const buttonClass = open ? "toggle-button-button-close" : "toggle-button-button-open";

  return (
    <section className={className}>
      {/* Render the toggle button */}
      <button className={buttonClass} onClick={toggleSidebar}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>

      {/* Render the SidebarOpen component */}
      <SidebarOpen cart={cart} setCart={setCart} open={open} setOpen={setOpen} />

      {/* Add any additional content or components */}
    </section>
  );
}
