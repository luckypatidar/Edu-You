import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./RequestForm.module.scss";
import { CardButton, Backdrop } from "../../ui";
import { Spinner } from "../../elements";
import { useCustomState } from "../../../state/state";

export default ({ style }) => {
  const [state, actions] = useCustomState();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  useEffect(() => {
    setRequest(state.request.text);
  }, [state.request.text]);

  const templateParams = {
    email: email,
    request: request,
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setStatus("Incorrect email address");
      setError(true);
      return;
    }

    if (request === "") {
      setStatus("Please enter your request");
      setError(true);
      return;
    }

    setSending(true);
    emailjs
      .send("yandex", "request", templateParams, "user_uF8hjeTp0VsUn0ZMJGpee")
      .then(
        (response) => {
          setSending(false);
          setError(false);
          setStatus("Your request has been sent!");
        },
        (err) => {
          setSending(false);
          setError(true);
          setStatus("Sorry. There is an error: " + err.text);
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setRequest("");
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    <div
      className={[styles.wrapper, state.request.modal && styles.show].join(" ")}
    >
      <div className={styles.modal}>
        <i onClick={() => actions.toogleRequest()} className="las la-times" />
        <form style={style} className={styles.form}>
          {loading}
          <CardButton
            click={onSubmit}
            btn_after="&#xf107;"
            btn_text="Send message"
            btn_type="solid-color-tb"
            btn_hoverType="solid-gray-tb"
            btn_align="stretch"
            padding
          >
            <div className={styles.contact_form}>
              <span
                className={[styles.status, error && styles.error].join(" ")}
              >
                {status}
              </span>
              <h4>Send new request:</h4>
              <textarea
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                rows="10"
                placeholder="Enter your request"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address *"
              />
            </div>
          </CardButton>
        </form>
      </div>
      <Backdrop />
    </div>
  );
};
