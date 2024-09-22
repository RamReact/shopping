import React, { Component } from 'react';

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
      <div>
        <h2>Welcome, {this.state.name || 'Guest'}!</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}  // Update state on input change
        />
        <button onClick={this.callgreetings}>Greetings</button>
      </div>
    );
  }
}

export default Home;
