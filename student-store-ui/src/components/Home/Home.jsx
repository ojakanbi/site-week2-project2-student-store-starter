import * as React from "react";
import "./Home.css";
import { ProductCard } from "../ProductCard/ProductCard";
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [filter, setFliter] = useState([]);

  useEffect(() => {
    setFliter(props.products);
  }, [props.products]);

  function searchresults(search) {
    setFliter(
      props.products.filter((product) =>
        product.name.toLowerCase().includes(search)
      )
    );
  }

  function allCategories() {
    setFilter(props.products);
  }

  function filterByCategory(category) {
    setFilter(
      props.products.filter((product) => product.category === category)
    );
  }

  return (
    <>
      <div className="header-container">
        <section className="header-info">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>

          <p>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </p>
        </section>

        <section>
          <Logo />
        </section>
      </div>

      <div className="sub-nav-container">
        <section className="search-container">
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={(event) =>
              searchresults(event.target.value.toLowerCase())
            }
          />
          <button>
            <i class="material-icons md-48">search</i>
          </button>
        </section>

        <sections>
          <button className="search-button">
            <i class="material-icons md-48">help</i>
            <label>Help</label>
          </button>
        </sections>

        <sections>
          <button>
            My Cart <i class="material-icons md-48">shopping_cart</i>
          </button>
        </sections>
      </div>

      <sections className="cat-container">
        <ul>
          <li>
            <a onClick={allCategories()}>All Categories</a>
          </li>
          <li>
            <a
              href="#"
              data-category="clothing"
              onclick={filterByCategory(this.dataset.category)}
            >
              Clothing
            </a>
          </li>
          <li>
            <a
              href="#"
              data-category="food"
              onclick={filterByCategory(this.dataset.category)}
            >
              Food
            </a>
          </li>
          <li>
            <a
              href="#"
              data-category="accessories"
              onclick={filterByCategory(this.dataset.category)}
            >
              Accessories
            </a>
          </li>
        </ul>
      </sections>

      <div className="product-container">
        <ProductCard products={filter} />

      </div>
    </>
  );
}
