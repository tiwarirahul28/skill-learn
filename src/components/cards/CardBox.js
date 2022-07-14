import React from 'react'
import { NavLink } from 'react-router-dom'


const CardBox = ({img, heading, authImg, authLink, authName}) => {
    return (
        <>
        <div className="cardbox">
            <div className="imgbox">
                {/* <NavLink to={authLink}> */}
                    <img src={img} alt=""/>
                {/* </NavLink> */}
            </div>
            <div className="infobox">
                <h1>{heading}</h1>
                <div className="person">
                    <img src={authImg} alt=""/>
                    <NavLink to={authLink}>{authName}</NavLink>
                </div>
            </div>
        </div>  
        </>
    )
}

export default CardBox
