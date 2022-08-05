import React, {useState} from "react";
import Nav from "../components/Nav";
import {useParams} from "react-router-dom";
// eslint-disable-next-line
import ViewPostCss from '../components/styles/ViewPost.css';
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";

const ViewPost = () => {
    const { postid } = useParams();
    const [postData, setPostData] = useState([]);
    const [comments, setComments] = useState([]);
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
                                <p>Posted by user/SomeUser123 (Date posted)</p>
                                <h2>Post Title</h2>
                            </div>

                            <div className='view-post-text'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate, distinctio ducimus ea earum hic, incidunt itaque iure laboriosam laudantium magnam nam optio placeat possimus qui saepe sequi tempora voluptate.
                            </div>

                            <AddComment />
                        </div>
                    </div>
                    <hr className='hr-comments'/>
                    <Comments postid={postid}/>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default ViewPost;