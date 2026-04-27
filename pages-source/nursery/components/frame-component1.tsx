import type { NextPage } from "next";
import Image from "next/image";
import DonateButton from "../../../components/donate-button";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aspireNurserySchoolInner, className].join(" ")}>
      <div className={styles.featureItemParent}>
        <div className={styles.featureItem}>
          <div className={styles.featureItemChild} />
          <h2
            className={styles.deliveringQualityEarly}
          >{`Delivering Quality Early Childhood Education `}</h2>
        </div>
        <div className={styles.ourNurserySchoolProvidesChWrapper}>
          <div className={styles.ourNurserySchool}>
            Our nursery school provides children from poor families
            with access to high-quality early childhood education within a safe,
            structured, and nurturing environment aligned with national
            education standards.
            <br />
            <br />
            The programme follows the curriculum framework established by the
            Rwanda Education Board, ensuring age-appropriate learning that
            supports cognitive, social, and emotional development while building
            strong foundational skills, and promoting structured experiences
            that prepare children for a confident transition into primary
            education.
            <br />
            <br />
            Through a balanced approach that integrates guided instruction, play-based learning, and daily care, the programme enables mothers to work with peace of mind, knowing their children are studying in a safe and reliable environment where they are well cared for. In addition, children receive nutritious breakfast and lunch at school, ensuring their well-being.
          </div>
        </div>
        <DonateButton className={styles.supportWork}>
          <span className={styles.donateNowTo}>
            DONATE NOW TO SUPPORT OUR WORK
          </span>
          <div className={styles.supportWorkInner}>
            <Image
              className={styles.frameChild}
              width={24}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-46.svg"
            />
          </div>
        </DonateButton>
      </div>
    </section>
  );
};

export default FrameComponent1;
