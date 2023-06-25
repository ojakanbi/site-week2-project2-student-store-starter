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

  const className = open ? "sidebar" : "sidebar-open";
  const buttonClass = open ? "toggle-button-button-close" : "toggle-button-button-open";

  return (
    <section className={className}>
      <button className={buttonClass} onClick={toggleSidebar}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>

      <SidebarOpen cart={cart} setCart={setCart} open={open} setOpen={setOpen} />

      {cart.length > 0 && (
        <div className="checkout-button">
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    </section>
  );
}
