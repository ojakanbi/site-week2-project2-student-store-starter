import React, { useState, useEffect } from "react";
import Receipt from "./Receipt";
import "./Payment.css";

export default function Payment({ cart, setCart }) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleCheckout() {
    if (cart.length === 0) {
      alert("There's nothing in your cart to checkout.");
    } else if (!name || !email) {
      alert("Please enter your name and email.");
    } else {
      alert("Your order has been placed!");
     
      setCheckoutComplete(true);
      
    }
  }

  return (
    <div className="payment">
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="agreement" value="" />
            I agree to the terms and conditions
          </label>
        </form>
      </div>

      {cart.length > 0 && (
        <div className="payment-total">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}

      {checkoutComplete && (
        <Receipt
          cart={cart}
          setCart={setCart}
          checkoutComplete={checkoutComplete}
          total={total}
          name={name}
          email={email}
        />
      )}
    </div>
  );
}
