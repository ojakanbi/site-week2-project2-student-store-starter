import React from "react";
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";


export function ProductDetails() { 

    const url = "https://codepath-store-api.herokuapp.com/store";
    const {id} = useParams();

    const [products, setProducts] = useState({});

    useEffect (() => {
        axios.get(`${url}/${id}`).then((response) => {
            setProducts(response.data.product);
            
        })
    })



    return (

        <>
       

        <h1>Hey</h1>

    
        <div className="product-details">
            <img src={products.image} alt={products.name} />
            <p> {products.name}</p>
            <p> {products.price}</p>
            <p> {products.description}</p>
        </div>

        </>
    )
}