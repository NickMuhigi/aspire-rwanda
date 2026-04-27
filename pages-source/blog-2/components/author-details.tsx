import type { NextPage } from "next";
import styles from "./author-details.module.css";

export type AuthorDetailsType = {
  className?: string;
};

const AuthorDetails: NextPage<AuthorDetailsType> = ({ className = "" }) => {
  return (
    <section className={[styles.authorDetails, className].join(" ")}>
      <div className={styles.detailsContainer}>
        <div className={styles.authorImage} />
        <div className={styles.authorInfo}>
          <div className={styles.authorContainer}>
            <h3 className={styles.author}>Author</h3>
            <div className={styles.msOliveTuyishimireWrapper}>
              <h3 className={styles.msOliveTuyishimire}>
                Ms Olive Tuyishimire
              </h3>
            </div>
          </div>
          <div className={styles.weBelieveThatTheEarliestYWrapper}>
            <div className={styles.weBelieveThat}>
              The nursery years are foundational. Every interaction, every
              activity, and every small moment of encouragement in those early
              months shapes how a child sees the world and themselves. Our
              programme is built on this understanding, that investing in early
              childhood pays dividends for an entire lifetime.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
