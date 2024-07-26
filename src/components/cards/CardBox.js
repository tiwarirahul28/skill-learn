import React from "react";
// import { NavLink } from 'react-router-dom'

const CardBox = ({
  img,
  heading,
  authImg,
  authLink,
  authName,
  level,
  category,
  showCategory,
}) => {
  return (
    <>
      <div className="cardBox">
        <div className="cardImg">
          <img src={img} alt="cardImg" />
        </div>
        <div className="cardContent">
          <h2>{heading}</h2>
          <p>Course Type: <span>{level}</span></p>
          <div className="cardAuth">
            <p>Course By: {authName}</p>
            <a href={authLink} rel="noreferrer" target="_blank">
              Vist
            </a>
          </div>
        </div>
      </div>
      {/* <div className="cardbox">
        <div className="imgbox">
          <a href={authLink} rel="noreferrer" target="_blank">
            <img src={img} alt="logo" />
          </a>
        </div>
        <div className="infobox">
          <div>
            <span>{category}</span>
            <a href={authLink} rel="noreferrer" target="_blank">
              <h1>{heading}</h1>
            </a>
            <p>Course Type: {level}</p>
          </div>
          <div className="person">
            <img src={authImg} alt="logo" />
            <a href={authLink} rel="noreferrer" target="_blank">
              {authName}
            </a>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default CardBox;
