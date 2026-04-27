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
              True development in early childhood cannot happen in isolation. At
              Aspire Rwanda, we believe that a child's wellbeing is deeply
              connected to the stability and support of their family. That is
              why our nursery programme extends its reach far beyond the
              classroom walls.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
