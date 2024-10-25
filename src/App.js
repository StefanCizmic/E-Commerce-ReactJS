import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import { Newsteller } from "./Components/Newsteller/Newsteller";
import { Club } from "./Components/Club/Club";
import { Footer } from "./Components/Footer/Footer";
import { Faq } from "./Components/Footer/Info/Faq/Faq";
import { ContactUs } from "./Components/Footer/Info/ContactUs/ContactUs";
import { ShippingPolicy } from "./Components/Footer/Info/ShippingPolicy/ShippingPolicy";
import { TermsOfService } from "./Components/Footer/Info/TermsOfService/TermsOfService";
import { Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/newsteller" element={<Newsteller />}></Route>
            <Route path="/club" element={<Club />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/shippingpolicy" element={<ShippingPolicy />}></Route>
            <Route path="/termsofservice" element={<TermsOfService />}></Route>
          </Routes>
        </SkeletonTheme>
        <Footer />
      </div>
    </div>
  );
};

export default App;
