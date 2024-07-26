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
      <div className="cardbox">
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
      </div>
    </>
  );
};

export default CardBox;
