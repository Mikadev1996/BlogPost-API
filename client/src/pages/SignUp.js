import React from 'react';
import Nav from "../components/Nav";
// eslint-disable-next-line
import FormCss from '../components/styles/Form.css';

function SignUp() {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Create Account</h2>
                    </div>
                    <form method='POST' action='https://shielded-hamlet-48088.herokuapp.com/api/users/sign-up' className='account-form'>
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

export default SignUp;