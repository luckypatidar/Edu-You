import React from "react";
import styles from "./ModalForm.module.scss";
import { Backdrop, ContactForm } from "..";
import { useCustomState } from "../../../state/state";

export default () => {
  const [state, actions] = useCustomState();
  return (
    <div className={[styles.wrapper, state.modal && styles.show].join(" ")}>
      <div className={styles.modal}>
        <i onClick={() => actions.toogleModal()} className="las la-times" />
        <ContactForm />
      </div>
      <Backdrop />
    </div>
  );
};
