import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import WebFont from 'webfontloader';
// eslint-disable-next-line
import NavCss from './styles/Nav.css';
// eslint-disable-next-line
import DarkModeToggleCss from './styles/DarkModeToggle.css';

const Nav = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false)
    WebFont.load({
        custom: {
            families: ['Voga-Medium'],
            urls:['./fonts/Voga-Medium.otf']
        }
    })

    const titleFont = {
        fontFamily: "Voga-Medium",
        fontSize: "28px"
    }

    useEffect(() => {
        handleDarkModeToggle();
    }, []);

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

    return (
        <nav>
            <div className="nav-content">
                <div className='nav-title'>
                    <Link to='/'><h1 style={titleFont}>EXPRESS-BLOG</h1></Link>
                </div>
                <div className='nav-links'>
                    <Link to='/posts'><p>Posts</p></Link>
                    <Link to='/sign-up'><p>Sign Up</p></Link>
                    <Link to='/sign-in'><p>Sign in</p></Link>
                    <Link to='http://localhost:5000/api/posts'><p>Sign out</p></Link>
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