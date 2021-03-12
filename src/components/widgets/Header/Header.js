import React from "react";
import styles from "./Header.module.scss";
import Layout from "../../layouts/Layout/Layout";

export default ({ children, img }) => {
  return (
    <Layout
      style={{
        background: "url(" + img + ") center/cover"
      }}
      col="1"
      mode="dark"
    >
      <div className={styles.header}>
        <h1>{children}</h1>
      </div>
    </Layout>
  );
};
