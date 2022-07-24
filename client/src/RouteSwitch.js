import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PostsList from "./components/PostsList";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<PostsList />} />
                <Route path ='/sign-in' element={<SignIn/>}/>
                <Route path ='/sign-up' element={<SignUp/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;