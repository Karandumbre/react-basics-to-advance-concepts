import React, { Component } from "react";
import ComponentF from "./component-f";
import UserContext from "./user-context";
export class ComponentE extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <ComponentF />
      </div>
    );
  }
}
ComponentE.contextType = UserContext;
export default ComponentE;
