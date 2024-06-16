import React, { Component } from "react";

export class ChildClass extends Component {
  render() {
    console.log("/****************Normal Component***************/");
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
