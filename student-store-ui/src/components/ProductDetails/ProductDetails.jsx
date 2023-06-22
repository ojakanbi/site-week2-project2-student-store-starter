import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import Home from "../Home/Home";

export function ProductDetails() {
  const url = "http://localhost:3001/products";
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${url}/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  // console.log(product);

  return (
    <>
      <div className="product-details">
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">
            {product.price?.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  );
}
