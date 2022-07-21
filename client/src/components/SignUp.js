import React from 'react';
import Nav from "./Nav";

function SignUp() {
    return (
        <div className='app'>
            <Nav />
            <main className='content'>
                <div id="form-container">
                    <form method='POST' action='http://localhost:5000/api/users/sign-up'>
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
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignUp;