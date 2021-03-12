import React from "react";
import styles from "./Backdrop.module.scss";
import { useCustomState } from "../../../state/state";

export default () => {
  const [state, actions] = useCustomState();

  const hideContent = () => {
    state.sidebar && actions.toogleSidebar();
    state.modal && actions.toogleModal();
    state.request.modal && actions.toogleRequest();
    state.video && actions.toogleVideo();
  };

  return <div className={styles.backdrop} onClick={hideContent} />;
};
