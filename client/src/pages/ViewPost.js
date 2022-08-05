import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import {useParams} from "react-router-dom";
import moment from "moment";
// eslint-disable-next-line
import ViewPostCss from '../components/styles/ViewPost.css';
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";

const ViewPost = () => {
    const { postid } = useParams();
    const [postData, setPostData] = useState({
        title: "",
        text: "",
        user: {
            _id: "",
            username: "",
        },
        timestamp: "",
    });
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        fetch(`http://localhost:5000/api/posts/${postid}`)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                console.log("----")
                setPostData(data.post)
                setComments(data.comments)
            })
            .catch(err => console.log(err));
    }

    const handleNewComment = (comment) => {
        setComments(comments => [comment, ...comments])
    }


    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='view-post-content-header'></div>
                <div className='view-post-container'>
                    <div className='view-post-content'>
                        <div className='view-post-likes-container'>Vote</div>

                        <div className='view-post-info'>
                            <div className='post-header'>
                                <p>Posted by user/{postData.user.username} {moment(postData.timestamp).format('DD/MM/YYYY')}</p>
                                <h2>{postData.title}</h2>
                            </div>

                            <div className='view-post-text'>
                                {postData.text}
                            </div>

                            <AddComment />
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