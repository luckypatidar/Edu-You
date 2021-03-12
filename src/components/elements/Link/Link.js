import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

export default ({ children, url, hoverStyle, style, click, after }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={url}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={hover ? hoverStyle : style}
      onClick={click}
      className={styles.link}
      data-after={after}
    >
      {children}
    </Link>
  );
};
