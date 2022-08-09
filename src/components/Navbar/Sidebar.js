import {React, useState} from 'react'
import './Sidebar.css'
import logo from '../../assests/images/logo.png'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript, DiJavascript1} from 'react-icons/di'

const Sidebar = () => {
    const [Show, setstate] = useState(false);
    return (
        <>
        <div className={Show ? "sidebar open" : "sidebar"}>
            <div className='logo-details'>
                <div className="logo_name">
                    <img src={logo} alt=""/>
                </div>
                <i className='bx bx-menu' onClick={() => setstate(!Show)} id="btn" ><AiOutlineMenu/></i>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink to="/" exact>
                        <i class='bx'><AiOutlineHtml5/></i>
                        <span class="links_name">HTML</span>
                    </NavLink>
                    <span class="tooltip">HTML</span>
                </li>
                <li>
                    <NavLink to="/css" exact>
                        <i class='bx'><DiCss3/></i>
                        <span class="links_name">CSS</span>
                    </NavLink>
                    <span class="tooltip">CSS</span>
                </li>
                <li>
                    <NavLink to="/javascript" exact>
                        <i class='bx'><DiJavascript1/></i>
                        <span class="links_name">JavaScript</span>
                    </NavLink>
                    <span class="tooltip">JavaScript</span>
                </li>
                {/* <li>
                    <NavLink to="/react">
                        <i class='bx'><GrReactjs/></i>
                        <span class="links_name">React Js</span>
                    </NavLink>
                    <span class="tooltip">React Js</span>
                </li> */}
                <li>
                    <NavLink to="/git" exact>
                        <i class='bx'><DiJavascript/></i>
                        <span class="links_name">Advanced JavaScript</span>
                    </NavLink>
                    <span class="tooltip">Advanced JavaScript</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar
