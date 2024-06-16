# React Concepts and Components Repository

This repository contains examples of basic and advanced concepts of React, demonstrated through various components. Below is an overview of the components included in this project.

## App.js

```javascript
import React, { Component } from "react";
import "./App.css";

import {
  ReactBasics,
  Counter,
  Icons,
  Toast,
  ReactModal,
  ReactTooltip,
  IdleTimer,
  ErrorBoundary,
  Form,
  HOC,
  LifecycleMounting,
  LifecycleUpdating,
  Parent,
  Portal,
  PureComponents,
  Refs,
  ForwardRef,
  RenderProps,
  InlineStyle,
  StyleModule,
  Stylesheet,
} from "./Components";

class App extends Component {
  render() {
    return (
      <div className="main">
        <UserProvider value="Karan">
          <ComponentC />
        </UserProvider>

        <ReactBasics.Greet name="Bruce" heroName="Batman">
          <p>This is childtag</p>
          <button>Action</button>
        </ReactBasics.Greet>

        <ReactBasics.Greet name="Clark" heroName="Supername" />

        <ReactBasics.Welcome name="Bruce" heroName="Batman" />

        <ReactBasics.Message />

        <ReactBasics.UserGreeting />

        <ReactBasics.Hello />

        <ReactBasics.GreetDestructuring name="Bruce" heroName="Batman" />
        <ReactBasics.GreetDestructuringAnother name="Bruce" heroName="Batman" />
        <ReactBasics.FunctionClick />
        <ReactBasics.ClassClick />
        <ReactBasics.EventBind />
        <ReactBasics.NameList />
        <ReactBasics.FragmentDemo />

        <Counter />
        <Parent />
        <Stylesheet color="secondary" />
        <InlineStyle />
        <StyleModule />
        <Form />
        <LifecycleMounting />
        <LifecycleUpdating />
        <PureComponents />
        <Refs />
        <ForwardRef />
        <Portal />
        <ErrorBoundary />
        <HOC />
        <RenderProps />
        <Icons />
        <Toast />
        <ReactModal />
        <ReactTooltip />
        <IdleTimer />
      </div>
    );
  }
}

export default App;
```

### Components

- ReactBasics: Demonstrates basic React concepts such as greeting components, destructuring props, event handling, and more.
- Counter: A simple counter component to demonstrate state management.
- Icons: Demonstrates the usage of icons in React.
- Toast: Displays toast notifications.
- ReactModal: Shows a modal component.
- ReactTooltip: Demonstrates the usage of tooltips.
- IdleTimer: A component that tracks user inactivity.
- ErrorBoundary: Demonstrates error boundaries in React.
- Form: Shows how to create and manage forms in React.
- HOC: Demonstrates Higher Order Components.
- LifecycleMounting: Demonstrates React component lifecycle methods during mounting.
- LifecycleUpdating: Demonstrates React component lifecycle methods during updating.
- Parent: A parent component to demonstrate component interaction.
- Portal: Demonstrates the usage of React portals.
- PureComponents: Demonstrates pure components in React.
- Refs: Shows how to use refs in React.
- ForwardRef: Demonstrates the usage of forward refs.
- RenderProps: Demonstrates the render props pattern.
- InlineStyle: Demonstrates how to apply inline styles in React.
- StyleModule: Demonstrates the usage of CSS modules.
- Stylesheet: Demonstrates the usage of stylesheets.

### Usage

- Clone the repository and install the dependencies using npm install or yarn install. Then start the development server using npm start or yarn start.

### git clone [React basics to advance concepts](https://github.com/Karandumbre/react-basics-to-advance-concepts.git)

cd [React basics to advance concepts](https://github.com/Karandumbre/react-basics-to-advance-concepts.git)
npm install
npm start

### Contributing

Feel free to contribute to this repository by submitting pull requests. Please ensure that your code follows the coding standards and includes relevant tests.
