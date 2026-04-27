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
              Aspire Rwanda's TVET Sponsorship Programme was built on a simple
              but powerful conviction: that every young person, regardless of
              their background or circumstances, deserves a genuine chance to
              build a sustainable future through practical, income-generating
              skills.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
