import React from "react";
import "./stylesheet.css";
function stylesheet(props) {
  let color = props.color === "primary" ? "primary" : "secondary";
  return (
    <div>
      <h1 className="primary">Stylesheet</h1>
      <h1 className={color}>Conditional Styles</h1>
      <h1 className={`${color} font-xl`}>Multiple Styles</h1>
    </div>
  );
}

export default stylesheet;
