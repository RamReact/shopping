import React, { Component } from "react";
import Heading from "../Common/Heading";
import productData from "../../Assets/json/brand.json"  // Adjust the path based on your folder structure

// Define the type for the product data
type Product = {
    name: string;
    image: string;
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
                            <div key={key} className="product-item">
                                <h3>{product.name}</h3>
                                <img src={`${process.env.REACT_APP_BaseURL}${product.image}`} alt={product.name} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default HomeproductSection;
