import React, { useEffect, useState } from "react";
import { getRecords } from "../../../Util/Fetch/getRecords";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";
import "./Recommended.css";

export const Recommended = () => {
  const [suggestedTwenty, setSuggestedTwenty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestedTwenty = async () => {
      const data = await getRecords("suggestedTwenty");
      setSuggestedTwenty(data);
      setIsLoading(false);
    };
    fetchSuggestedTwenty();
  }, []);

  return (
    <div className="suggested">
      <div className="suggestedInner">
        <div className="suggestedText">
          <div>
            <h2>Freaky's 20</h2>
            <p>
              In our store, you'll find a carefully chosen selection of over 200
              vinyl records spanning various genres and eras. Please feel free
              to take a look at the featured records we've selected just for
              you.
            </p>
          </div>
        </div>
        <div className="suggestedRecords">
          {isLoading ? (
            <CardSkeleton cards={20} />
          ) : (
            suggestedTwenty?.map((item) => (
              <div className="singleRecord" key={item.id}>
                <div className="singleRecordImg" data-content={item.price}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="singleRecordText">
                  <h4>{item.title}</h4>
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