import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostsList from "./pages/PostsList";
import ViewPost from "./pages/ViewPost";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import UserPage from "./pages/UserPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<PostsList />} />
                <Route path='/posts/:postid' element={<ViewPost />} />
                <Route path='/posts/:postid/update' element={<UpdatePost />}/>
                <Route path='/posts/create' element={<CreatePost />} />
                <Route path ='/sign-in' element={<SignIn/>}/>
                <Route path ='/sign-up' element={<SignUp/>}/>
                <Route path='/profile' element={<UserPage />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;