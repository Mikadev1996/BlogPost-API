import React from "react";
import Nav from "./Nav";
// eslint-disable-next-line
import PostsListCss from './styles/PostsList.css';
import Post from "./Post";
import CreatePost from "./CreatePost";

const PostsList = () => {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <CreatePost />
                    <div className='post-list-container'>
                        <Post postid='123' />
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