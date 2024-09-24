import React, { Component } from "react";
import Heading from "../Common/Heading";
import productData from "../../Assets/json/brand.json"
import { Link } from "react-router-dom";

// Define the type for the product data
type Product = {
    name: string;
    image: string;
    Description:string;
};

// Define the type for the product collection
type ProductData = {
    [key: string]: Product;
};

class HomeproductSection extends Component<{}, {}> {
    render() {
        return (
            <div>
                {/* Heading component */}
                <Heading heading="Our Product" />

                {/* Render the brand using map */}
                <div className="product-list">
                    {Object.keys(productData).map((key) => {
                        const product = (productData as ProductData)[key];
                        return (
                            <Link to={`/category/${key}/${product.name}`}>
                            <div key={key} className="product-item">
                                <div className="pd-top-container">
                                <img src={`${process.env.REACT_APP_BaseURL}${product.image}`} alt={product.name} className="product-img" />
                                </div>
                                <div className="pd-bottom-container">
                                    <p className="productname">{product.name}</p>
                                    <p className="product-description">{product.Description}</p>
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default HomeproductSection;
