import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.ourCoreValues}>Our Core Values</h2>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h2 className={styles.ignitingPotential}>Igniting Potential</h2>
            <div className={styles.empoweringChildrenAnd}>
              Empowering children and youth with the skills, knowledge, and
              confidence to shape their own futures.
            </div>
          </div>
          <section className={styles.frameWrapper}>
            <div className={styles.openingDoorsParent}>
              <h2 className={styles.openingDoors}>Opening Doors</h2>
              <div className={styles.championingEquityBy}>
                Championing equity by ensuring every child and young person has
                access to education and opportunities.
              </div>
            </div>
          </section>
        </div>
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default FrameComponent1;
