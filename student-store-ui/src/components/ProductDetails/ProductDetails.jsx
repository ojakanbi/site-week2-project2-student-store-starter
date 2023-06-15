import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./ProductDetails.css";


export function ProductDetails({product}) { 

    return (

        
        <div className="product-details">
        <img src={product.image} alt={product.name} />
        <p> {product.name}</p>
        <p> {product.price}</p>
        </div>
    )
}