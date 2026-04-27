import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.tvetSponsorshipProgrammeInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.tvetSponsorshipProgramme}>
              TVET SPONSORSHIP PROGRAMME
            </h2>
          </div>
          <div className={styles.theYouthDeserves}>
            The youth deserves the opportunity to build a future defined by
            purpose.
          </div>
        </div>
        <div className={styles.programmeDescription}>
          <div className={styles.theTvetSponsorship}>
            The TVET Sponsorship Programme creates this pathway by sponsoring
            youth to gain practical, in-demand skills and transition them into
            employment.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
