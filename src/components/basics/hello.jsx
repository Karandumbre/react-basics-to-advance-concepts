import React from "react";

export const Hello = () =>
  React.createElement(
    "div",
    { id: "Hello", className: "Hello" },
    React.createElement("h1", null, "Hello Create Element")
  );
