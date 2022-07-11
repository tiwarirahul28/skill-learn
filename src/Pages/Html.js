import React from 'react'
import { NavLink } from 'react-router-dom'
import htmlimg from '../assests/images/html-1.png'
import author from '../assests/images/person-1.png'

const Html = () => {
    return (
        <>
        <section className='home-section'>
            <div className="text">HTML</div>
            <div className="card">
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={htmlimg} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>HTML Full Course - Build a Website Tutorial</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">freeCodeCamp.org</NavLink>
                        </div>
                    </div>
                </div>
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={htmlimg} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>HTML Full Course - Build a Website Tutorial</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">freeCodeCamp.org</NavLink>
                        </div>
                    </div>
                </div>
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={htmlimg} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>HTML Full Course - Build a Website Tutorial</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">freeCodeCamp.org</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Html
