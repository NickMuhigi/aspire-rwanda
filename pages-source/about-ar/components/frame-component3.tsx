import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.lineParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <section className={styles.frameWrapper}>
        <div className={styles.growingBrillianceParent}>
          <h2 className={styles.growingBrilliance}>Growing Brilliance</h2>
          <div className={styles.fosteringGrowthThrough}>
            Fostering growth through personal, educational, and professional
            development at every stage of life.
          </div>
        </div>
      </section>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <h2 className={styles.strongerTogether}>Stronger Together</h2>
        <div className={styles.believingInCollaboration}>
          Believing in collaboration to work with families, communities, and
          partners for lasting impact.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
