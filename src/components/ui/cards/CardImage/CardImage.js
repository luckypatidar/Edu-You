import React from "react";
import styles from "./CardImage.module.scss";
import THEME from "../../../../state/theme";

export default ({ children, label, image, layout = "grid" }) => (
  <div
    className={[
      styles.card,
      layout === "grid" ? styles.grid : layout === "list" ? styles.list : null
    ].join(" ")}
  >
    <div className={styles.wrapper}>
      <div
        className={styles.photo}
        style={{ background: "url(" + image + ") center/cover" }}
      />
      <figcaption style={{ background: THEME.color }}>{label}</figcaption>
      <figure style={{ background: THEME.color }} />
    </div>

    {children}
  </div>
);
