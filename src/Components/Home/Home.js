import React from "react";
import { TopSellers } from "./TopSellers/TopSellers";
import { WhatsNew } from "./WhatsNew/WhatsNew";
import { Suggested } from "./Suggested/Suggested";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <TopSellers />
      <WhatsNew />
      <Suggested />
    </div>
  );
};
