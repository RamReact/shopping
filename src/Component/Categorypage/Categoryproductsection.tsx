import React, { Component } from "react";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";
import CategoryDatalist from '../../Assets/json/category.json';
import Productdata from '../../Assets/json/product.json';
import { productDataArray } from "../../Typescript/product";

interface props {
    Brandname: string
    BrandID: string
}
// Define the interface for the Description
interface Description {
    para: string[]; // Array of paragraphs (strings)
    outline: {
        heading: string; // Heading for the outline
        points: string[]; // Array of points (strings)
    };
}

// Define the interface for Sheen
interface Sheen {
    code: string; // Code for the sheen (string)
    name: string; // Name of the sheen (string)
}

// Define the main Product interface
interface Category {
    name: string; // Name of the product
    image: string; // Image path
    brand: string; // Brand identifier
    Description: Description; // Description object
    product: string[]; // Array of product codes
    sheen: Sheen[]; // Array of Sheen objects
    colorfamily: string[]; // Array of color family codes (strings)
}

interface CategoryData {
    [key: string]: Category; // Object where keys are dynamic product IDs
}


class CategoryProductSection extends Component<props, {}> {
    render() {
        return (
            <div>
                <Heading heading={this.props.Brandname} />
                <div className="product-list-cd">
                {Object.keys(CategoryDatalist)?.map((key) => {
    const item = (CategoryDatalist as CategoryData)[key];
    const product = item?.product;
    const productData = Productdata as productDataArray;

    // Filter the productData to get only the products that are in the products array
    const filteredProducts = product?.map(productId => productData[productId]).filter(Boolean);

    // Return the mapped products JSX
    return filteredProducts?.map((item_1, index) => {
        return (
            <div key={key} className="product-item category-con">
                <div className="pd-top-container">
                    <img src={`${process.env.REACT_APP_BaseURL}${item_1.productpreview}`} alt={item_1.colorName} className="product-img-c" />
                </div>
                <div className="pd-bottom-container">
                    <p className="productname">{item_1.colorName}</p>
                    <p className="product-description txt-ellipse">{item.Description.para?.[0]}</p>
                    <Link to={`/product/${item_1.product_id}`} className="view-details-btn">
                        <button type="button" className="text-center">View Details</button>
                    </Link>
                </div>
            </div>
        );
    });
})}

                </div>
            </div>
        );
    }
}

export default CategoryProductSection;
