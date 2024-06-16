import React, { PureComponent } from "react";

export class ChildClass extends PureComponent {
  render() {
    console.log("/****************Pure Component***************/");
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
