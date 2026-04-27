import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.impactMetrics}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <h2 className={styles.ourImpact}>Our Impact</h2>
        </div>
      </div>
      <div className={styles.buildingBrighterFuturesThroWrapper}>
        <h1
          className={styles.buildingBrighterFutures}
        >{`Building Brighter Futures Through Educational & Mentorship Opportunities.`}</h1>
      </div>
      <section className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.partnerStatistics}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.emptyValuesWrapper}>
              <h1 className={styles.emptyValues}>6</h1>
            </div>
            <h3 className={styles.schoolsPartneredWith}>
              SCHOOLS PARTNERED WITH
            </h3>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>250+</h2>
            </div>
            <h3
              className={styles.youthSupportedThrough}
            >{`YOUTH SUPPORTED THROUGH TVET `}</h3>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild3} />
            <div className={styles.container}>
              <h2 className={styles.h22}>95%</h2>
            </div>
            <h3 className={styles.studentEmploymentRate}>
              STUDENT EMPLOYMENT RATE
            </h3>
          </div>
        </div>
        <div className={styles.partnerStatistics}>
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild4} />
            <div className={styles.semicolonWrapper}>
              <h2 className={styles.semicolon}>12+</h2>
            </div>
            <h3 className={styles.tradesInThe}>TRADES IN THE TVET PROGRAM</h3>
          </div>
          <div className={styles.rectangleParent5}>
            <div className={styles.frameChild5} />
            <div className={styles.frame}>
              <h2 className={styles.h23}>100%</h2>
            </div>
            <h3 className={styles.ofSupportedYouth}>
              OF SUPPORTED YOUTH RECEIVE MENTORSHIP
            </h3>
          </div>
          <div className={styles.rectangleParent6}>
            <div className={styles.frameChild6} />
            <div className={styles.emptyParent}>
              <h2 className={styles.empty}>60:40</h2>
              <div className={styles.boyToGirlRatioWrapper}>
                <h3 className={styles.boyToGirl}>BOY TO GIRL RATIO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent2;
