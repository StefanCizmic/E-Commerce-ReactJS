import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="upperNav">
        <div className="search-cont">
          <span>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="find records"></input>
          </span>
          <button>search</button>
        </div>
        <div>
          <Link to="/">
            <p className="store-name">Harmony Records</p>
          </Link>
        </div>
        <div className="user-cart-cont">
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
      </div>
      <div className="bottomNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/newsteller">Newsteller</Link>
          </li>
          <li>
            <Link to="/club">Club</Link>
          </li>
          <li>
            <Link to="/faq">About</Link>
          </li>
          <li>
            <Link to="/shippingpolicy">Shipping</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
