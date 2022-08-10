import React, {useState} from 'react';
import Nav from "../components/Nav";
// eslint-disable-next-line
import FormCss from '../components/styles/Form.css';
import { useNavigate } from "react-router-dom";

function SignIn() {
    let nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: username,
            password: password
        });
        fetch('https://shielded-hamlet-48088.herokuapp.com/api/users/sign-in', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                if (data.token !== undefined) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', JSON.stringify(data.token));
                    nav("/posts");
                }
                else {
                    window.alert("Error, incorrect user/password");
                }
            });
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Sign In</h2>
                    </div>
                    <form onSubmit={handleSignIn} className='account-form'>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div>
                            <button className='form-submit' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignIn;