import React, { Component } from "react";
import TopNav from "../Component/Common/Topnavbar";
import CategorySlider from "../Component/Categorypage/Categoryslider";
import CategoryProductSection from "../Component/Categorypage/Categoryproductsection";
import TabComponent from "../Component/Common/Tab";
import { Interface } from "readline";

interface ProductDatastate{
    CategoryId:string;
};


class ProductDetails extends Component<{}, ProductDatastate > {
    constructor(props: {}) {
        super(props);
        this.state = {
            CategoryId: "",
        };
    }
     
    // Lifecycle method to get the productId from the URL
    componentDidMount() {
        const path = window.location.pathname;
        const pathParts = path.split("/");
        const CategoryId = pathParts[2]; // First  param(brand ID)
        

        this.setState({CategoryId});
      }
      handleTabChange = (tabName: string) => {
        console.log('Selected tab:', tabName);
      };
     render() {
        const { CategoryId } = this.state;
        return (
            <div className="main-container">
                <TopNav />
                <div className="product-con1">
                    <div className="product-left-con">
                       <img src="https://www.rustoleum.com/-/media/080E533FF1A847A08C17B6A190C68F4C.png" className="product-img"/>
                    </div>
                    <div className="product-right-con">
                        <div className="main-heading">brand Name</div>
                        <div className="main-heading pd-name">Protective Enamel Custom Spray 5-in-1</div>
                        <div className="single-two-row">
                            <div className="sub-heading">SKU#:</div>
                            <div className="sub-value">123456</div>
                        </div>
                        <div className="single-two-row">
                            <div className="sub-heading">Color Family:</div>
                            <div className="color-family-grid">
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            <img src="https://www.rustoleum.com/-/media/A783704667C647A1A5C2CDD9C888815C.png" className="single-color-fm"/>
                            </div>
                        </div>
                        <div className="single-two-row">
                            <div className="sub-heading">Sheen:</div>
                            <div className="sheen-family-grid">
                                <div className="sheen-con highlightsheen">
                                  Satin
                                </div>
                                <div className="sheen-con">
                                  Satin
                                </div>
                                <div className="sheen-con">
                                  Satin
                                </div>
                                <div className="sheen-con">
                                  Satin
                                </div>
                                <div className="sheen-con">
                                  Satin
                                </div>
                                <div className="sheen-con">
                                  Satin
                                </div>
                            </div>
                        </div>
                        <div className="single-two-row">
                            <div className="sub-heading">Size:</div>
                            <div className="sheen-con">123456</div>
                        </div>
                    </div>
                </div>
                <div className="color-family-main-pd-con">
                  <div className="color-family-heading">
                    <div className="sub-heading-1">Color Family</div>
                    <span className="line"></span>
                    <div className="pd-cl-img" style={{ backgroundImage: `url('https://www.rustoleum.com/-/media/EB1F9D6BF2694226A4DE887292A5CD84.png')` }}></div>
                    <div className="cf-name">Satin Clear</div>
                    <div className="cf-name">376883</div>
                  </div>
                  <div className="color-family-sub-pd-con">
                   <div className="cfsb-con" style={{ backgroundImage: `url('https://www.rustoleum.com/-/media/EB1F9D6BF2694226A4DE887292A5CD84.png')` }}>
                    <div className="cfsb-prod-name">prod Name</div>  
                    
                   </div>
                  </div>
                </div>
                <div className="pd-tab-container">
                <TabComponent selectedTab="Tab1" onChange={this.handleTabChange} Catid={CategoryId} />
                </div>
                
            </div>
        );
     }
}

export default ProductDetails;
