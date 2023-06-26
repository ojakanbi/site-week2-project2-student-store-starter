import React, { useState } from "react";
import "./ProductList.css";
import { Link, Outlet } from "react-router-dom";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export function ProductList({ products, cart, setCart }) {
  // Function to add a product to the cart
  function addToCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Function to remove a product from the cart
  function removeFromCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct.quantity === 1) {
      // If the product has quantity 1, remove it from the cart
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      // If the product has quantity more than 1, decrement its quantity
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    }
  }

  // Function to create a product card
  function createProduct(info, index) {
    return (
      <div className="product-card" key={info.id}>
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
              {/* Button to add the product to the cart */}
              <button
                className="quantity-button"
                onClick={() => {
                  addToCart(info);
                }}
              >
                +
              </button>
              {/* Button to remove the product from the cart */}
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
    );
  }

  return (
    <>
      <div className="product">
        {/* Render each product as a product card */}
        {products.length > 0 &&
          products.map((product, index) => createProduct(product, index))}
      </div>
      <Outlet />
    </>
  );
}
