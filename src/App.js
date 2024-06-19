import React from "react";
import { Home } from "./Components/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
};

export default App;
