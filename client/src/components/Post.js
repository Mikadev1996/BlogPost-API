import React, {useState} from "react";
import moment from "moment";
// eslint-disable-next-line
import PostCss from './styles/Post.css';
import {Link} from "react-router-dom";

const Post = ({postid, title, text, user, timestamp, likes, isAuthor, published}) => {
    const dateFormatted = moment(timestamp).format('DD/MM/YYYY');

    const [isPublished, setIsPublished] = useState(published)

    const updatePublishedState = () => {
        const token = localStorage.getItem('token')

        const formData = JSON.stringify({
            published: !isPublished
        })

        fetch(`http://localhost:5000/api/posts/${postid}/update`, {method: 'PUT',body: formData , headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                setIsPublished(isPublished => !isPublished);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='post-container'>
            <div className='post-likes-container'>
                <p>{likes} Likes</p>
            </div>

            <div className='post-info'>
                <Link to={`/posts/${postid}`}>
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
                </Link>

                {isAuthor &&
                <div className='post-publish'>
                    <button onClick={() => updatePublishedState()}>{isPublished ? "Hide Post" : "Publish Post"}</button>
                </div>}
            </div>

        </div>
    )
}

export default Post;