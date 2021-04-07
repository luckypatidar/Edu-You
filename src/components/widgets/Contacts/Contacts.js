import React, { Fragment } from "react";
import styles from "./Contacts.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { ContactForm } from "../../ui";
import { AddressBox, Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.primary }}>
          Send message
        </span>
        <h2>Feel free to contact us.</h2>
        <p>
          Sometimes, you might need some boilerplate or filler text in a Word document. One solution is to head over to a lorem ipsum or dummy text generator to create that text. Alternatively, you can create the text yourself directly in Word.
        </p>
      </div>
      <Layout col="4">
        <AddressBox
          icon="las la-phone"
          title="Call Us"
          text="+91 7223901492"
        />
        <AddressBox
          icon="la la-envelope-open"
          title="Mail Us"
          text="sftjeepatidar@gmail.com"
        />
        <AddressBox
          icon="la la-home"
          title="Visit Us"
          text="SVNIT Campus Surat"
        />
        <AddressBox
          icon="las la-comment"
          title="Support"
          text="Live chart 24/7"
        />
        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>

      {/* <Layout col="2">
        <div className={styles.wrapper}>
          <ContactForm style={{ border: "1px solid #eee" }} />
        </div>
      </Layout> */}
    </Fragment>
  );
};
