import React from "react";
import './Video.css';
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommend from "../../components/Recommend/Recommend";
import { useParams } from "react-router-dom";



const Video=()=>{
    const {videoId, categoryId}=useParams();
    return (
        <div className="play-container">
           <PlayVideo videoId={videoId}/>
            <Recommend categoryId={categoryId}/>
        </div>
    )
}

export default Video;