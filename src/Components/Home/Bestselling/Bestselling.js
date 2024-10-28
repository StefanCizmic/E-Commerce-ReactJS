import React, { useState, useEffect } from "react";
import { getRecords } from "../../../Util/Fetch/getRecords";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";
import "./Bestselling.css";

export const Bestselling = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
