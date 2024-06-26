import React, { useEffect, useState } from "react";
import './Feed.css';
import { Link } from "react-router-dom";
import { API_Key, VIDEO_LIST_CATEGORY_API, value_converter } from "../../utils/constant";
import moment from "moment";
import Shimmer from "../Shimmer/Shimmer";


const Feed=({category})=>{
    const [data, setData]=useState([]);
    const[loading, setLoading] =useState(false);

    useEffect(()=>{
        getData();
    },[category]);



    const getData=async()=>{
        setLoading(true);
        const res=await fetch(VIDEO_LIST_CATEGORY_API + category +"&key=" +API_Key);
        const json= await res.json();
        setData((prev)=>[...json.items]);
        // console.log(json.items);
        // console.log(data)
        setLoading(false);
    }


  
    return(

        <>
        <div className="feed">
               { data.map((item,index)=>{
                    return(
                    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img style={{marginLeft:"-5px"}} src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} Views &bull; 
                         {" "+moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>)}
                )
            }
            

        </div>
        <div className="shimmer">
        {loading && <Shimmer />}
        </div>
       
        </>
      
    )
}

export default Feed;