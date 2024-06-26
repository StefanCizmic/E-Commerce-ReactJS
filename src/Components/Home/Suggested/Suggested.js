import React from "react";
import "./Suggested.css";

export const Suggested = () => {
  return (
    <div className="suggested">
      <div className="suggestedInner">
        <div className="suggestedText">
            <div>
          <h2>Freaky's 20</h2>
          <p>
            In our store, you'll find a carefully chosen selection of over 200
            vinyl records spanning various genres and eras. Please feel free to
            take a look at the featured records we've selected just for you.
          </p>
          </div>
        </div>
        <div className="suggestedRecords"></div>
      </div>
    </div>
  );
};
