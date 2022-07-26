import React, {useEffect, useState} from "react";
// eslint-disable-next-line
import CreatePostCss from '../components/styles/CreatePost.css'
import Nav from "../components/Nav";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [published, setPublished] = useState(false);
    let nav = useNavigate();

    const submitPost = (e) => {
        const token = localStorage.getItem('token');

        e.preventDefault();
        const formData = JSON.stringify({
            title: title,
            text: text,
            published: published
        })

        fetch('https://shielded-hamlet-48088.herokuapp.com/api/posts/create', {method: 'POST', body: formData, headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (!data.error) {
                    nav("/posts")
                    return;
                }
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                nav("/");
            })
            .catch(err => {
                console.log(err);
                nav("/");
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

                        <form onSubmit={submitPost} className='account-form'>
                            <div className="form-control">
                                <label htmlFor="title">Username</label>
                                <input type="text" placeholder="Title" id="title" name='title' required='true' onChange={e => setTitle(e.target.value)}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="text">Password</label>
                                <textarea placeholder="Text" id="text" maxLength="500" name='text' required='true' onChange={e => setText(e.target.value)} />
                            </div>

                            <div className="form-control form-publish">
                                Set Public?
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