import * as React from "react";
import "./ProductList.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export function ProductList({ products, cart, setCart }) {
  function addToCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct) {
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      // console.log(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct.quantity === 1) {
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    }
  }

  function createProduct(info, index) {
    // const [quantity, setQuantity] = useState(0);

    // let cart = [ {id: info.id, quantiy:{quantity}}]

    return (
      <>
        <div className="product-card">
          <div className="container-card">
            <Link to={`products/${info.id}`} id="product-link">
              <img src={info.image} alt={info.name} />
              <div className="product-info">
                <p className="product-name">{info.name}</p>
                <p className="product-price">
                  {info.price.toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
            </Link>
            <div className="card-info">
              <section className="product-rating">⭐️⭐️⭐️⭐️⭐️</section>
              <section className="product-buttons">
                <button
                  className="quantity-button"
                  onClick={() => {
                    addToCart(info);
                  }}
                >
                  +
                </button>
                <button
                  className="quantity-button"
                  onClick={() => {
                    removeFromCart(info);
                  }}
                >
                  -
                </button>
                <p className="product-count">
                  {cart.find((item) => item.id === info.id)?.quantity || 0}
                </p>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="product">
        {products.length > 0
          ? products.map((product, index) => createProduct(product, index))
          : null}
      </div>
      <Outlet />
    </>
  );
}
