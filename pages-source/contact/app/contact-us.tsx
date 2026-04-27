import type { NextPage } from "next";
import Page from "../components/page2";
import ContactFormClient from "../components/contact-form-client";
import GroupComponent from "../components/group-component";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.contactUs}>
      <Page />
      <main className={styles.contactHeadingContainerParent}>
        <div className={styles.impactOverAll}>
          <div className={styles.impactOverAllChild} />
          <h2 className={styles.statistics}>Contact Us</h2>
        </div>
        <div className={styles.contactContent}>
          <div className={styles.contactBlurbContainer}>
            <div className={styles.wedLoveTo}>
              We'd love to hear from you, reach out to us with <br />
              questions, ideas, or partnership opportunities!
            </div>
          </div>
          <hr className={styles.contactDivider} />
          <ContactFormClient />
        </div>
      </main>
      <GroupComponent />
    </div>
  );
};

export default ContactUs;
