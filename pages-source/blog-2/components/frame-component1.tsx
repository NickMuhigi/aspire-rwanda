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
              Aspire Nursery School
            </h2>
          </div>
        </div>
        <div className={styles.insideTheNursery}>
          The First Steps Matter: Building Lifelong Confidence Through Early
          Education at Aspire Rwanda.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
