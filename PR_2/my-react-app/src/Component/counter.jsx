import React, { Component } from "react";
import "../Component/Counter3D.css";

class Counter3D extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count <= 0) {
      alert("Counter cannot go below 0");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="counter-box">
          <h1 className="title">Counter</h1>

          <div className="count">{this.state.count}</div>

          <div className="btn-group">
            <button onClick={this.handleIncrement} className="btn increment">
              Increment
            </button>
            <button onClick={this.handleReset} className="btn reset">
              Reset
            </button>
            <button onClick={this.handleDecrement} className="btn decrement">
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter3D;
