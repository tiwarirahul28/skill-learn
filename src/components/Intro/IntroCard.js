import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const IntroCard = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <article className="question">
        <header>
          <h4 onClick={() => setShowInfo(!showInfo)}>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>

        {showInfo && <p>{info}</p>}
      </article>
    </>
  );
};

export default IntroCard;
