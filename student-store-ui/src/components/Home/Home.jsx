import * as React from "react"
import "./Home.css"
import { ProductCard } from "../ProductCard/ProductCard"


export default function Home(props) {

  return (
    <ProductCard products={props.products} />
  )

}