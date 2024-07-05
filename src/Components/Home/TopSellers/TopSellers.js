import React, { useState, useEffect } from "react";
import { getRecords } from "../../../Util/Fetch/getRecords";
import "./TopSellers.css";

export const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  useEffect(() => {
    const fetchTopSellers = async () => {
      const data = await getRecords("topSellers");
      setTopSellers(data);
    };
    fetchTopSellers();
  }, []);
  return (
    <div className="topSellers">
      <div className="top">
        <button className="buttonCtrlLeft"></button>
        <p className="topHeading">Top Sellers!</p>
        <div className="topRecords">
          {topSellers.map((item) => (
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
