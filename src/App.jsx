import React, { Component } from "react";
import "./App.css";
import Greet from "./Components/Greet";
import { GreetDestructuring, GreetDestructuringAnother } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";

import EventBind from "./Components/EventBind";
import Parent from "./Components/parent";
import UserGreeting from "./Components/UserGreeting";

import Stylesheet from "./styles/stylesheet";
import NameList from "./Components/NameList";

import Inline from "./styles/inline";

import StyleModule from "./styles/moduleStyles/StyleModule";

import Form from "./Forms/form";
import Lifecycle from "./LifecycleMountingMethods/LifecycleA";

import LifecycleUpdating from "./LifecycleUpdatingMethods/LifecycleA";
import FragmentDemo from './Components/FragmentDemo';
import ParentPureComponent from './Components/PureComponents/Parent';
import RefsComponent from './Components/Refs/Refs';
import FRParentInput from "./Components/Refs/FRParentInput";
import PortalDemo from './Components/Portals/portalDemo';
import ParentHero from './Components/ErrorBoundaries/ParentHero';

import HOCHome from './Components/HOC/HOCHome';

import RenderPropsHome from './Components/RenderProps/RenderPropsHome';
import { UserProvider } from './context/UserContext';
import ComponentC from './context/ComponentC';
class App extends Component {
  render() {
    return (
      <div className="main">
        <UserProvider value="Karan">
          <ComponentC />
        </UserProvider>
        <Greet name="Bruce" heroName="Batman">
          <p>This is childtag</p>
          <button>Action</button>
        </Greet>
        <Greet name="Clark" heroName="Supername" />
        <Greet name="Diana" heroName="Wonder Women" />
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Supername"></Welcome>
        <Welcome name="Diana" heroName="Wonder Women"></Welcome>
        <Message></Message>
        <Counter></Counter>
        <Hello />
        <GreetDestructuring name="Bruce" heroName="Batman"></GreetDestructuring>
        <GreetDestructuringAnother
          name="Bruce"
          heroName="Batman"
        ></GreetDestructuringAnother>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <Parent></Parent>
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <Stylesheet color="secondary"></Stylesheet>
        <Inline></Inline>
        <StyleModule></StyleModule>
        <Form></Form>
        <Lifecycle></Lifecycle>
        <LifecycleUpdating></LifecycleUpdating>
        <FragmentDemo></FragmentDemo>
        <ParentPureComponent></ParentPureComponent>

        <RefsComponent></RefsComponent>
        <FRParentInput />
        <PortalDemo />
        <ParentHero />
        <HOCHome />
        <RenderPropsHome />

      </div>
    );
  }
}

export default App;
