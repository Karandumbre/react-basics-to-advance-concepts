import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false
    };
  }

  render() {
    //  1. If Else
    // if (this.state.userLoggedIn) {
    //   return <div>Welcome Karan</div>;
    // } else {
    //   return <div>Welcome Guest </div>;
    // }

    // 2.Element Variable
    // let message = "";
    // if (this.state.userLoggedIn) {
    //   message = "Welcome Karan";
    // } else {
    //   message = "Welcome Guest";
    // }
    // return <div>{message}</div>;

    // 3.Ternary Condition Operator
    // return this.state.userLoggedIn ? (
    //   <div>Welcome Karan</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 4. short Circuit Operator
    // If on else statement you dont want to execute anything
    return this.state.userLoggedIn && <div>Welcome Karan</div>;
  }
}

export default UserGreeting;
