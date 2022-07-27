import React, {useState} from 'react';
import Nav from "./Nav";
// eslint-disable-next-line
import FormCss from './styles/Form.css';

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: username,
            password: password
        });
        console.log(formData);
        fetch('http://localhost:5000/api/users/sign-in', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => console.log(data));
    }

    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Sign In</h2>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username'onChange={e => setUsername(e.target.value)}/>
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