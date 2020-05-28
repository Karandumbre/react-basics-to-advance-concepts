import React from "react";

function person({ person }) {
  return (
    <div>
      `I am {person.name}, my age is {person.age}, and i have {person.skill}`
    </div>
  );
}

export default person;
