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
      <div className="th">
        <h2>Freaky's 20</h2>
        <p>
          In our store, you'll find a carefully chosen selection of over 200
          vinyl records spanning various genres and eras. <br />Please feel free to
          take a look at the featured records we've selected just for you.
        </p>
      </div>
    </div>
  );
};
