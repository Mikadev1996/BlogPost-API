import React from 'react';
import {Link} from "react-router-dom";
// eslint-disable-next-line
import NavCss from './styles/Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-links">
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/sign-up'><p>Sign Up</p></Link>
                    <Link to='/sign-in'><p>Sign in</p></Link>
                </div>
            </div>
        </nav>
    )
}


export default Nav;