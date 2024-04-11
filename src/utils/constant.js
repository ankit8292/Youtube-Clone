export const API_Key="AIzaSyCMrjiG0ogjNxEpWNoU61HlOVqwvv40B9o";

export const VIDEO_LIST_CATEGORY_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId="

export const VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="

export const CHANNEL_DATA_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" 

export const COMMENT_DATA_API="https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key="

export const YOUTUBE_SEARCH_SUGGESTION_LIST="https://www.googleapis.com/youtube/v3/search?key="+API_Key+"&type=video&part=snippet&maxResults=25&regionCode=IN&q=";

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}