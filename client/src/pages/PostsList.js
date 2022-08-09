import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import PostsListCss from '../components/styles/PostsList.css';
import Post from "../components/Post";
import CreatePostBar from "../components/CreatePostBar";

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // getPosts();
    }, [])

    const getPosts = () => {
        fetch('http://localhost:5000/api/posts')
            .then(r => r.json())
            .then(data => {
                setPosts(posts => [...posts, ...data.posts]);
            })
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <CreatePostBar />
                    <div className='post-list-container'>
                        <Post postid='123' title='Test Title' text='Test Text' user='Test User' timestamp={Date.now()} likes='5' isAuthor={true} published={true}/>
                        {posts.map((data) => {
                            if (data.published) {
                                return (
                                    <Post postid={data._id} title={data.title} text={data.text} user={data.user} timestamp={data.timestamp} likes={data.likes} isAuthor={false} published={data.published}/>
                                )
                            }
                        })}
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default PostsList