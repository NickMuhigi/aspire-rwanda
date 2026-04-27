import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <section className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h2 className={styles.ourPast}>Our Past</h2>
          </div>
          <div className={styles.growingOurImpactThroughPasParent}>
            <div className={styles.growingOurImpact}>
              Growing Our Impact Through Past Projects That Changed Lives Across Communities!
            </div>
            <Link href="/our-past" className={styles.readMoreParent}>
              <span className={styles.readMore}>Read More</span>
              <Image
                className={styles.readMoreArrow}
                width={22}
                height={14.7}
                sizes="100vw"
                alt=""
                src="/Arrow-29.svg"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <Image
          className={styles.rectangleIcon}
          loading="lazy"
          width={587}
          height={352}
          sizes="100vw"
          alt=""
          src="/Rectangle 308 (2).png"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
