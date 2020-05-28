import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
export class Lifecycle extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps method"); // Called every time when component re render
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Lifecycle A shouldComponentUpdate method");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate method");
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Lifecycle A componentDidUpdate method");
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
