import React, { useState, useEffect, Fragment } from "react";
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Button, Link, Logo } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  const handleResize = () => {
    setSticky(window.pageYOffset > 200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const menu = data.map((item, index) => {
    if (!item.children) {
      return (
        <li key={index}>
          <Link url={item.url} hoverStyle={{ color: THEME.color }}>
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <span>
            <Link url={item.url} hoverStyle={{ color: THEME.color }}>
              {item.name}
            </Link>
          </span>
          <ul>
            {item.children.map((subitem, subindex) => (
              <li key={subindex}>
                <a href={subitem.url}>{subitem.name}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  });

  const header = (
    <Layout>
      <div className={styles.header}>
        <ul className={styles.menu}>{menu}</ul>
        <div className={styles.linklogo}>
          <Link url="/">
            <Logo />
          </Link>
        </div>


        {/* <div className={styles.btn_desktop}>
          <Button
            after="&#xf107;"
            type="outline-white-tw"
            hoverType="solid-white-tb"
            click={() => actions.toogleModal()}
          >
            Contact Us
          </Button>
        </div> */}

        <div
          className={styles.btn_mobile}
          onClick={() => actions.toogleSidebar()}
        >
          <Button
            after="&#xf0c9;"
            type="solid-white-tb"
            hoverType="solid-gray-tb"
          />
        </div>
      </div>
    </Layout>
  );

  return (
    <Fragment>
      <div className={styles.wrapper}>{header}</div>
      <div
        className={[
          styles.wrapper,
          sticky ? styles.sticky : styles.hidden,
        ].join(" ")}
      >
        {header}
      </div>
    </Fragment>
  );
};
