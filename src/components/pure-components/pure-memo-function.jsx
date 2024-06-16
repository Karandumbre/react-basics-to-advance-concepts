import React from "react";

export const ChildPureMemoFunction = (props) => {
  console.log("/******************Pure Function Component*******************/");
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};
