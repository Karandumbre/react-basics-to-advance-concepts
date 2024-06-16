import React, { Component } from "react";

export class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Karan",
    };

    console.log("Lifecycle B constructor method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps method");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle B componentDidMount method");
  }
  render() {
    console.log("Lifecycle B render method");
    return <div></div>;
  }
}
