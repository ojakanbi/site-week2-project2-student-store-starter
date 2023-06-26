import * as React from "react";
import { useState, useEffect } from "react";
import "./SidebarOpen.css";
import Payment from "./Payment";

// This component represents a sidebar that can be toggled open or closed.
export default function SidebarOpen({ cart, setCart, open, setOpen }) {
  return (
    <div>
      {open && (
        <div className="shoping-cart">
          <div className="open">
            {/* Shopping cart title */}
            <h3>
              Shopping Cart
              <span className="button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>
            {/* Notification for empty cart */}
            {cart.length > 0 ? (
              <>
                <div className="wholeshop-cont">
                  {/* Clear cart button */}
                  <button className="clear-button" onClick={() => setCart([])}>
                    Clear
                    <br></br>
                  </button>
                  <div className="cart-container">
                    {/* Render individual cart items */}
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

                    {/* Cart summary */}
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
                </div>
              </>
            ) : (
              <div className="notificationn">
                <h2>No items added to the cart just yet! Start shopping</h2>
              </div>
            )}

            {/* Render the Payment component */}
            <Payment cart={cart} setCart={setCart} />
          </div>
        </div>
      )}
    </div>
  );
}


