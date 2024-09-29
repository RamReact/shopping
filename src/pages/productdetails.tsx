import React, { Component } from "react";
import TopNav from "../Component/Common/Topnavbar";
import TabComponent from "../Component/Common/Tab";
import Productdata from '../Assets/json/product.json';
import categorydata from '../Assets/json/category.json';
import { Product, productDataArray } from "../Typescript/product";
import { CategoryDataArray, CategoryItem } from "../Typescript/category";
import Branddataitem from '../Assets/json/brand.json';
import { branddata, BrandDataArray } from "../Typescript/Brand";
import { colorfamilydata, colorfamilydataarray } from "../Typescript/ColorFamily";
import colorfamily from '../Assets/json/colorfamily.json';
import { IoMdCloseCircle } from "react-icons/io";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { IoCloseCircleSharp } from "react-icons/io5";
interface ProductDatastate {
  ProductId: string;
  CategoryId: string;
  activeproduct: Product;
  activecategory: CategoryItem;
  activebrand: branddata;
  activecolorfamily: colorfamilydata;
  modalOpen: boolean; // State to manage modal visibility
}

class ProductDetails extends Component<{}, ProductDatastate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ProductId: "",
      CategoryId: "",
      activeproduct: {
        product_id: '',
        productpreview: '',
        colorpreview: '',
        sheen: [],
        Size: '',
        colormode: '',
        colorFamily: '',
        upcnumber: '',
        pdf: [],
        category: '',
        colorName: '',
        colorName2: '',
      },
      activecategory: {
        product: [],
        name: "",
        image: "",
        brand: "",
        Description: {
          para: [],
          outline: {
            heading: '',
            points: [],
          }
        },
        sheen: [],
        colorfamily: [],
      },
      activebrand: {
        name: '',
        image: '',
        Description: ''
      },
      activecolorfamily: {
        preview: '',
      },
      modalOpen: false, // Initialize modal state
    };
  }

  // Lifecycle method to get the productId from the URL
  componentDidMount() {
    const path = window.location.pathname;
    const pathParts = path.split("/");
    const ProductId = pathParts[2]; // First param (product ID)
    this.setState({ ProductId });

    // Get product, category, brand, and color family data
    const productdata = (Productdata as productDataArray)[ProductId];
    const categorydataitem = (categorydata as CategoryDataArray)[productdata?.category];
    const branditem = (Branddataitem as BrandDataArray)[categorydataitem?.brand];
    const colorfamilyitem = (colorfamily as colorfamilydataarray)[productdata?.colorFamily];

    this.setState({
      CategoryId: productdata?.category,
      activeproduct: productdata,
      activecategory: categorydataitem,
      activebrand: branditem,
      activecolorfamily: colorfamilyitem
    });
  }

  handleTabChange = (tabName: string) => {
    console.log('Selected tab:', tabName);
  };

  findFirstProductByColorFamily = (data: productDataArray, colorFamily: string) => {
    for (const key in data) {
      if (data[key].colorFamily === colorFamily) {
        return data[key];
      }
    }
    return null;
  };

  activatecolorfamily = (color: string) => {
    const firstMatchingProduct = this.findFirstProductByColorFamily(Productdata, color);
    if (firstMatchingProduct != null) {
      this.setState({ activeproduct: firstMatchingProduct });
    }
  };

  activateproduct = (id: string) => {
    const selectedProduct = (Productdata as productDataArray)[id];
    if (selectedProduct != null) {
      this.setState({ activeproduct: selectedProduct });
    }
  };

  // Functions to handle modal open/close
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { ProductId, CategoryId, activeproduct, activecategory, activebrand, activecolorfamily, modalOpen } = this.state;

    return (
      <div className="main-container">
        <TopNav />
        <div className="product-con1">
          <div className="product-left-con" onClick={this.handleOpen}>
            <img src={`${process.env.REACT_APP_BaseURL}${activeproduct?.productpreview}`} className="product-img" alt="Product Preview" />
          </div>
          <div className="product-right-con">
            <div className="main-heading">{activebrand?.name}</div>
            <div className="main-heading pd-name">{activecategory?.name}</div>
            <div className="single-two-row">
              <div className="sub-heading">SKU#:</div>
              <div className="sub-value">{activeproduct?.product_id}</div>
            </div>
            <div className="single-two-row">
              <div className="sub-heading">Color Family:</div>
              <div className="color-family-grid">
                {activecategory?.colorfamily?.length > 0 && activecategory.colorfamily.map((data, index) => {
                  const getcolordata = (colorfamily as colorfamilydataarray)[data];
                  return (
                    <div
                      onClick={() => { this.activatecolorfamily(data) }}
                      key={index}
                      className={data === activeproduct?.colorFamily ? 'active' : 'no-active'}
                      style={{ position: 'relative' }}
                    >
                      {data === activeproduct?.colorFamily && (
                        <IoMdCloseCircle className="close-btn" />
                      )}
                      <img
                        src={`${process.env.REACT_APP_BaseURL}${getcolordata.preview}`}
                        className="single-color-fm"
                        alt="Color Family"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="single-two-row">
              <div className="sub-heading">Sheen:</div>
              <div className="sheen-family-grid">
                {activecategory?.sheen?.length > 0 &&
                  activecategory.sheen.map((data, index) => {
                    const isHighlighted = activeproduct?.sheen?.includes(data.code);
                    return (
                      <div
                        key={index}
                        className={`sheen-con ${isHighlighted ? 'highlightsheen' : ''}`}
                      >
                        {data.name}
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="single-two-row">
              <div className="sub-heading">Size:</div>
              <div className="sheen-con">{activeproduct?.Size}</div>
            </div>
          </div>
        </div>

        <div className="color-family-main-pd-con">
          <div className="color-family-heading">
            <div className="sub-heading-1">Color Family</div>
            <span className="line"></span>
            <div className="pd-cl-img" style={{ backgroundImage: `url('${process.env.REACT_APP_BaseURL}${activeproduct?.colorpreview}')` }}></div>
            <div className="cf-name">{activeproduct?.colorName2}</div>
            <div className="cf-name">{activeproduct?.product_id}</div>
          </div>
          <div className="color-family-sub-pd-con">
            {Object.values(Productdata).map((product) => {
              if (product.colorFamily === activeproduct?.colorFamily) {
                return (
                  <div 
                    onClick={() => { this.activateproduct(product.product_id) }}
                    key={product.product_id}
                    className={`${activeproduct?.product_id === product.product_id ? 'active-pd' : 'non-activepd'}`}
                  >
                    <div
                      className="cfsb-con"
                      style={{ backgroundImage: `url('${process.env.REACT_APP_BaseURL}${product?.colorpreview}')` }}
                    >
                      <div className="cfsb-prod-name">{product?.colorName2}</div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="pd-tab-container">
          <TabComponent selectedTab="Tab1" onChange={this.handleTabChange} Catid={CategoryId} />
        </div>
        <Modal open={modalOpen} onClose={this.handleClose} center
        closeIcon={<IoCloseCircleSharp className="popup-close" />}>
        <img src={`${process.env.REACT_APP_BaseURL}${activeproduct?.productpreview}`} className="product-img" alt="Product Preview" />
      </Modal>
        
      </div>
    );
  }
}

export default ProductDetails;
