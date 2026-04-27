import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.blog1Inner, className].join(" ")}>
      <div className={styles.postContainerParent}>
        <div className={styles.postContainer}>
          <div className={styles.aspireNurserySchoolParent}>
            <h2 className={styles.aspireNurserySchool}>
              Aspire TVET Programme
            </h2>
          </div>
        </div>
        <div className={styles.insideTheNursery}>
          More Than a Trade: Life Skills and Entrepreneurship at the Heart of
          Aspire Rwanda's TVET.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
