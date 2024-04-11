import React, { useEffect, useState } from "react";
import './PlayVideo.css';
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_Key, CHANNEL_DATA_API, COMMENT_DATA_API, VIDEO_API, value_converter } from "../../utils/constant";
import moment from "moment";
import Comment from "../Comment/Comment";
import { useParams } from "react-router-dom";

const PlayVideo=()=>{

    const {videoId}=useParams();

    const[videoData,setVideoData]=useState([]);
    const[channelDetail, setChannelDetail] =useState([]);
    const[commentData, setCommentData]=useState([]);

    const getDataVideo= async()=>{
        const data=await fetch(VIDEO_API + API_Key +"&id=" + videoId);
        const res=await data.json();
        setVideoData(res.items[0]);
    }

    const getOtherData = async()=>{
        const data= await fetch(CHANNEL_DATA_API + videoData.snippet.channelId + "&key="+ API_Key);
        const json= await data.json();
        setChannelDetail(json.items[0]);


        const data2=await fetch(COMMENT_DATA_API + API_Key + "&videoId=" + videoId);
        const json2= await data2.json();
        setCommentData(json2.items);
    }

    useEffect(()=>{
        getDataVideo();
    },[videoId]);

    useEffect(()=>{
        if(videoData.length!==0)
        getOtherData();
    },[videoData]);

    
   // console.log(videoData)
    if(videoData.length===0 || channelDetail.length===0) return
    return(
      
        <div className="play-video">
            {videoData && ( <>
            <iframe width="718" height="404" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Beginner Three.js &amp; GSAP Tutorial | Build and Deploy an Apple Website using React" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>

            <h3>{videoData && videoData.snippet.title}</h3>
            <div className="play-video-info">
                <p>{value_converter(videoData.statistics.viewCount)} Views &bull; 
                    {" "+moment(videoData.snippet.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt="" />{value_converter(videoData.statistics.likeCount)}</span>
                    <span><img src={dislike} alt="" />5</span>
                    <span><img src={share} alt="" />6</span>
                    <span><img src={save} alt="" /></span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelDetail.snippet.thumbnails.default.url} alt="" />
                <div>
                    <p>{videoData && videoData.snippet.channelTitle}</p>
                    <span>{value_converter(channelDetail.statistics.subscriberCount)} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{videoData.snippet.description.slice(0,250)}</p>
                <hr />
                <h4>{value_converter(videoData.statistics.commentCount)} Comments</h4>
                {commentData && commentData.map((item)=>{
                    return(
                        <Comment key={item.id} item={item.snippet} />
                    )
                } )}
             
            </div>
            </>   )}
        </div>
    )
}

export default PlayVideo;