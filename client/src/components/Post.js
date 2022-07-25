import React from "react";
// eslint-disable-next-line
import PostCss from './styles/Post.css';
import {Link} from "react-router-dom";

const Post = ({postid}) => {
    return (
        <div className='post-container'>
            <div className='post-likes-container'>
                Vote
            </div>
            <Link to={`/posts/${postid}`}>
            <div className='post-info'>
                <div className="post-header">
                    <p>Posted by user/SomeUser123 (Date posted)</p>
                    <h2>Post Title</h2>
                </div>

                <div className="post-text">
                    Post Text
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur cumque ipsam magnam reprehenderit rerum. Amet cum dolorum error fugiat magnam molestiae odio odit, recusandae. Accusamus dignissimos quasi repudiandae voluptatum!
                </div>

                <div className="post-links">
                    <p>x Comments</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Post;