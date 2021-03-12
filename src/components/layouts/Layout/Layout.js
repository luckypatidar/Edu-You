import React from "react";
import styles from "./Layout.module.scss";

export default ({ style, children, mode, col, padding, blur }) => {
  return (
    <div
      className={[
        styles.outer,
        mode === "dark" ? styles.dark : mode === "light" ? styles.light : null,
        padding && styles.padding,
        blur && styles.blur
      ].join(" ")}
      style={{ ...style }}
    >
      <div className={styles.inner}>
        <div
          className={[
            styles.wrapper,
            col === "2"
              ? styles.col_2
              : col === "3"
              ? styles.col_3
              : col === "4"
              ? styles.col_4
              : null
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
