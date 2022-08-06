import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import WebFont from 'webfontloader';
// eslint-disable-next-line
import NavCss from './styles/Nav.css';
// eslint-disable-next-line
import DarkModeToggleCss from './styles/DarkModeToggle.css';

const Nav = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false)
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");

    let nav = useNavigate();

    useEffect(() => {
        handleUser();
    }, []);

    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Voga-Medium'],
                urls:['./fonts/Voga-Medium.otf']
            }
        })
        handleDarkModeToggle();
    });

    const titleFont = {
        fontFamily: "Voga-Medium",
        fontSize: "28px"
    }

    const handleDarkModeToggle = () => {
        let toggle = document.getElementById("theme-toggle");

        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
        }

        localStorage.getItem('theme') === 'light' ? setDarkModeEnabled(false) : setDarkModeEnabled(true);

        toggle.onclick = () => {
            setDarkModeEnabled(darkModeEnabled => !darkModeEnabled);
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };
    }

    const handleSignOut = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/api/users/sign-out', {method: 'POST'})
            .then(r => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                setUser("");
                setToken("");
                nav("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleUser = () => {
        let storageUser = localStorage.getItem('user');
        let storageToken = localStorage.getItem('token');
        if (storageUser && storageToken) {
            setUser(storageUser);
            setToken(storageToken);
        }
    }

    return (
        <nav>
            <div className="nav-content">
                <div className='nav-title'>
                    <Link to='/'><h1 style={titleFont}>EXPRESS-BLOG</h1></Link>
                </div>
                <div className='nav-links'>
                    <Link to='/posts'><p>Posts</p></Link>
                    {!token && <Link to='/sign-up'><p>Sign Up</p></Link>}
                    {!token && <Link to='/sign-in'><p>Sign in</p></Link>}
                    {token && <button onClick={handleSignOut}>Sign Out</button>}
                    {token && <Link to='/profile'><p>Your Profile</p></Link>}
                </div>
                <div id='dark-mode-container'>
                    <p>Dark Mode</p>
                    <label className="switch" >
                        <input type="checkbox" id='theme-toggle' checked={darkModeEnabled}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </nav>
    )
}


export default Nav;