
import * as React from "react"
import "./ProductCard.css"

export function ProductCard({products}) {

    // console.log(products)
  
    function createProduct(info) {
      return (
        <div className= "product-card">
          <img src={info.image} alt={info.name} />
          <p> {info.name}</p>
          <p> {info.price}</p>
        </div>
      )
    }
  
  
    return (
      <div className="product">
        {
          products.map(product => createProduct(product))
        }
  
      </div>
    )
}