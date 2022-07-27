import React from 'react';
import Nav from "./Nav";
// eslint-disable-next-line
import FormCss from './styles/Form.css';

function SignIn() {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Sign In</h2>
                    </div>
                    <form method='POST' action='http://localhost:5000/api/users/sign-in'>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username'/>
                            <small>Error Message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" maxLength="16" name='password'/>
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