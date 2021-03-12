import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";
import Logo from '../../../assets/placeholders/logo.png';

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    {/* <i className="las la-fire" /> */}
    <span className={styles.colortext}>
      {/* <Logo /> */}
      {/* <img src='../../../assets/placeholders/logo.png' alt='logo' /> */}
      Edu-You
    </span>
  </figure>
);
