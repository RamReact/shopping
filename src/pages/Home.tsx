import React, { Component } from 'react';
import HomeSlider from '../Component/Home/slider';
import TopNav from '../Component/Common/Topnavbar';
import HomeproductSection from '../Component/Home/HomeproductSection';

class Home extends Component<{},{}> {
  render() {
    return (
      <div className='main-container'>
       <TopNav />
       <HomeSlider />
       <HomeproductSection />
      </div>
    );
  }
}

export default Home;
