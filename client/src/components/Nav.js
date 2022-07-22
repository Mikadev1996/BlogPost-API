import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import WebFont from 'webfontloader';
// eslint-disable-next-line
import NavCss from './styles/Nav.css';

const Nav = () => {
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
        let toggle = document.getElementById("theme-toggle");

        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
        }

            toggle.onclick = () => {
            console.log("test ", storedTheme);
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };
    }, []);



    return (
        <nav>
            <div className="nav-content">
                <div className='nav-title'>
                    <h1 style={titleFont}>EXPRESS-BLOG</h1>
                </div>
                <div className='nav-links'>
                    <Link to='/posts'><p>Posts</p></Link>
                    <Link to='/sign-up'><p>Sign Up</p></Link>
                    <Link to='/sign-in'><p>Sign in</p></Link>
                </div>
                <div>
                    <button id="theme-toggle">Toggle Theme</button>
                </div>
            </div>
        </nav>
    )
}


export default Nav;