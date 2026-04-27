import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.staff}>Staff</h2>
          </div>
        </div>
        <div className={styles.profileImagesParent}>
          <div className={styles.profileImages}>
            <div className={styles.profileImagesChild} />
            <div className={styles.profileImagesChild} />
            <div className={styles.profileImagesChild} />
          </div>
          <div className={styles.presidentDetailsParent}>
            <div className={styles.presidentDetails}>
              <h2 className={styles.peaceRuzage}>Peace Ruzage</h2>
              <h2 className={styles.presidentFounder}>President / Founder</h2>
            </div>
            <div className={styles.teacherFinanceDetails}>
              <h2 className={styles.oliveTuyishimire}>Olive Tuyishimire</h2>
              <h2 className={styles.headTeacher}>Head Teacher</h2>
            </div>
            <div className={styles.teacherFinanceDetails}>
              <h2 className={styles.oliveTuyishimire}>Olive Tuyishimire</h2>
              <h2 className={styles.presidentFounder}>Head Of Finance</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
