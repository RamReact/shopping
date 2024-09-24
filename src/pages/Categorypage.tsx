import React, { Component } from "react";
import TopNav from "../Component/Common/Topnavbar";
import CategorySlider from "../Component/Categorypage/Categoryslider";
import CategoryProductSection from "../Component/Categorypage/Categoryproductsection";
type CategoryListState = {
    brandId:string;
    brandName: string;
};

class CategoryList extends Component<{}, CategoryListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            brandId: "",
            brandName:""
        };
    }

    // Lifecycle method to get the productId from the URL
    componentDidMount() {
        const path = window.location.pathname;
        const pathParts = path.split("/");
        const brandId = pathParts[2]; // First  param(brand ID)
        const brandName= decodeURIComponent(pathParts[3]); // Second param (brand name)

        this.setState({brandId,brandName });
      }

     render() {
        const { brandId,brandName } = this.state;

        return (
            <div className="main-container">
                <TopNav />
                <CategorySlider Brandname={brandName} />
                <CategoryProductSection Brandname={brandName} BrandID={brandId} />

            </div>
        );
     }
}

export default CategoryList;
