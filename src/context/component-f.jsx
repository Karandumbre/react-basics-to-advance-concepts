import React, { Component } from "react";
import { UserConsumer } from "./user-context";
export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(obj) => {
          return <h1>hello {obj.name}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
