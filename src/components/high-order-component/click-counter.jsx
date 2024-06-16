import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Click {this.props.count} Times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
