import React, { useEffect } from "react";
import { Popup } from "./Components/Popup/Popup";
import { Navbar } from "./Components/Navbar/Navbar";
import { User } from "./Components/Navbar/User/User";
import { Cart } from "./Components/Navbar/Cart/Cart";
import { Home } from "./Components/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import { Newsteller } from "./Components/Newsteller/Newsteller";
import { Club } from "./Components/Club/Club";
import { AboutUs } from "./Components/Navbar/Navigation/AboutUs/AboutUs";
import { Footer } from "./Components/Footer/Footer";
import { Faq } from "./Components/Footer/Info/Faq/Faq";
import { ContactUs } from "./Components/Footer/Info/ContactUs/ContactUs";
import { ShippingPolicy } from "./Components/Navbar/Navigation/ShippingPolicy/ShippingPolicy";
import { TermsOfService } from "./Components/Footer/Info/TermsOfService/TermsOfService";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const currentRoute = useLocation();
  const navigateTo = useNavigate();
  useEffect(() => {
    if (currentRoute.pathname !== "/") {
      navigateTo("/");
    }
  }, []);
  return (
    <div>
      <Popup />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/newsteller" element={<Newsteller />}></Route>
          <Route path="/club" element={<Club />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/shipping" element={<ShippingPolicy />}></Route>
          <Route path="/termsofservice" element={<TermsOfService />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
