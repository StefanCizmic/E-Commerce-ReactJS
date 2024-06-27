import React from "react";
import { TopSellers } from "./TopSellers/TopSellers";
import { WhatsNew } from "./WhatsNew/WhatsNew";
import { SuggestedTwenty } from "./SuggestedTwenty/SuggestedTwenty";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <TopSellers />
      <WhatsNew />
      <SuggestedTwenty />
    </div>
  );
};
