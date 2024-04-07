import "./Comment.css";
import user_profile from "../../assets/user_profile.jpg";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import moment from "moment";

const Comment =({item})=>{

    return (
        <div className="comment">
            <img src={item.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.topLevelComment.snippet.authorDisplayName} <span>{moment(item.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                        <p>{item.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src={like} alt=""/>
                            <span>{item.topLevelComment.snippet.likeCount}</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
        </div>
    )
}

export default Comment;