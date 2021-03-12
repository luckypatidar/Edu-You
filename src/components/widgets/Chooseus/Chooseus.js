import React from "react";
import styles from "./Chooseus.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {

  const servicesList = data
    .map((item, index) => (
      <article key={index} className={styles.wrapper}>
        <div
          className={[styles.card, index === 1 && styles.main].join(" ")}
          style={{ borderColor: THEME.primary }}
        >
          {/* <i className={item.icon} /> */}
          <h3 style={{ color: THEME.primary }}>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </article>
    ))
    .slice(0, 3);

  return (
    <Layout
      col="3"
      padding
      style={{
        background: "rgb(240,240,240)",
      }}
    >
      <div className={["layout-header", styles.header].join(" ")}
        style={{ paddingBottom: "60px" }}
      >
        <span className="subtitle" style={{ color: THEME.primary }}>
          Why choose us
        </span>
        <h2 >We provide you best content in the world which is avaliable on youtube.</h2>
      </div>
      {servicesList}
    </Layout>
  );
};
