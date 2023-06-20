import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";

export function ProductDetails() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const { id } = useParams();

  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(`${url}/${id}`).then((response) => {
      setProducts(response.data.product);
    });
  }, []);

  return (
    <>
      <div className="product-details">
        <div>
          <img
            className="product-image"
            src={products.image}
            alt={products.name}
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{products.name}</h1>
          <p className="product-price">
            {products.price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="product-description">{products.description}</p>
        </div>
      </div>
    </>
  );
}
