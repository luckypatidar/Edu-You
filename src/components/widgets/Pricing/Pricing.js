import React from "react";
import styles from "./Pricing.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

  return (
    <Layout col="4" padding>
      <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.primary }}>
          Recent Update
        </span>
        <h2>We provide personal approach to each of our client.</h2>
      </div>
      <div className={["layout-footer", styles.footer].join(" ")}>
        <p>
          Sometimes, you might need some boilerplate or filler text in a Word document. One solution is to head over to a lorem ipsum or dummy text generator to create that text. Alternatively, you can create the text yourself directly in Word.
        </p>
      </div>
    </Layout>
  );
};
