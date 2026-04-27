import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section id="active-projects" className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h2 className={styles.activeProjects}>Active Projects</h2>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <FrameComponent
              frameDivBackgroundImage="url('/Rectangle 279 (2).png')"
              rectangle279="/Rectangle 279 (2).png"
              cHILDRENs="CHILDREN's"
              aSPIRENURSERYSCHOOL="ASPIRE NURSERY SCHOOL"
              subtract="/Subtract.svg"
              href="/nursery"
            />
            <FrameComponent
              frameDivBackgroundImage="url('/Rectangle 282 (2).png')"
              rectangle279="/Rectangle 282 (2).png"
              cHILDRENs="YOUTH's"
              cHILDRENsWidth="86.4px"
              aSPIRENURSERYSCHOOL="TVET SPONSORSHIP PROGRAM"
              subtract="/Subtract.svg"
              href="/tvet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
