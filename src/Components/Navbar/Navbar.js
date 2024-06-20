import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
        <div className="upperNav">
        <Link to="/">
          <p className="logo">freaky's</p>
        </Link>
        <div>
          <input type="text" placeholder="search"></input>
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
        </ul>
      </div>
    </nav>
  );
};
