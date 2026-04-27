import type { NextPage } from "next";
import styles from "./contact-form.module.css";

export type ContactFormType = {
  className?: string;
};

const ContactForm: NextPage<ContactFormType> = ({ className = "" }) => {
  return (
    <section className={[styles.contactForm, className].join(" ")}>
      <div className={styles.officeInfo}>
        <h3 className={styles.ourHeadOffice}>Our Head Office</h3>
        <div className={styles.addressKg685St}>
          Address: KG 685 St, Kigali
          <br />
          Phone Number: 0788 859 264
          <br />
          Email: aspirerwanda@gmail.com
        </div>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.nameFields}>
          <div className={styles.nameRow}>
            <div className={styles.inputField}>
              <input className={styles.fieldInput} placeholder="First Name" type="text" />
            </div>
            <div className={styles.inputField}>
              <input className={styles.fieldInput} placeholder="Last Name" type="text" />
            </div>
          </div>
          <div className={styles.inputField}>
            <input className={styles.fieldInput} placeholder="Email Address" type="text" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
