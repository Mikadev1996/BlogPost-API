import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import PostsListCss from '../components/styles/PostsList.css';
import Post from "../components/Post";
import CreatePostBar from "../components/CreatePostBar";

const PostsList = () => {
    let nav = useNavigate();

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <CreatePostBar />
                    <div className='post-list-container'>
                        <Post postid='123'/>
                        <Post postid='456'/>
                        <Post postid='789'/>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default PostsList