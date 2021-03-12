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
            Company info
          </span>
          <h2>We create opportunity for new markets &amp; industries</h2>
          <p className={styles.paragraph}>
            Collaboratively synergize extensible ROI whereas turnkey e-tailers.
            Dramatically generate efficient mindshare vis-a-vis optimal
            technology. Objectively benchmark cross functional internal or
            "organic" sources without revolutionary collaboration and
            idea-sharing.
          </p>
          <p className={styles.paragraph}>
            <b>
              Uniquely innovate exceptional leadership skills whereas
              multidisciplinary paradigms. Energistically synergy whereas
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
