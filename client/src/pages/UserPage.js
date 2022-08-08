import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import Post from "../components/Post";
import {useNavigate} from "react-router-dom";

const UserPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    let nav = useNavigate();

    useEffect(() => {
        getProfilePosts();
    }, [])


    const getProfilePosts = () => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:5000/api/posts/profile', {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (!data.error) {
                    setUserPosts(userPosts => [...userPosts, ...data.posts]);
                    return;
                }
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                nav("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='app'>
            <Nav />
            <div className="content">
                <div className="container">
                    <div className="post-list-container">
                        {userPosts.map(data => {
                            return (
                                <Post postid={data._id} title={data.title} text={data.text} user={data.user} timestamp={data.timestamp} likes={data.likes} isAuthor={true} published={data.published}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default UserPage;