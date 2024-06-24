import React, { useState, useEffect } from "react";
import { recommendedItems } from '../../../Util/recommendedItems'
import "./Recommended.css";

export const Recommended = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   const isAtStart = currentIndex === 0;
  //   const newIndex = isAtStart ? items.length - 3 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const goToNext = () => {
    const isAtEnd = currentIndex >= recommendedItems.length - 4;
    const newIndex = isAtEnd ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000); 
    return () => clearInterval(interval); // Čisti interval pri demontaži komponente
  }, [currentIndex]);

  return (
    <div className="recommended">
      <div className="carousel">
        <div className="carousel__content">
          {recommendedItems.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <div key={index} className="carousel__item">
              <div className="carousel__img">
                <img src={item.image} alt={item.author} />
              </div>
              <div className="carousel__data">
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
