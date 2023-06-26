import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import About from "../About/About";
import Footer from "../Footer /Footer";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  const url = "http://localhost:3001/api";

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false); // Stored for when the user clicks on the cart button in the Home component

  useEffect(() => {
    // Fetch the products data from the API
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <BrowserRouter>
      {/* Render the Navbar component outside the Routes */}
      <Navbar />
      <Sidebar cart={cart} setCart={setCart} open={open} setOpen={setOpen} />

      <div className="content-wrapper">
        {/* Create a wrapper for the routes */}
        <Routes>
          {/* Define the routes and their corresponding components */}
          <Route
            path="/"
            element={
              <Home
                products={products}
                cart={cart}
                setCart={setCart}
                open={open}
                setOpen={setOpen}
              />
            }
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}