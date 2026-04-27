import type { NextPage } from "next";
import Image from "next/image";
import DonateButton from "../../../components/donate-button";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.tvetSponsorshipProgrammeInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h2 className={styles.equippingYouthWith}>
            Equipping Youth with Vocational Skills.
          </h2>
        </div>
        <div className={styles.skillDescription}>
          <div className={styles.throughOurTvet}>
            Through our TVET sponsorship programme, we remove financial barriers to education, enabling students to enroll in accredited training institutions where they can specialize in fields aligned with market demand.
            <br />
            <br />
            Beyond sponsorship, we offer continuous mentorship, career guidance, and personal development support to help students navigate both their training and future career paths. We also provide education on key civic, social, and health topics, including human rights, gender-based violence, mental and reproductive health, drug abuse, and human trafficking. We focus not only on technical ability, but also on building confidence, discipline, and a strong work ethic essential qualities for long-term success.
            <br />
            <br />
            By connecting learning to opportunity, we empower young people to transition into employment, entrepreneurship, or further education, these impacts extend beyond individuals, as the graduates contribute to their families and their communities, fostering sustainable growth, economic independence, and more opportunities.
          </div>
        </div>
        <DonateButton className={styles.donateNowToSupportOurWorkParent}>
          <span className={styles.donateNowTo}>
            DONATE NOW TO SUPPORT OUR WORK
          </span>
          <div className={styles.vectorWrapper}>
            <Image
              className={styles.frameItem}
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
