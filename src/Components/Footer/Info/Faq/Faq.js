import React, { useState } from "react";
import { faq } from "../../../../Util/faq";
import "./Faq.css";

export const Faq = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="faq">
        <h2>Frequently Asked Questions:</h2>
        <div className="faqs">
      {faq.map((item) => (
        <div
          className="faqItem"
          key={item.id}
          onClick={() => toggleAnswer(item.id)}
        >
          <div className="faqQuestion">
            <h2>{item.question}</h2>
          </div>
          {showAnswers[item.id] ? (
            <div className="faqAnswer">
              <p>{item.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
      </div>
    </div>
  );
};