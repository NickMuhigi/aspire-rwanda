import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.impactHeaderWrapper}>
        <div className={styles.impactHeader}>
          <div className={styles.impactHeaderChild} />
          <h2 className={styles.ourImpact}>Our Impact</h2>
        </div>
      </div>
      <div className={styles.impactSummary}>
        <h1 className={styles.buildingBrighterFutures}>
          Growing Bright Minds Through <br />
          Learning, Play, and Everyday Care.
        </h1>
      </div>
      <section className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.pupilStatistics}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.statisticsValues}>
              <h1 className={styles.h1}>90+</h1>
            </div>
            <h3 className={styles.nurseryPupilsEnrolled}>
              NURSERY PUPILS ENROLLED
            </h3>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>6</h2>
            </div>
            <h3 className={styles.subjectsOfferered}>SUBJECTS OFFERERED</h3>
          </div>
        </div>
        <div className={styles.ageRangeStatistics}>
          <div className={styles.ageRangeValues}>
            <div className={styles.ageRangeValuesChild} />
            <div className={styles.ageStats}>
              <h2 className={styles.dividerStats}>3 - 5</h2>
            </div>
            <h3 className={styles.yearsAgeRange}>
              YEARS AGE RANGE OF NURSERY CHILDREN
            </h3>
          </div>
          <div className={styles.ageRangeValues2}>
            <div className={styles.ageRangeValuesItem} />
            <div className={styles.container}>
              <h2 className={styles.h22}>2</h2>
            </div>
            <h3 className={styles.dailyMealsProvided}>
              DAILY MEALS PROVIDED AT NURSERY
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent2;
