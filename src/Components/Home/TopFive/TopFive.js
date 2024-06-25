import React from "react";
import { topFive } from "../../../Util/topFive";
import "./TopFive.css";

export const TopFive = () => {
  return (
    <div className="recommended">
        <div className="topFive">
        <div className="topRecords">
          {topFive.map((item) => (
            <div className="topFiveItem" key={item.id}>
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
