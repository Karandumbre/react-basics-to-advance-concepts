import React from "react";
import { ChildPureClass } from "./pure-class";
import { ChildNormalClass } from "./normal-class";
import { ChildPureMemoFunction } from "./pure-memo-function";

export class PureComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        name: "Jay",
      });
    }, 2000);
  };
  render() {
    console.log("/******************Parent Component************************/");
    return (
      <div>
        <ChildPureClass name={this.state.name} />
        <ChildNormalClass name={this.state.name} />
        <ChildPureMemoFunction name={this.state.name}></ChildPureMemoFunction>
      </div>
    );
  }
}
