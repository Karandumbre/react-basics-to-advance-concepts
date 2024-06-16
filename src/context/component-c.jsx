import React, { Component } from "react";
import { ComponentE } from "./component-e";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
