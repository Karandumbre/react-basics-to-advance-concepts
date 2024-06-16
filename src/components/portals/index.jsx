import React from "react";
import { createPortal } from "react-dom";

export const Portal = () => {
  return createPortal(
    <div>
      <h1>Portals Demo</h1>
    </div>,
    document.getElementById("portal-root")
  );
};
