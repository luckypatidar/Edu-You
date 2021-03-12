import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import THEME from "../../../state/theme";

const BUTTON_TYPES = {
  solid_color_tb: {
    background: THEME.color,
    borderColor: THEME.color,
    color: "#000",
  },
  solid_color_tw: {
    background: THEME.color,
    borderColor: THEME.color,
    color: "#fff",
  },
  solid_black_tw: {
    background: "rgb(40,40,50)",
    borderColor: "rgb(40,40,50)",
    color: "#fff",
  },
  solid_white_tb: {
    background: "#F8E831",
    borderColor: "#F8E831",
    color: "#000",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "40px"
  },
  solid_gray_tb: {
    background: "#e6e6e6",
    borderColor: "#e6e6e6",
    color: "#000",
  },
  outline_color_tb: {
    background: "transparent",
    borderColor: THEME.color,
    color: "#000",
  },
  outline_color_tw: {
    background: "transparent",
    borderColor: THEME.color,
    color: "#fff",
  },
  outline_black_tb: {
    background: "transparent",
    borderColor: "#000",
    color: "#000",
  },
  outline_black_tc: {
    background: "transparent",
    borderColor: "#000",
    color: THEME.color,
  },
  outline_white_tw: {
    background: "transparent",
    borderColor: "#fff",
    color: "#fff",
  },
  outline_white_tc: {
    background: "transparent",
    borderColor: "#fff",
    color: THEME.color,
  },
  outline_gray_tb: {
    background: "transparent",
    borderColor: "#e6e6e6",
    color: "#000",
  },
};

export default ({
  children,
  before,
  after,
  type = "solid-color-tb",
  hoverType = "outline-color-tb",
  round,
  small,
  click,
  to = "#",
}) => {
  const [hover, setHover] = useState(false);
  const [styleStatic, setStyleStatic] = useState(null);
  const [styleHover, setStyleHover] = useState(null);

  useEffect(() => {
    setStyleStatic(setStyle(type));
    setStyleHover(setStyle(hoverType));
  }, [type, hoverType]);

  const setStyle = (buttonState) => {
    switch (buttonState) {
      case "solid-color-tb":
        return BUTTON_TYPES.solid_color_tb;
      case "solid-color-tw":
        return BUTTON_TYPES.solid_color_tw;
      case "solid-black-tw":
        return BUTTON_TYPES.solid_black_tw;
      case "solid-white-tb":
        return BUTTON_TYPES.solid_white_tb;
      case "solid-gray-tb":
        return BUTTON_TYPES.solid_gray_tb;
      case "outline-color-tb":
        return BUTTON_TYPES.outline_color_tb;
      case "outline-color-tw":
        return BUTTON_TYPES.outline_color_tw;
      case "outline-black-tb":
        return BUTTON_TYPES.outline_black_tb;
      case "outline-black-tc":
        return BUTTON_TYPES.outline_black_tc;
      case "outline-white-tw":
        return BUTTON_TYPES.outline_white_tw;
      case "outline-white-tc":
        return BUTTON_TYPES.outline_white_tc;
      case "outline-gray-tb":
        return BUTTON_TYPES.outline_white_tb;
      default:
        return BUTTON_TYPES.solid_color_tb;
    }
  };

  return (
    <Link
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      className={[
        styles.button,
        children ? styles.text : styles.icon,
        round && styles.round,
        small && styles.small,
      ].join(" ")}
      data-after={after}
      data-before={before}
      style={hover ? styleHover : styleStatic}
      to={to}
      onClick={click}
    >
      {children}
    </Link>
  );
};
