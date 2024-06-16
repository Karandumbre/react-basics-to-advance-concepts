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
