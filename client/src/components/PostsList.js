import React from "react";
import Nav from "./Nav";
// eslint-disable-next-line
import PostsListCss from './styles/PostsList.css';
import Post from "./Post";

const PostsList = () => {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <div className='create-post-bar'>
                        <div className='create-post-profile-pic'>

                        </div>
                        <div className='create-post-main'>

                        </div>
                    </div>
                    <div className='post-list-container'>
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default PostsList