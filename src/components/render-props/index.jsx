import React from "react";
import { ClickCounter } from "./click-counter";
import { HoverCounter } from "./hover-counter";
import { Users } from "./user";
import { Counter } from "./counter";

export class RenderPropsHome extends React.Component {
  render() {
    return (
      <div>
        <h5>Render Props</h5>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Users name={(isLoggedIn) => (isLoggedIn ? "Karan" : "Guest")} />
      </div>
    );
  }
}
