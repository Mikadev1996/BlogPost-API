import React from "react";
import Nav from "./Nav";
import {useParams} from "react-router-dom";
// eslint-disable-next-line
import ViewPostCss from './styles/ViewPost.css';
import Comments from "./Comments";

const ViewPost = () => {
    const { postid } = useParams();
    return (
        <div className='app'>
            <Nav />
            <div className='content-header'></div>
            <main className='content'>
                <div className='container view-post-container'>
                    <div className='view-post-background'>
                        <div className='view-post-content'>
                            <div className='view-post-likes-container'>Vote</div>

                            <div className='view-post-info'>
                                <p>Posted by user/SomeUser123 (Date posted)</p>
                                <div className='view-post-header'>Title</div>
                            </div>

                            <div className='view-post-text'>

                            </div>

                            <div className='add-comment-container'>

                            </div>
                        </div>
                        <Comments postid={postid}/>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default ViewPost;