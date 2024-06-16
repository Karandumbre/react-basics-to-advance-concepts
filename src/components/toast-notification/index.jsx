import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomToast({ closeToast }) {
  return (
    <div>
      Something Went Wrong
      <button onClick={closeToast}>Close</button>
    </div>
  );
}

const POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center",
};

export const Toast = () => {
  notify = () => {
    toast("Basic Notification", { position: POSITION.TOP_LEFT });

    toast.success("Success Notification", {
      position: POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Information Notification", {
      position: POSITION.BOTTOM_CENTER,
    });
    toast.warn("Warning Notification", {
      position: POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.error(<CustomToast></CustomToast>, {
      position: POSITION.BOTTOM_LEFT,
    });
    toast("Basic Notification", { position: POSITION.BOTTOM_RIGHT });
  };

  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
};
