import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import Post from "../components/Post";

const UserPage = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {

    }, [])

    const getProfilePosts = () => {
        fetch('http://localhost:5000/api/posts/profile')
            .then(r => r.json())
            .then(data => {
                setUserPosts(posts => [...posts, ...data.posts]);
            })
    }

    return (
        <div className='app'>
            <Nav />
            <div className="content">
                <div className="container">
                    <div className="post-list-container">
                        {userPosts.map(data => {
                            return (
                                <Post postid={data._id} title={data.title} text={data.text} user={data.user} timestamp={data.timestamp} likes={data.likes} />
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