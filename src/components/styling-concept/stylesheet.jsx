import React from "react";
import "./style.css";

export const Stylesheet = (props) => {
  let color = props.color === "primary" ? "primary" : "secondary";
  return (
    <div>
      <h1 className="primary">Stylesheet</h1>
      <h1 className={color}>Conditional Styles</h1>
      <h1 className={`${color} font-xl`}>Multiple Styles</h1>
    </div>
  );
};
