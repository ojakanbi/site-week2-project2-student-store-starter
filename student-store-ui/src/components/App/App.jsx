import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    // The nav bar should be inside with its own Route and is nested for the other routes
    <BrowserRouter>  
      <Navbar /> {/* Render the Navbar component outside the Routes */}
     
      <div className="content-wrapper"> {/* Create a wrapper for the routes */}
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



