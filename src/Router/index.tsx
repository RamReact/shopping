import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        );
    }
}

export default AppRoutes;
