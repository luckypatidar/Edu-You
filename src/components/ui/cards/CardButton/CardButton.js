import React from "react";
import styles from "./CardButton.module.scss";
import { CardBase } from "../../../ui";
import { Button } from "../../../elements";

export default ({
  children,
  animation,
  padding,
  background,
  btn_before,
  btn_after,
  btn_type = "outline-color-tb",
  btn_hoverType = "solid-white-tb",
  btn_round,
  btn_text,
  btn_align,
  dark,
  to = "#",
  click,
}) => (
  <CardBase
    dark={dark}
    animation={animation}
    padding={padding}
    background={background}
  >
    <div
      className={styles.card_button}
      style={{
        alignItems:
          btn_align === "left"
            ? "flex-start"
            : btn_align === "right"
            ? "flex-end"
            : btn_align === "center"
            ? "center"
            : "stretch",
        paddingBottom: !padding && "3rem",
      }}
    >
      {children}
      <Button
        type={btn_type}
        hoverType={btn_hoverType}
        round={btn_round}
        after={btn_after}
        before={btn_before}
        to={to}
        click={click}
      >
        {btn_text}
      </Button>
    </div>
  </CardBase>
);
