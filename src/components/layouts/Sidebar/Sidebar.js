import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { useCustomState } from "../../../state/state";
import { Button, Link, Logo } from "../../elements";
import { Backdrop } from "../../ui";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const [state, actions] = useCustomState();
  const [submenu, setSubmenu] = useState(null);

  const hover = {
    color: THEME.color,
  };

  const toogleSubmenu = (index) => {
    index === submenu ? setSubmenu(null) : setSubmenu(index);
  };

  const toogleSidebar = () => {
    actions.toogleSidebar();
    state.backdrop && actions.toogleBackdrop();
  };

  const toogleModal = () => {
    actions.toogleModal();
    actions.toogleSidebar();
  };

  const menu = data.map((item, index) => {
    if (!item.children) {
      return (
        <li key={index}>
          <Link click={toogleSidebar} url={item.url} hoverStyle={hover}>
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <span>
            <Link url="#" hoverStyle={hover} click={() => toogleSubmenu(index)}>
              {item.name}
              <i
                className={
                  submenu === index ? "las la-angle-up" : "las la-angle-down"
                }
                onClick={() => toogleSubmenu(index)}
              />
            </Link>
          </span>
          <ul
            style={{
              height:
                submenu === index ? 30 * item.children.length + "px" : "0",
            }}
          >
            {item.children.map((subitem, subindex) => (
              <li key={subindex}>
                <Link
                  click={toogleSidebar}
                  url={subitem.url}
                  hoverStyle={hover}
                >
                  {subitem.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  });

  return (
    <div className={[styles.wrapper, state.sidebar && styles.show].join(" ")}>
      <div className={styles.sidebar}>
        <div className={styles.btn_close} onClick={toogleSidebar}>
          <Button
            after="&#xf00d;"
            type="solid-white-tb"
            hoverType="solid-gray-tb"
          />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>

        <ul className={styles.menu}>{menu}</ul>
        <div className={styles.btn_contacts}>
          <Button hoverType="solid-gray-tb" click={toogleModal}>
            Get Quote
          </Button>
        </div>
      </div>
      <Backdrop />
    </div>
  );
};
