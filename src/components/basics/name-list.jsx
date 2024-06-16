import React, { Component } from "react";

let persons = [
  {
    id: 1,
    name: "Bruce",
    age: "35",
    skill: "React",
  },
  {
    id: 2,
    name: "Diana",
    age: "30",
    skill: "Angular",
  },
  {
    id: 3,
    name: "Clark",
    age: "40",
    skill: "Vue",
  },
];

function Person({ person }) {
  return (
    <div>
      `I am {person.name}, my age is {person.age}, and i have {person.skill}`
    </div>
  );
}

export class NameList extends Component {
  render() {
    const names = ["Bruce", "Diana", "Clark"];
    const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);

    const personList = persons.map(
      (person) =>
        `I am ${person.name}, my age is ${person.age}, and i have ${person.skill}`
    );

    const personComponent = persons.map((person, index) => (
      <Person key={index} person={person}></Person>
    ));
    return (
      <div>
        <div>{nameList}</div>
        <h4>{personList}</h4>
        <h4>{personComponent}</h4>
      </div>
    );
  }
}
