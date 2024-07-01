import React from "react";
import { records } from "../../../Util/records";
import "./TopSellers.css";

export const TopSellers = () => {
  return (
    <div className="topSellers">
      <div className="top">
        <button className="buttonCtrlLeft"></button>
        <p className="topHeading">Top Sellers!</p>
        <div className="topRecords">
          {records.topSellers.map((item) => (
            <div className="topItem" key={item.id}>
              <div className="topFiveImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="topFiveData">
                <h2>{item.title}</h2>
                <p>{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="buttonCtrlRight"></button>
      </div>
    </div>
  );
};
