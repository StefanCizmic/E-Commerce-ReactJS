import React from "react";
import { Recommended } from "./Recommended/Recommended";
import { TopTwenty } from "./TopTwenty/TopTwenty";
import { Info } from './Info/Info';
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Recommended />
      {/*
      <TopTwenty />
      <Info /> */}
    </div>
  );
};
