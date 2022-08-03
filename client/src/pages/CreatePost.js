import React, {useEffect, useState} from "react";
// eslint-disable-next-line
import CreatePostCss from '../components/styles/CreatePost.css'
import Nav from "../components/Nav";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [published, setPublished] = useState(false);
    let nav = useNavigate();

    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = () => {
        let storageUser = localStorage.getItem('user');
        let storageToken = localStorage.getItem('token');
        if (storageUser && storageToken) {
            setUser(storageUser);
            setToken(storageToken);
        }
    }

    const submitPost = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            title: title,
            text: text,
            published: published
        })

        console.log(formData);

        fetch('http://localhost:5000/api/posts/create', {method: 'POST', body: formData, headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => {
                console.log("done?")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <div id="form-container">

                        <div className="form-header">
                            <h2>Create Post</h2>
                        </div>

                        <form onSubmit={submitPost}>
                            <div className="form-control">
                                <label htmlFor="title">Username</label>
                                <input type="text" placeholder="Title" id="title" name='title' required='true' onChange={e => setTitle(e.target.value)}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="text">Password</label>
                                <textarea placeholder="Text" id="text" maxLength="500" name='text' required='true' onChange={e => setText(e.target.value)} />
                            </div>

                            <div className="form-control">
                                <input type='checkbox' id='published' name='published' onChange={e => setPublished(published => !published)} />
                            </div>

                            <div>
                                <button className='form-submit' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreatePost;