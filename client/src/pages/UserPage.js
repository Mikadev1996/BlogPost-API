import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import Post from "../components/Post";

const UserPage = () => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getProfilePosts();
    }, [])


    const getProfilePosts = () => {
        fetch('http://localhost:5000/api/posts/profile', {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`}})
            .then(r => r.json())
            .then(data => {
                setUserPosts(prevState => [...prevState, data.posts]);
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
                                <Post postid={data._id} title={data.title} text={data.text} user={data.user} timestamp={data.timestamp} likes={data.likes} isAuthor={false} published={data.published}/>
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