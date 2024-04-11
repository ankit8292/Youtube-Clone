import React, { useContext, useEffect, useState } from "react";
import context from "../../utils/context";
import {  YOUTUBE_SEARCH_SUGGESTION_LIST } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";
import VideoList from "./VideoList";


const SearchVideoList=()=>{
    const [searchparams]=useSearchParams();
    const query=searchparams.get("q");
    const [videoList, setVideoList]=useState([]);
    console.log(query);

    const getSuggestionVideo=async()=>{
        const data= await fetch(YOUTUBE_SEARCH_SUGGESTION_LIST + query);
        const res= await data.json();
        setVideoList(res.items);
    }


    useEffect(()=>{
        getSuggestionVideo();
    },[query]);


    return(
        <div>
                {videoList && videoList.map((video,index)=>{return(
                    <VideoList key={video.id.videoId} info={video}/>
                )})}
        </div>
    )
}

export default SearchVideoList;