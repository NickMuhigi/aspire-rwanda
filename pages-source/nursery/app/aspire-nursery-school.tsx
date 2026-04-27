import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/header";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component4";
import GroupComponent from "../components/group-component";
import styles from "./aspire-nursery-school.module.css";

const AspireNurserySchool: NextPage = () => {
  return (
    <div className={styles.aspireNurserySchool}>
      <Header />
      <Image
        className={styles.aspireNurserySchoolChild}
        width={1440}
        height={668}
        sizes="100vw"
        alt=""
        src="/602caa5a97eb4428ab65ede9ac99aaf6.png"
      />
      <section className={styles.titleContentWrapper}>
        <div className={styles.titleContent}>
          <div className={styles.titleAspire}>
            <div className={styles.schoolTitle}>
              <div className={styles.schoolTitleChild} />
              <h2 className={styles.aspireNurserySchool2}>
                Aspire Nursery School
              </h2>
            </div>
            <div className={styles.atAspireRwanda}>
              At Aspire Rwanda, our work is rooted in a deep belief in the
              potential of every child.
            </div>
          </div>
          <div className={styles.weAreCommittedToCreatingAWrapper}>
            <div className={styles.weAreCommitted}>
              We are committed to creating a safe, nurturing, and a stimulating
              environment where children from poor backgrounds can
              learn and grow.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.challengeResponse}>
        <div className={styles.challengeFoundedParent}>
          <div className={styles.challengeFounded}>
            <h2 className={styles.founded}>Founded</h2>
            <div className={styles.challengeWrapper}>
              <h2 className={styles.challenge}>CHALLENGE</h2>
            </div>
          </div>
          <h2 className={styles.blankField}>2010</h2>
          <section className={styles.programNurseryParent}>
            <div className={styles.programNursery}>
              <div className={styles.programTitle}>
                <h2 className={styles.programFocus}>Program Focus</h2>
                <h2 className={styles.nursery}>Nursery</h2>
              </div>
            </div>
            <div className={styles.manyChildrenWho}>
              Many children who enroll in our nursery school come from
              poor families where access to quality early
              childhood education is limited or nonexistent. In addition to
              educational gaps, these children often face challenges such as
              poor nutrition, lack of structured routines, and limited exposure
              to environments that encourage curiosity and learning.
              <br />
              <br />
              As a result, they may struggle with basic cognitive development,
              social interaction, communication skills, and emotional confidence
              at a critical stage in their growth. Without early intervention,
              these challenges can have long-term effects on their academic
              journey and overall well-being.
            </div>
          </section>
          <div className={styles.responseParent}>
            <h2 className={styles.response}>RESPONSE</h2>
            <div className={styles.atAspireRwanda2}>
              At Aspire Rwanda, we address these challenges by providing a
              safe, inclusive, and nurturing environment designed to support
              holistic early childhood development. Our nursery school combines
              structured learning with play based activities that stimulate
              creativity, curiosity, and critical thinking. We ensure that
              children receive proper care, including daily meals and a stable
              routine, which are essential for development.
              <br />
              <br />
              Beyond academics, we focus on building social skills, emotional
              resilience, and self-confidence, helping children learn how to
              interact positively with others and express themselves. Our
              teachers provide individualized attention to support each child’s
              unique needs, ensuring no one is left behind.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <GroupComponent />
    </div>
  );
};

export default AspireNurserySchool;
