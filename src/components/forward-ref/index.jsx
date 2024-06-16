import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

export class ForwardRefComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inputRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardRef ref={this.inputRef} />
        <button onClick={this.clickHandler}>Forward Input</button>
      </div>
    );
  }
}
