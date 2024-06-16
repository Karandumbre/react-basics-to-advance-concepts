import React, { useRef } from "react";
import IdleTimer from "react-idle-timer";

export const IdleTimerFunction = () => {
  const idleTimerRef = useRef(null);
  const onIdle = () => {
    console.log("user is idle");
  };

  return <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} />;
};
