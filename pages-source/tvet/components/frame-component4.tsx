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
          <h2 className={styles.supportYouthIn}>
            Support youth in building a future through practical skills and
            opportunity.
          </h2>
          <div className={styles.donationDescription}>
            <div className={styles.yourDonationSupports}>
              Your contribution helps provide access to hands-on training,
              mentorship, and career pathways for young people from
              poor families<span className={styles.equippingText}>, equipping them to secure employment
              or start their own ventures</span>.
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
            <div className={styles.technicalAndVocational}>
              Technical and Vocational Education and Training (TVET)
            </div>
            <div className={styles.programsDetails} />
            <div className={styles.technicalAndVocational}>
              Skills Development
            </div>
            <div className={styles.programsDetails} />
            <div className={styles.technicalAndVocational}>
              Employment Pathways
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
            src="/Rectangle-225@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
