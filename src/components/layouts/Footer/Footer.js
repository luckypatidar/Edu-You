import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link, Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];


  return (
    <Layout col="1" padding style={{ background: "#272d2e" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Logo dark />
          <p>
            Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potentials.
          </p>
          <div className={styles.social}>
            <i className="lab la-linkedin-in" />
            <i className="lab la-instagram" />
            <i className="lab la-facebook-f" />
            <i className="lab la-twitter" />
          </div>
        </div>


        <div className={styles.subscribe}>
          <h4>Stay updated</h4>
          <p>
            Trust us, we are always with you through out your journey!
          </p>
          {/* <Subscribe /> */}
        </div>
      </div>
      <p style={{ color: "white" }}>Copyright ©️ 2021</p>
    </Layout>
  );
};
