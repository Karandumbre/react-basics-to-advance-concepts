import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
export class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Karan"
    };

    console.log("Lifecycle A constructor method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps method");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A componentDidMount method");
  }
  render() {
    console.log("Lifecycle A render method");
    return (
      <div>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default Lifecycle;
