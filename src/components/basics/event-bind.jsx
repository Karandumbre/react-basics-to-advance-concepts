// Reason we bind event handler in react is
//  Purely becasue of the way 'this' keyword works in javascript and not because how react works
import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.ClickHandler = this.ClickHandler.bind(this); // bind in Constructor, for performance
  }

  //   ClickHandler() {
  //     this.setState({
  //       message: "Good Boy"
  //     });
  //   }

  ClickHandler = () => {
    this.setState({
      message: "Good Boy",
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        {/* <button
          onClick={() => {
            this.ClickHandler();
          }}
        ></button> */}
        <button onClick={this.ClickHandler}>Click</button>
        {/** do not bind in onclick, as new handler is created on each click event */}
        {/* <button onClick={this.ClickHandler.bind(this)}></button> */}
      </div>
    );
  }
}
