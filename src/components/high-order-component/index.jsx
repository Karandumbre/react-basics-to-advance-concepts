import React from "react";
import ClickCounter from "./click-counter";
import HoverCounter from "./hover-counter";

export function HOC() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
