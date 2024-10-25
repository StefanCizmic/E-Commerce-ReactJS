import React, { useState, useEffect } from "react";
import { getRecords } from "../../../Util/Fetch/getRecords";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";
import "./TopSellers.css";

export const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopSellers = async () => {
      const data = await getRecords("topSellers");
      setTopSellers(data);
      setIsLoading(false);
    };
    fetchTopSellers();
  }, []);

  return (
    <div className="topSellers">
      <div className="top">
        <p className="topHeading">Top Sellers!</p>
        <div className="topRecords">
          {isLoading ? (
            <CardSkeleton cards={5} />
          ) : (
            topSellers?.map((item) => (
              <div className="topItem" key={item.id}>
                <div className="topFiveImg">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="topFiveData">
                  <h2>{item.title}</h2>
                  <p>{item.artist}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
