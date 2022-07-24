import React from "react";
// eslint-disable-next-line
import CreatePostCss from './styles/CreatePost.css'

const CreatePost = () => {
    return (
        <div className='create-post-bar'>
            <div className='create-post-profile-pic-container'>
                <img className='create-post-profile-pic' src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b' alt='default'/>
            </div>
            <div className='create-post-main'>
                <p>Create Post</p>
            </div>
        </div>
    )
}

export default CreatePost;