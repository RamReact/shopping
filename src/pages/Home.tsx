import React, { Component } from 'react';
import HomeSlider from '../Component/Home/slider';
import TopNav from '../Component/Common/Topnavbar';
import HomeproductSection from '../Component/Home/HomeproductSection';

// Define the structure of the state using an interface
interface State {
  name: string;  // The state contains a single property 'name', which is a string
}

class Home extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    // Initialize the state
    this.state = {
      name: '',  // Initial state, 'name' is an empty string
    };
  }
  callgreetings=()=>{
     alert(this.state.name)
  }
  render() {
    return (
      <div className='main-container'>
       <TopNav />
       {/* <HomeSlider /> */}
       <HomeproductSection />
      </div>
    );
  }
}

export default Home;
