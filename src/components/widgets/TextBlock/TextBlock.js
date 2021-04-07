import React from "react";
import styles from "./TextBlock.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { Button } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const [state, actions] = useCustomState();
  return (
    <Layout col="2" padding>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <span className={styles.subtitle} style={{ color: THEME.primary }}>
            Our Goal
          </span>
          <h2>We create opportunity for those who really want to learn</h2>
          <p className={styles.paragraph}>
            Education is for all. Everyone in the world has the chance to learn whatever he wants. With this goal in mind, we all know that youtube is a great source of learning. But due to other content available on youtube focusing on learning is difficult. To solve this problem we came with a solution to organize youtube for education.
          </p>
          <p className={styles.paragraph}>
            <b>
              Uniquely innovate way of learning free.Energistically synergy whereas
              interactive schemas.
            </b>
          </p>
        </div>
      </article>
      <article className={styles.wrapper}>
        <figure className={styles.image}>
          <div
            className={styles.rectangle}
            style={{ borderColor: THEME.color }}
          >
            <div className={styles.photo}>
              <i
                onClick={() => actions.toogleVideo()}
                className="lab la-youtube"
                style={{ color: THEME.color }}
              />
              <span
                style={{
                  background:
                    "url(" +
                    state.data.header_bgs.about_video_poster +
                    ") center/cover",
                }}
              />
            </div>
          </div>
        </figure>
      </article>
    </Layout>
  );
};
