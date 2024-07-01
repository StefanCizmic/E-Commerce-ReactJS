import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  const openSite = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer className="footer">
      <div className="footerContent">
        <ul>
          <li onClick={() => openSite("https://www.facebook.com/")}>
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
          </li>
          <li onClick={() => openSite("https://www.instagram.com/")}>
            <FontAwesomeIcon icon={faInstagram} size="lg"/>
          </li>
          <li onClick={() => openSite("https://www.twitter.com/")}>
            <FontAwesomeIcon icon={faTwitter} size="lg"/>
          </li>
        </ul>
      </div>
      <div className="footerContent">
        <ul>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Shipping Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footerContent">
        <input type="text" placeholder="Enter your email"></input>
        <button>Subscribe</button>
      </div>
    </footer>
  );
};
