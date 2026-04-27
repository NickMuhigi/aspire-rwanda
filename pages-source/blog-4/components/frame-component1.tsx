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
          Skills for Life: How Aspire Rwanda's TVET Sponsorship Programme is
          Shaping Rwanda's Next Generation.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
