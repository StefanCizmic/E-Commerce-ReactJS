import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

export const Navbar = () => {
  
  const [stickyClass, setStickyClass] = useState ('relative');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 45 ? setStickyClass('fixed') : setStickyClass('relative');
    });
  }, []);

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
      <div className={`bottomNav ${stickyClass}`}>
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
