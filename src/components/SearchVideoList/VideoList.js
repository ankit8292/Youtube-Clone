import React, { useState } from "react";
import "./SearchVideoList.css";
import user_profile from "../../assets/user_profile.jpg"
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { API_Key, VIDEO_API } from "../../utils/constant";

const VideoList=({info})=>{
    const {snippet, statistics} =info;
    const {title,thumbnails, channelTitle, publishedAt, description} =snippet;
    const[categoryId, setCategoryId]=useState(0);
    const navigate=useNavigate();

    const getCategoryOfVideo=async()=>{
        const data=await fetch(VIDEO_API + API_Key +"&id=" + info.id.videoId);
        const res=await data.json();
        setCategoryId(res.items[0].snippet.categoryId);
        navigate(`/video/${categoryId}/${info.id.videoId}`);
    }

    const handleCategory=()=>{
        getCategoryOfVideo();
    }
    return(
        <div className="video">
            <div className="child1">
                <img className="" alt="thumbnail" src={thumbnails.medium.url} onClick={handleCategory} /> 
            </div>
            <div className="child2">
                <h1 className="title">{title}</h1>
                <div className="play-video-info">
                    <p>{moment(publishedAt).fromNow()}</p>
                </div>
                <div className="publisher">
                <span><img src={user_profile} /></span><h3>{channelTitle}</h3>
                </div>
                
                <h2 className="description">{description}</h2>
            </div>
        </div>
    )
}

export default VideoList;