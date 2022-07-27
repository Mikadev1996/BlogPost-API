import React from "react";
import Nav from "./Nav";
// eslint-disable-next-line
import PostsListCss from './styles/PostsList.css';
import Post from "./Post";
import CreatePostBar from "./CreatePostBar";

const PostsList = () => {

    const testFetch = () => {
        fetch('http://localhost:5000/api/users/current-user')
            .then(r => r.json())
            .then(data => console.log(data))
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <CreatePostBar />
                    <button onClick={testFetch}>Test Fetch</button>
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