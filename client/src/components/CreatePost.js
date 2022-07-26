import React from "react";
// eslint-disable-next-line
import CreatePostCss from './styles/CreatePost.css'
import Nav from "./Nav";

const CreatePost = () => {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div className='container'>
                    <div id="form-container">

                        <div className="form-header">
                            <h2>Create Post</h2>
                        </div>

                        <form method='POST' action='http://localhost:5000/api/posts'>
                            <div className="form-control">
                                <label htmlFor="title">Username</label>
                                <input type="text" placeholder="Title" id="title" name='title'/>
                                <small>Error Message</small>
                            </div>

                            <div className="form-control">
                                <label htmlFor="text">Password</label>
                                <input type="text" placeholder="Text" id="text" maxLength="16" name='text'/>
                                <small>Error Message</small>
                            </div>

                            <textarea placeholder='What are your thoughts?' />

                            <div className="form-control">
                                <input type='checkbox' />
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