import React from "react";
import Nav from "./Nav";
import CreatePost from "./CreatePost";
import Post from "./Post";

const ViewPost = () => {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <h1>Post Title</h1>
                    <p>Post Text</p>
                    <div> Comments</div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default ViewPost;