import React from "react";
import { topSellers } from "../../../Util/topSellers";
import "./TopSellers.css";

export const TopSellers = () => {
  return (
    <div className="topSellers">
      <div className="top">
        <p className="topHeading">Top Sellers!</p>
        <div className="topRecords">
          {topSellers.map((item) => (
            <div className="topItem" key={item.id}>
              <div className="topFiveImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="topFiveData">
                <h2>{item.title}</h2>
                <p>{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
