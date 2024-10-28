import React from "react";
import { Bestselling } from "./Bestselling/Bestselling";
import { WhatsNew } from "./WhatsNew/WhatsNew";
import { Recommended } from "./Recommended/Recommended";
import { Info } from './Info/Info';
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Bestselling />
      {/* <WhatsNew />
      <Recommended />
      <Info /> */}
    </div>
  );
};
