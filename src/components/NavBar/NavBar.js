import React from "react";
import './NavBar.css';
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg"
import { Link } from "react-router-dom";

const NavBar=({setSidebar})=>{
    return(
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} className="menu-icon" />
                <Link to="/"> 
                    <img  
                    alt="youtube"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" className="logo" />
                </Link> 
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="input" placeholder="Search"/>
                    <img src={search_icon} alt=""/>
                </div>

            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt=""/>
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className="user-icon" alt="" />
            </div>
        </nav>
        
    )
}

export default NavBar;