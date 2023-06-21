import * as React from "react";
import "./ProductList.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";
import { ProductDetails } from "../ProductDetails/ProductDetails";


export function ProductList({ products, cart, setCart }) {
  function addToCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct){
      const updatedCart = cart?.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
      setCart(updatedCart);
      console.log(updatedCart)
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    // setQuantity(quantity + 1);
    // setcart(cart => [...cart, {id: id, quantiy:{quantity}}]) 
  }

  // function removeFromCart() { 
  //   setQuantity(quantity - 1);
  //   setcart.pop({id: id, quantiy:{quantity}})
  // }

  function createProduct(info, index) {
    const [quantity, setQuantity] = useState(0);
  

    // let cart = [ {id: info.id, quantiy:{quantity}}]
  

    return (
      <>


        
          <div className="product-card">
          
          <div className="container-card">
          <Link to={`products/${info.id}`}>
            <img src={info.image} alt={info.name} />
            <div className="product-info">
              <p className="product-name">{info.name}</p>
              <p className="product-price">{info.price.toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                }) }</p>
            </div>
            </Link>
            <div className="card-info">
            <section className="product-rating">⭐️⭐️⭐️⭐️⭐️</section>
            <section className="product-buttons">
              <button className="quantity-button" onClick={ () => {addToCart(info)}}>+</button>
              <button className="quantity-button">-</button>
              <p className="product-count"></p>
            </section>
          </div>
        
          </div>

          </div>
          
         
       
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
