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
              We believe that the earliest years of a child’s life are the most
              powerful foundation for lifelong learning. Our nursery program is
              more than just a place for care, it is a vibrant, nurturing
              environment where young learners begin to explore the world,
              develop essential skills, and grow into confident individuals.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDetails;
