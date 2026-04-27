import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component111.module.css";

export type FrameComponent111Type = {
  className?: string;
};

const FrameComponent111: NextPage<FrameComponent111Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.cardsContainerWrapper, className].join(" ")}>
      <div className={styles.cardsContainer}>
        <section className={styles.cardsWrapper}>
          <div className={styles.missionHeader}>
            <h1 className={styles.ourMission}>Our Mission:</h1>
            <div className={styles.toCreateOpportunities}>
              To empower children and youth from poor families through educational <br />
              programmes needed to create lasting positive change for themselves.
            </div>
          </div>
        </section>
        <section className={styles.empowermentCard}>
          <div className={styles.empowermentCardChild} />
          <div className={styles.innerEmpowerment}>
            <div className={styles.youthCard}>
              <h2 className={styles.youthEmpowerment}>Youth Empowerment</h2>
              <div className={styles.youthCardInner}>
                <Image
                  className={styles.frameChild}
                  width={36}
                  height={14.7}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue.svg"
                />
              </div>
            </div>
            <div className={styles.supportingDisadvantagedYouth}>
              Sponsoring highschool dropouts from poor <br />
              families through vocational skills training.
            </div>
          </div>
          <div className={styles.innerLearning}>
            <div className={styles.learningHeader}>
              <h2 className={styles.earlyLearning}>Aspire Pre-School</h2>
              <div className={styles.youthCardInner}>
                <Image
                  className={styles.frameChild}
                  width={36}
                  height={14.7}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue.svg"
                />
              </div>
            </div>
            <div
              className={styles.aNurturingEnvironment}
            >{`A nurturing environment where children`}<br />{`from poor families learn and grow`}</div>
          </div>
          <div className={styles.innerCommunity}>
            <div className={styles.communityHeader}>
              <h2 className={styles.communityGrowth}>Community Growth</h2>
              <div className={styles.youthCardInner}>
                <Image
                  className={styles.frameChild}
                  width={36}
                  height={14.7}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue.svg"
                />
              </div>
            </div>
            <div className={styles.supportingDisadvantagedYouth}>
              Helping children and youth unlock their potential and build better futures.
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent111;
