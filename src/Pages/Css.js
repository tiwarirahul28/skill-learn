import React from 'react'
import { NavLink } from 'react-router-dom'
import LearnC from '../assests/images/LearnC.png'
import author from '../assests/images/person-1.png'


const Css = () => {
    return (
        <>
        <section class="home-section">
            <div class="text">Css</div>
            <div className="card">
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={LearnC} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>Learn CSS in 20 Minutes</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">Web Dev Simplified</NavLink>
                        </div>
                    </div>
                </div>
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={LearnC} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>Learn CSS in 20 Minutes</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">Web Dev Simplified</NavLink>
                        </div>
                    </div>
                </div>
                <div className="cardbox">
                    <div className="imgbox">
                        <img src={LearnC} alt=""/>
                    </div>
                    <div className="infobox">
                        <h1>Learn CSS in 20 Minutes</h1>
                        <div className="person">
                            <img src={author} alt=""/>
                            <NavLink to="#">Web Dev Simplified</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Css
