import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar(props) {
  const [open, setOpen] = useState(true);

  function toggleSidebar() {
    setOpen(!open);
  }

  const className = open ? "sidebar" : "sidebar-open";

  return (
    <section className={className}>
      <div className="wrapper">
        <button className="toggle-button-button-open" onClick={toggleSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        {open && (
          <div className="shoping-cart">
            <div className="open">
              <h3>
                Shopping Cart
                <span className="button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
              </h3>

              <div className="notification">
                No items added to the cart just yet! Start shopping
              </div>
              <div className="checkout-form">
                <h2>
                  Payment Info
                  <span className="button">
                    <i className="material-icons md-48">monetization_on</i>
                  </span>
                </h2>

                <div className="input-field">
                  <form>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                    />

                    <section className="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        I agree to the <a href="">terms and conditions</a>
                      </label>
                    </section>
                  </form>
                </div>

                <div className="">
                  <button className="button-checkout">Checkout</button>
                </div>

                <div className="information-check">
                  <h2>Checkout Info</h2>

                  <p>
                    A confirmation email will be sent to you so that you can
                    confirm this order. Once you have confirmed the order, it
                    will be delivered to your dorm room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
