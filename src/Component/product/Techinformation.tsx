import React, { Component } from "react";
import Techcategorydataitem from '../../Assets/json/Techcategory.json';
import CategoryData from '../../Assets/json/category.json';
import { TechCategoryDataArray } from "../../Typescript/TechCategory";
import { HiOutlineExternalLink } from "react-icons/hi";
import TechInfoTable from "./TechinfoTable";
import { CategoryDataArray } from "../../Typescript/category";
import Productdata from '../../Assets/json/product.json';
import { productDataArray } from "../../Typescript/product";

interface Techinfoprops {
    catId: string;
}

interface TechinfoState {
    data: any;
}

class TechInformation extends Component<Techinfoprops, TechinfoState> {
    constructor(props: Techinfoprops) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.setState({ data: this.processTechinfodata() });
    }

    processTechinfodata = () => {
        const categoryData = (CategoryData as CategoryDataArray)[this.props.catId];
        const products = categoryData?.product;
        const productData = Productdata as productDataArray;

        // Filter the productData to get only the products that are in the products array
        const filteredProducts = products?.map(productId => productData[productId]).filter(Boolean); // filter(Boolean) removes any undefined values

        return filteredProducts;
    };

    render() {
        const TechcategoryDatalist = Object.values(Techcategorydataitem as TechCategoryDataArray).find(
            (techCategory) => techCategory.category === this.props.catId
        );

        return (
            <div className="techinfo-container">
                <div className="techinfo-sec1">
                    <div className="tech-info-heading">Technical Information</div>

                    <div className="pdflistpoints">
                        {
                            TechcategoryDatalist && TechcategoryDatalist?.commonpdflist?.map((data, item) => {
                                return (
                                    <div className="pdflist-container" key={item}>
                                        <a className="pdflist-link" target="_blank" href={`${process.env.REACT_APP_BaseURL}${data.link}`}>
                                            {data.name}
                                        </a>
                                        <HiOutlineExternalLink className="pdflist-icon" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="tech-table-con">
                        <TechInfoTable data={this.state.data} /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default TechInformation;
