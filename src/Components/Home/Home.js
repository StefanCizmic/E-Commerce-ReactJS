import React from "react";
import { TopSellers } from "./TopSellers/TopSellers";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <TopSellers />
    </div>
  );
};
