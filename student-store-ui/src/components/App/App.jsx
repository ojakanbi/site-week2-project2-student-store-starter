import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDetails } from "../ProductDetails/ProductDetails";


export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  // console.log(products)

  return (
    <div className="app">
      
       
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />

       
          <Home products={products}/>
        </main>
      
    </div>
  );
}
