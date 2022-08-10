import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import {useParams} from "react-router-dom";
import moment from "moment";
import likeIcon from '../components/images/white-like-icon.png';
// eslint-disable-next-line
import ViewPostCss from '../components/styles/ViewPost.css';
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";

const ViewPost = () => {
    const { postid } = useParams();
    const [comments, setComments] = useState([]);
    const [postData, setPostData] = useState({
        title: "",
        text: "",
        likes: 0,
        user: {
            _id: "",
            username: "",
        },
        timestamp: "",
    });


    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        fetch(`https://shielded-hamlet-48088.herokuapp.com/api/posts/${postid}`)
            .then(r => r.json())
            .then(data => {
                setPostData(data.post)
                setComments(data.comments)
            })
            .catch(err => console.log(err));
    }

    const handleNewComment = (comment) => {
        setComments(comments => [comment, ...comments])
    }

    const updateLikes = () => {
        setPostData(prevState => ({
            ...prevState,
            likes: prevState.likes + 1
        }))

        const formData = JSON.stringify({
            likes: postData.likes + 1
        })
        fetch(`https://shielded-hamlet-48088.herokuapp.com/api/posts/${postid}/like`, {method: 'PUT', body: formData, headers:{'Content-Type': 'application/json'}})
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='view-post-content-header'></div>
                <div className='view-post-container'>
                    <div className='view-post-content'>
                        <div className='view-post-likes-container' >
                            <p>{postData.likes} Likes</p>
                            <img src={likeIcon}  alt='like' onClick={() => updateLikes()} className='like-icon'/>
                        </div>

                        <div className='view-post-info'>
                            <div className='post-header'>
                                <p>Posted by user/{postData.user.username} {moment(postData.timestamp).format('DD/MM/YYYY')}</p>
                                <h2>{postData.title}</h2>
                            </div>

                            <div className='view-post-text'>
                                {postData.text}
                            </div>

                            <AddComment postid={postid} handleNewComment={handleNewComment}/>
                        </div>
                    </div>
                    <hr className='hr-comments'/>
                    <Comments comments={comments}/>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default ViewPost;