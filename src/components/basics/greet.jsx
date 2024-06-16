import React from "react";

// function Greet(){
//     return <h1>Hello Karan</h1>
// }

// export const Greet = () => <h1>Hello Karan</h1> // Named Export

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// Destructing

export const GreetDestructuring = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

// Destructing

export const GreetDestructuringAnother = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
