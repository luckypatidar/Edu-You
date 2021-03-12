import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./InputDiscount.module.scss";
import { Button } from "../../elements";
import useWidth from "../../../utilities/useCurrentWidth";

const SERVICES = ["Construction", "Contracting", "Management"];

export default () => {
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const [email, setEmail] = useState("");

  const revealStyle = {
    opacity: "1",
    pointerEvents: "all",
  };

  const templateParams = {
    email: email,
    request: "Discount for service: " + active,
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setStatus("Incorrect email address");
      return;
    }
    setSending(true);
    emailjs
      .send("SERVICE ID", "TEMPLATE ID", templateParams, "USER ID")
      .then(
        (response) => {
          setSending(false);
          setStatus("Your message has been sent!");
        },
        (err) => {
          setSending(false);
          setStatus("Sorry. There is an error: " + err.text);
        }
      );
    setEmail("");
  };

  return (
    <form className={styles.subscribe}>
      <span className={styles.status}>{sending ? "Sending... " : status}</span>
      <div
        className={styles.select}
        style={{ fontWeight: !hidden && "600" }}
        onClick={() => setHidden(!hidden)}
      >
        <ul className={styles.list} style={!hidden ? revealStyle : null}>
          {SERVICES.map((item, index) => (
            <li onClick={() => setActive(item)} key={index}>
              {item}
            </li>
          ))}
        </ul>
        {active ? active : "Choose your service"}
      </div>
      <div className={styles.input}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <Button click={onSubmit} hoverType="solid-white-tb" before="&#xf30b;">
        {useWidth() > 992 && "Get discount"}
      </Button>
    </form>
  );
};
