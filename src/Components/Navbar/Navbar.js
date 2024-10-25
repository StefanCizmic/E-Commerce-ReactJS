import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./Navbar.css";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      {['Home', 'Shop', 'Newsteller', 'Club', 'About', 'Shipping'].map((text) => (
        <ListItem button key={text} onClick={toggleDrawer(false)}>
          <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={text} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <nav>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: '250px', backgroundColor: '#f5f5f5', paddingTop: '20px' } }}
      >
        {drawerContent}
      </Drawer>
      <div className="upper-nav">
        <div className="search-cont">
          <span>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="find records" />
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
          <span className="responsive-menu-bars" onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>

      <div className='bottom-nav'>
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