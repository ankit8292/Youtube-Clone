import React, { useEffect, useState } from "react";
import './Recommend.css';
import { API_Key, VIDEO_LIST_CATEGORY_API, value_converter } from "../../utils/constant";
import { Link } from "react-router-dom";



const Recommend=({categoryId})=>{
    const [recommend, setRecommend]=useState([]);


    const getRecommendData=async ()=>{
        const data=await fetch(VIDEO_LIST_CATEGORY_API + categoryId +"&key=" + API_Key);
        const json= await data.json();
        setRecommend(json.items);
    }

    useEffect(()=>{
        getRecommendData();
    },[])

    return(
        <div className="recommended">
            {recommend.map((item)=>{
                return(
                    <div className="side-video-list">
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={()=>window.scrollTo(0,0)} className="small-thumbnail">
                        <img src={item.snippet.thumbnails.medium.url} alt="" /> 
                    </Link> 
                    <div className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p className='recommended-views'>{value_converter(item.statistics.viewCount)} Views</p>

                    </div>
                   
                </div>
                )
            })}
         
         
        </div>
    )
}

export default Recommend;