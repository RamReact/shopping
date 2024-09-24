import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CategoryList from '../pages/Categorypage';
import ProductDetails from '../pages/productdetails';

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/category/:brandId/:brand' element={<CategoryList />} />
                <Route path='/product/:catId' element={<ProductDetails />} />
            </Routes>
        );
    }
}

export default AppRoutes;
