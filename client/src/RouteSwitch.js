import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from "./components/App";
import TestSecondRouter from "./components/TestSecondRouter";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/create' element={<TestSecondRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;