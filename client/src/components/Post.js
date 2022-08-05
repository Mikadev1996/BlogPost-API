import React from "react";
import moment from "moment";
// eslint-disable-next-line
import PostCss from './styles/Post.css';
import {Link} from "react-router-dom";

const Post = ({postid, title, text, user, timestamp}) => {
    const dateFormatted = moment(timestamp).format('DD/MM/YYYY');

    return (
        <div className='post-container'>
            <div className='post-likes-container'>
                Vote
            </div>
            <Link to={`/posts/${postid}`}>
            <div className='post-info'>
                <div className="post-header">
                    <p>Posted by user/{user.username} {dateFormatted} </p>
                    <h2>{title}</h2>
                </div>

                <div className="post-text">
                    {text}
                </div>

                <div className="post-links">
                    <a href={`/posts/${postid}#comment-section-container`}><p>View Comments</p></a>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Post;