import type { NextPage } from "next";
import Image from "next/image";
import DonateButton from "../../../components/donate-button";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aspireNurserySchoolInner, className].join(" ")}>
      <div className={styles.donateContentParent}>
        <div className={styles.donateContent}>
          <div className={styles.donateHeader}>
            <div className={styles.donateHeaderChild} />
            <h2 className={styles.donate}>{`Donate `}</h2>
          </div>
        </div>
        <section className={styles.helpGiveEveryChildAStrongParent}>
          <h2 className={styles.helpGiveEvery}>
            Help Give Every Child a Strong, Safe, and Hopeful Start Through
            Early Education.
          </h2>
          <div className={styles.donationDescription}>
            <div className={styles.yourDonationSupports}>
              Your donation supports a safe space, daily care, and quality
              learning for children from poor families, giving
              them the foundation they need to grow and thrive.
            </div>
          </div>
          <div className={styles.donateButton}>
            <DonateButton className={styles.rectangleParent}>
              <span className={styles.donate2}>DONATE</span>
              <Image
                className={styles.donateArrow2}
                width={22}
                height={14.7}
                sizes="100vw"
                alt=""
                src="/Arrow-29.svg"
              />
            </DonateButton>
          </div>
          <div className={styles.programsList}>
            <div className={styles.earlyChildhoodEducation}>
              Early Childhood Education (ECE)
            </div>
            <div className={styles.programsDetails} />
            <div className={styles.earlyChildhoodEducation}>{`Childcare `}</div>
            <div className={styles.programsDetails} />
            <div className={styles.earlyChildhoodEducation}>
              Community Development
            </div>
            <div className={styles.programsDetails} />
          </div>
        </section>
        <div className={styles.programsSeparator}>
          <Image
            className={styles.programsFooterIcon}
            loading="lazy"
            width={402}
            height={526}
            sizes="100vw"
            alt=""
            src="/Rectangle 225 (1).png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
