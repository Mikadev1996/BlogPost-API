import React from "react";
// eslint-disable-next-line
import CommentsCss from './styles/Comments.css'

const Comments = ({postid}) => {
    return (
        <div className='comment-section-container'>
            <div className='comment-container'>
                <div className='comment-header'>
                    <img className='comment-profile-pic' src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b' alt='default'/>
                    <p>Username123</p>
                    <p className='comment-timestamp'>· TimeStamp ago</p>
                </div>
                <p className='comment-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, autem ex fugiat magni maxime officia saepe sit! Deserunt doloremque hic, ipsa labore obcaecati quasi quos. A dignissimos quis repellat vel?
                </p>
            </div>
        </div>
    )
}

export default Comments;