import * as React from "react";
import "./Sidebar.css";
import { useState, useEffect} from "react";


// This component represents a sidebar that can be toggled open or closed.
export default function Sidebar({ cart, setCart }) {
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [paymentSatus, setPaymentStaus] = useState(false);


  // Function to toggle the sidebar open or closed.
  function toggleSidebar() {
    setOpen(!open);
  }

  function setName(name) {
    setNameInput(name);
  }

  function setEmail(event) {
    setEmailInput(event);
  }

  function checkout() {
    setPaymentStaus(!paymentSatus);
  }

  // Set the CSS class based on the state of the sidebar.
  const className = open ? "sidebar" : "sidebar-open";

  return (
    // The sidebar section with a wrapper div.
    <section className={className}>
      <div className="wrapper">
        {/* Button to toggle the sidebar */}
        <button className="toggle-button-button-open" onClick={toggleSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        {/* Render the shopping cart section only if the sidebar is open */}
        {open && (
          <div className="shoping-cart">
            <div className="open">
              {/* Shopping cart title */}``
              <h3>
                Shopping Cart
                <span className="button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
              </h3>
              {/* Notification for empty cart */}
              {cart.length > 0 ? (
                <div className="cart-container">
                  <button className="clear-button" onClick={() => setCart([])}>
                    Clear
                    <br></br>
                  </button>

                  {cart.map((item) => {
                    const cost = item.price * item.quantity;

                    return (
                      <div className="cart-item" key={item.id}>
                        <div className="cart-item-details">
                          <h4 className="cart-item-name">{item.name}</h4>
                          <p className="cart-item-price">
                            Price:{" "}
                            {item.price?.toLocaleString("us-EN", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                          <p className="cart-item-quantity">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="cart-item-cost">
                          Cost:{" "}
                          {cost?.toLocaleString("us-EN", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                      </div>
                    );
                  })}

                  <div className="cart-summary">
                    <h3>Total Cost</h3>
                    <p className="cart-total">
                      Subtotal:{" "}
                      {cart
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        ?.toLocaleString("us-EN", {
                          style: "currency",
                          currency: "USD",
                        })}
                    </p>
                    <p className="cart-tax">
                      Tax (5%):{" "}
                      {(
                        cart.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ) * 0.005
                      )?.toLocaleString("us-EN", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <p className="cart-grand-total">
                      Grand Total:{" "}
                      {(
                        cart.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ) * 1.1
                      )?.toLocaleString("us-EN", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="notification">
                  <h2>No items added to the cart just yet! Start shopping</h2>
                </div>
              )}
              {/* Checkout form */}
              <div className="checkout-form">
                {/* Payment info title */}
                <h2>
                  Payment Info
                  <span className="button">
                    <i className="material-icons md-48">monetization_on</i>
                  </span>
                </h2>
                {/* Input fields for name and email */}
                <div className="input-field">
                  <form>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      placeholder="Enter Your Name"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                      value={emailInput}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />

                    {/* Checkbox for terms and conditions */}
                    <section className="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        I agree to the <a href="">terms and conditions</a>
                      </label>
                    </section>
                    <div className="">
                      <button
                        type="submit"
                        className="button-checkout"
                        onClick={checkout}
                      >
                        Checkout
                      </button>
                    </div>
                  </form>
                </div>
                \{/* Checkout button */}
                {/* Checkout information */}
                <div className="information-check">
                  <h2>Checkout Info</h2>

                  {paymentStatus && cart.length > 0 ? (
                    <div>
                      <h3>This is the name input {nameInput}</h3>
                      <h3>This is the Email input {emailInput}</h3>
                    </div>
                  ) : (
                    <h2>dont return anything</h2>
                  )}

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
