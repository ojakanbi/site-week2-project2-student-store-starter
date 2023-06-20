import * as React from "react";
import "./ProductList.css";
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export function ProductList({ products }) {
  function createProduct(info, index) {
    return (
      <>
        <Link to={`products/${info.id}`} className="product-card">
          <div className="container-card">
            <img src={info.image} alt={info.name} />
            <div className="product-info">
              <p className="product-name">{info.name}</p>
              <p className="product-price">${info.price}</p>
            </div>
          </div>
          <div className="card-info">
            <section className="product-rating">⭐️⭐️⭐️⭐️⭐️</section>
            <section className="product-buttons">
              <button className="quantity-button">+</button>
              <button className="quantity-button">-</button>
            </section>
          </div>
        </Link>
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
