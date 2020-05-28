import React, { Component } from "react";

export default class Welcome extends Component {
  render = () => {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>
          Hello {this.props.name} a.k.a {this.props.heroName}
        </h1>
        <h2>
          {name}
          {heroName}
        </h2>
      </div>
    );
  };
}
