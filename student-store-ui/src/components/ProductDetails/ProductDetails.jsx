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
    // Fetch the product details from the API when the component mounts
    axios.get(`${url}/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <>
      <div className="product-details">
        {/* Display the product image */}
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          {/* Display the product name */}
          <h1 className="product-name">{product.name}</h1>
          {/* Display the product price */}
          <p className="product-price">
            {product.price?.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          {/* Display the product description */}
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  );
}
