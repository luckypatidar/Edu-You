import React from "react";
import styles from "./AddressBox.module.scss";
import useHover from "../../../utilities/useHover";
import THEME from "../../../state/theme";

export default ({ icon, title, text }) => {
  const [ref, isHover] = useHover();
  return (
    <div>
      <div
        ref={ref}
        className={styles.address_box}
        style={{ background: isHover && THEME.color }}
      >
        <i className={icon} />
        <div>
          <h3>{title}</h3>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
