import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  sequentialIncrement() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    // this function react will combine all the setState and execute at once to increase the performance
  }

  sequentialIncrementFive() {
    this.sequentialIncrement();
    this.sequentialIncrement();
    this.sequentialIncrement();
    this.sequentialIncrement();
    this.sequentialIncrement();
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.sequentialIncrementFive()}>
          Sequential Increment
        </button>
      </div>
    );
  }
}

export default Counter;
