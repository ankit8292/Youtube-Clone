import React, { useContext, useState } from "react";
import './NavBar.css';
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg"
import { Link } from "react-router-dom";
import context, { useTheme } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const NavBar=({setSidebar})=>{
    const [searchText, setSearchText]=useState("");
    const navigate=useNavigate();
    const {theme, toggleTheme}=useTheme();
    console.log(theme);

    const handleSearch=()=>{
    if(searchText=="") return;
    console.log(searchText);
    navigate("/video/search?q="+ searchText);
    setSearchText("");
    }
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
                  <input type="input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(()=>e.target.value)} />
                    <img src={search_icon} alt="" onClick={handleSearch} />
                </div>

            </div>

            <div className="flex-div">
                {/* <div className="mode-switch">
                    <label>
                        <input type="checkbox" checked={theme==="dark"} onChange={toggleTheme} />  
                        <span className="slider round"></span>
                   {/* {    theme==="dark" ? "Dark Mode" : "Light Mode"} 
                   </label>
                </div> */}

            </div>

            <div className="nav-right flex-div">
            <div className="mode-switch">
                    <label>
                        <input type="checkbox" checked={theme==="dark"} onChange={toggleTheme} />  
                        <span className="slider round"></span>
                   {/* {    theme==="dark" ? "Dark Mode" : "Light Mode"} */}
                   </label>
                </div>
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt=""/>
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className="user-icon" alt="" />
            </div>
        </nav>
        
    )
}

export default NavBar;