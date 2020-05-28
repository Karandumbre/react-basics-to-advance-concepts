import React, { Component } from "react";

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      skill: "React"
    };
    this.UserNameInput = React.createRef();
  }

  changeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  changeSkill = event => {
    this.setState({
      skill: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  componentDidMount() {
    this.UserNameInput.current.focus()
  }
  render() {
    return (
      <div>
        Form Component
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="Username"></label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUsername} ref={this.UserNameInput}
          />

          <select value={this.state.skill} onChange={this.changeSkill}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>

          <p>
            {this.state.username} {this.state.skill}
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default form;
