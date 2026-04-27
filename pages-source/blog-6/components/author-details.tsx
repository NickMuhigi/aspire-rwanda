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
                Ms Aline Mukamana
              </h3>
            </div>
          </div>
          <div className={styles.weBelieveThatTheEarliestYWrapper}>
            <div className={styles.weBelieveThat}>
              Across Rwanda, women and girls continue to face significant
              barriers to economic participation. Cultural expectations, limited
              access to resources, and lack of confidence often hold them back
              from pursuing the skills they need to build independent
              livelihoods. At Aspire Rwanda, our TVET Programme is working to
              change that, one skill, one opportunity, and one woman at a time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
