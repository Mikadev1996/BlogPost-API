import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from "./components/App";
import TestSecondRouter from "./components/TestSecondRouter";
import NotFound from "./components/NotFound";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path ='/sign-in' element={<SignIn/>}/>
                <Route path ='/sign-up' element={<SignUp/>}/>
                <Route path='/create' element={<TestSecondRouter />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;