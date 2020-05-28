import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Hello Karan");
  }
  return (
    <div>
      {/* we want handler to a function and not a function call */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
