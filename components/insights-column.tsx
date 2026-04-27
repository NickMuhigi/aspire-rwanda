import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component";
import styles from "./insights-column.module.css";

export type InsightsColumnType = {
  className?: string;
};

const InsightsColumn: NextPage<InsightsColumnType> = ({ className = "" }) => {
  return (
    <section className={[styles.insightsColumn, className].join(" ")}>
      <div className={styles.keyTraits}>
        <div className={styles.keyTraitsChild} />
        <section className={styles.keyCharacteristics}>
          <div className={styles.insightsBox}>
            <div className={styles.insightsBoxChild} />
            <h2 className={styles.keyInsights}>Key Insights</h2>
          </div>
          <h2 className={styles.theHeartOf}>
            The Heart of Aspire Rwanda:<br />
            Qualities Driving Change and Impact
          </h2>
        </section>
        <section className={styles.insightComponents}>
          <div className={styles.dataContent}>
            <div className={styles.detailContainer}>
              <div className={styles.overlayContent}>
                <div className={styles.overlayContentInner}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <Image
                      className={styles.frameItem}
                      loading="lazy"
                      width={52}
                      height={46}
                      sizes="100vw"
                      alt=""
                      src="/Overall-Design.svg"
                    />
                  </div>
                </div>
                <div className={styles.contentSummary}>
                  <h2 className={styles.empoweringYouthAnd}>
                    Empowering Youth and Children
                  </h2>
                  <div
                    className={styles.weEquipYoung}
                  >{`We equip young people with skills & opportunities to create change.`}</div>
                </div>
              </div>
              <div className={styles.changeLayout}>
                <div className={styles.changeArea}>
                  <div className={styles.changeCore}>
                    <div
                      className={`${styles.rectangleParent} ${styles.rectangleParentFixed}`}
                    >
                      <div className={styles.frameChild} />
                      <Image
                        className={`${styles.frameItem} ${styles.frameItemReduced}`}
                        loading="lazy"
                        width={27}
                        height={22}
                        sizes="100vw"
                        alt=""
                        src="/Group 43.png"
                      />
                    </div>
                  </div>
                  <div className={styles.creatingChangeThatLastsParent}>
                    <h2 className={styles.creatingChangeThat}>
                      Creating Change That Lasts
                    </h2>
                    <div className={styles.programFocuseOn}>
                      Programs focused on delivering measurable, sustainable
                      results.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <FrameComponent
                programsThatLeaveNoOneBehind="Programs That Leave No One Behind"
                initiativesReachVulnerable={`Initiatives reach vulnerable & marginalized groups, ensuring support.`}
              />
              <FrameComponent
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                frameDivWidth="536px"
                communityAreaMinWidth="295px"
                programsThatLeaveNoOneBehind="Solutions Built with Communities at the Core"
                programsThatLeaveWidth="429px"
                initiativesReachVulnerable="We design initiatives that are relevant to address challenges."
                iconSrc="/Group 44.png"
                useReducedIcon
                useFixedIconContainer
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InsightsColumn;
