import type { NextPage } from "next";
import styles from "./message-container.module.css";

export type MessageContainerType = {
  className?: string;
};

const MessageContainer: NextPage<MessageContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.messageContainer, className].join(" ")}>
      <div className={styles.inputPair}>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneContainerChild} />
          <input
            className={styles.phoneNumber}
            placeholder="Phone Number"
            type="text"
          />
        </div>
        <div className={styles.subjectMessageParent}>
          <div className={styles.subjectMessage}>
            <div className={styles.subjectMessageChild} />
            <input
              className={styles.phoneNumber}
              placeholder="Subject "
              type="text"
            />
          </div>
          <textarea
            className={styles.messageTextarea}
            placeholder="Message"
            rows={5}
          />
        </div>
      </div>
    </section>
  );
};

export default MessageContainer;
