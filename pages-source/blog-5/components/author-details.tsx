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
                Mr Eric Nshimiyimana
              </h3>
            </div>
          </div>
          <div className={styles.weBelieveThatTheEarliestYWrapper}>
            <div className={styles.weBelieveThat}>
              When young people join Aspire Rwanda's TVET Sponsorship Programme,
              they come seeking practical skills. What many of them discover is
              something far more valuable: a new way of thinking about
              themselves, their work, and their future. That transformation
              begins with life skills.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
