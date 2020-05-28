import React from "react";
import styles from "./style.module.css";
import "./style.css";

function StyleModule() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default StyleModule;
