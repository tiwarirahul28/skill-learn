import {React} from 'react'
import './Sidebar.css'
import logo from '../../assests/images/logo.png'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineHtml5, AiFillGithub} from 'react-icons/ai'
import {DiCss3, DiJavascript, DiJavascript1, DiNodejs, DiMongodb} from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'


const Sidebar = ({Show, setstate}) => {
    return (
        <>
        <div className={Show ? "sidebar open" : "sidebar"}>
            <div className='logo-details'>
                <div className="logo_name">
                    <a href='/'>
                        <img src={logo} alt="logo"/>
                    </a>
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
                <li>
                    <NavLink to="/github">
                        <i class='bx'><AiFillGithub/></i>
                        <span class="links_name">Git</span>
                    </NavLink>
                    <span class="tooltip">Git</span>
                </li>
                <li>
                    <NavLink to="/advance-javascript" exact>
                        <i class='bx'><DiJavascript/></i>
                        <span class="links_name">Advanced JavaScript</span>
                    </NavLink>
                    <span class="tooltip">Advanced JavaScript</span>
                </li>
                <li>
                    <NavLink to="/reactjs" exact>
                        <i class='bx'><RiReactjsLine/></i>
                        <span class="links_name">React JS</span>
                    </NavLink>
                    <span class="tooltip">React JS</span>
                </li>
                <li>
                    <NavLink to="/nodejs" exact>
                        <i class='bx'><DiNodejs/></i>
                        <span class="links_name">Node JS</span>
                    </NavLink>
                    <span class="tooltip">Node JS</span>
                </li>
                <li>
                    <NavLink to="/mongodb" exact>
                        <i class='bx'><DiMongodb/></i>
                        <span class="links_name">MongoDB</span>
                    </NavLink>
                    <span class="tooltip">MongoDB</span>
                </li>
                <li>
                    <NavLink to="/nextjs" exact>
                        <i class='bx'><TbBrandNextjs/></i>
                        <span class="links_name">Next JS</span>
                    </NavLink>
                    <span class="tooltip">Next JS</span>
                </li>
                <li class="profile">
                    <div class="profile-details">
                    <div class="name_job">
                    {/* <hr/> */}
                        <div class="name">Made With ❤️</div>
                        <div class="job">&copy;2022 Rahul Tiwari</div>
                    </div>
                    </div>
                    {/* <i class='bx bx-log-out' id="log_out" ><RiUserFill/></i> */}
                </li>
            </ul>
            <hr/>
        </div>
        </>
    )
}

export default Sidebar
