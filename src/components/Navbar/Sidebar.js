import React from 'react'
import './Sidebar.css'
import logo from '../../assests/images/logo.png'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineHtml5, AiFillGithub} from 'react-icons/ai'
import {DiCss3, DiJavascript} from 'react-icons/di'
// import {GrReactjs} from 'react-icons/gr'

const Sidebar = () => {
    return (
        <>
        <div className='sidebar'>
            <div className='logo-details'>
                <div className="logo_name">
                    <img src={logo} alt=""/>
                </div>
                <i className='bx bx-menu' id="btn" ><AiOutlineMenu/></i>
            </div>
            <ul className='nav-list'>
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
                        <i class='bx'><DiJavascript/></i>
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
                        <i class='bx'><AiFillGithub/></i>
                        <span class="links_name">Git</span>
                    </NavLink>
                    <span class="tooltip">Git</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar
