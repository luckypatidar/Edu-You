import React from "react";
import styles from "./ModalVideo.module.scss";
import { Backdrop } from "..";
import { useCustomState } from "../../../state/state";

export default ({ children }) => {
  const [state, actions] = useCustomState();

  return (
    <div className={[styles.wrapper, state.video && styles.show].join(" ")}>
      <i onClick={() => actions.toogleVideo()} className="las la-times" />
      <div className={styles.modal}>
        <video
          src={state.data.video.about}
          controls="controls"
          type="video/mp4"
        />
      </div>
      <Backdrop />
    </div>
  );
};
