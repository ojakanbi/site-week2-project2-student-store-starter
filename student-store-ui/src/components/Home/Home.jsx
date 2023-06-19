import * as React from "react";
import "./Home.css";
import { ProductList } from "../ProductList/ProductList";
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";
import Logo1 from "../../images/slack_logo.png";
import Logo2 from "../../images/slack-img.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Navbar from "../Navbar/Navbar";

export default function Home({ products }) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  function searchResults(search) {
    setFilter(
      products.filter((product) => product.name.toLowerCase().includes(search))
    );
  }

  function allCategories() {
    setFilter(products);
  }

  function filterByCategory(category) {
    setFilter(products.filter((product) => product.category === category));
  }

  return (
    <>
      <div className="sub-nav-container" id="home">
        <section className="search-container">
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={(event) =>
              searchResults(event.target.value.toLowerCase())
            }
          />
          <button>
            <i className="material-icons md-48">search</i>
          </button>
        </section>

        <section>
          <button className="search-button">
            <i className="material-icons md-48">help</i>
            <label>Help</label>
          </button>
        </section>

        <section>
          <button className="cart-style">
            My Cart <i className="material-icons md-48">shopping_cart</i>
          </button>
        </section>
      </div>

      <section className="cat-container">
        <ul>
          <li>
            <a onClick={allCategories}>All Categories</a>
          </li>
          <li>
            <a
              href="#"
              data-category="clothing"
              onClick={(event) =>
                filterByCategory(event.target.dataset.category)
              }
            >
              Clothing
            </a>
          </li>
          <li>
            <a
              href="#"
              data-category="food"
              onClick={(event) =>
                filterByCategory(event.target.dataset.category)
              }
            >
              Food
            </a>
          </li>
          <li>
            <a
              href="#"
              data-category="accessories"
              onClick={(event) =>
                filterByCategory(event.target.dataset.category)
              }
            >
              Accessories
            </a>
          </li>
        </ul>
      </section>

      <div className="product-container"></div>

      <ProductList products={filter} />

      <div className="about-us-container">
        <h3>About</h3>

        <section className="about-us" id="aboutus">
          <section className="info-about">
            <p>
              The slack student store offers great products at great prices from
              a great team and for a great cause.
            </p>

            <p>
              We've searched far and wide for items that perk the interests of
              even the most eccentric students and decided to offer them all
              here in one place.</p>

            <p>
              All proceeds go towards bringing high quality CS education to
              college students around the country.
            </p>
          </section>

          <section className="about-img">
            {/* <img src={Logo1} className="App-logo" alt="logo" /> */}
          </section>
        </section>
      </div>

      <div className="about-us-container" id="Contact">
        <h3>Info</h3>

        <section className="info-section">
          <section className="info-details">
            <ul>
              <li>Email: slack.com</li>
              <li>Phone: 100-xxx-xxx</li>
              <li>Address: 500 Howard St San Francisco, CA 94105</li>
              <li>Socials:</li>
            </ul>
          </section>

          <section className="info-img">
            <img src={Logo2} className="App-logo" alt="logo" />
          </section>
        </section>
      </div>
    </>
  );
}
