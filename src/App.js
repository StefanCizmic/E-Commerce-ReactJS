import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import { Newsteller } from "./Components/Newsteller/Newsteller";
import { Club } from "./Components/Club/Club";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";

const App = () => {
  return (
    <div className="bckg">
      <Navbar />
      <div className="app">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/newsteller" element={<Newsteller />}></Route>
          <Route path="/club" element={<Club />}></Route>
        </Routes>
        </SkeletonTheme>
        <Footer />
      </div>
    </div>
  );
};

export default App;
