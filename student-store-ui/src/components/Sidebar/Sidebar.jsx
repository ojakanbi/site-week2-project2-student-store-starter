import * as React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <div className="wrapper">
        <button className="toggle-button button open">
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        <div className="shoping-cart">
          <div className="open">
            <h3>
              Shopping Cart
              <span className="button">
                <i class="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>

            <div className="notification">
              No items added to the cart just yet! Start shopping
            </div>
            <div className="checkout-form">
              <h2>
                Payment Info
                <span className="button">
                  <i class="material-icons md-48">monetization_on</i>
                </span>
              </h2>

              <div className="input-field">
                <form>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Enter Your Name " />

                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />

                  <section className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox">
                      I agree to the <a href = ""> terms and conditions</a>
                    </label>
                  </section>
                </form>
              </div>

              <div className="">
                <button className="button-checkout">Checkout</button>
              </div>

              <div className = "information-check">
                <h2>
                  Checkout Info
                </h2>

                <p>
                A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
order, it will be delivered to your dorm room.
                </p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
