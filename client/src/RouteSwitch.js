import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path ='/sign-in' element={<SignIn/>}/>
                <Route path ='/sign-up' element={<SignUp/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;