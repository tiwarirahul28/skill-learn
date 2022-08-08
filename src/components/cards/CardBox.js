import React from 'react'
// import { NavLink } from 'react-router-dom'


const CardBox = ({img, heading, authImg, authLink, authName}) => {
    return (
        <>
        <div className="cardbox">
            <div className="imgbox">
                <a href={authLink}>
                    <img src={img} alt="logo"/>
                </a>
            </div>
            <div className="infobox">
                <h1>{heading}</h1>
                <div className="person">
                    <img src={authImg} alt="logo"/>
                    <a href={authLink}>{authName}</a>
                </div>
            </div>
        </div>  
        </>
    )
}

export default CardBox
