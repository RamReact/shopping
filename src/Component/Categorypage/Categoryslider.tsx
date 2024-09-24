import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules'; 
interface props {
    Brandname: string
}
class CategorySlider extends Component<props, {}> {
    render() {
        return (
            <div className="slider-con">
                <Swiper
                    navigation={true} // Enable arrows
                    modules={[Navigation, Autoplay]} // Add Navigation and Autoplay modules
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: SwiperType) => console.log(swiper)} // Explicitly define the type for swiper
                >
                    <SwiperSlide>
                        <div className="category-slider-con category-slider1">
                            <div className="banner-txt-container">
                                <h1 className='banner-heading-2'>{this.props.Brandname}</h1>
                                <p className="banner-para">Update your space with a fresh coat of paint or wood stain. Find Rust-Oleum paints, stains and coatings designed to transform almost any indoor or outdoor surface.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-slider-con category-slider2">
                            <div className="banner-txt-container">
                                <h1 className='banner-heading-2'>{this.props.Brandname}</h1>
                                <p className="banner-para">Update your space with a fresh coat of paint or wood stain. Find Rust-Oleum paints, stains and coatings designed to transform almost any indoor or outdoor surface.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        );
    }
}

export default CategorySlider;
