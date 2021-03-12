import React from "react";
import styles from "./CardBase.module.scss";
import THEME from "../../../../state/theme";

export default ({ children, animation, padding, background, dark }) => (
  <div
    className={[styles.card_base, dark && styles.dark].join(" ")}
    style={{ padding: padding && "3rem", background: background }}
  >
    <div
      className={[
        styles.rectangle,
        animation && styles.animated,
        animation === "slide-right"
          ? styles.slide_right
          : animation === "slide-left"
          ? styles.slide_left
          : animation === "slide-top"
          ? styles.slide_top
          : animation === "slide-bottom"
          ? styles.slide_bottom
          : animation === "fade"
          ? styles.fade
          : animation === "scale"
          ? styles.scale
          : null,
      ].join(" ")}
      style={{ background: THEME.color }}
    />
    {children}
  </div>
);
