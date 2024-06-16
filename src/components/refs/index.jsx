import React, { Component } from "react";
import { ClassComponentRef } from "./class-component";

export class Refs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inputRef = React.createRef();
    this.ComponentRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  focusInputRef = () => {
    this.ComponentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <ClassComponentRef ref={this.ComponentRef} />
        <button onClick={() => this.focusInputRef()}>Input Focus</button>
      </div>
    );
  }
}

export default Refs;
