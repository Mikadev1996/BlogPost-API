import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostsList from "./pages/PostsList";
import ViewPost from "./pages/ViewPost";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<PostsList />} />
                <Route path='/posts/:postid' element={<ViewPost />} />
                <Route path ='/sign-in' element={<SignIn/>}/>
                <Route path ='/sign-up' element={<SignUp/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;