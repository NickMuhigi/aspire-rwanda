import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aspireNurserySchoolInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Image
          className={styles.frameItem}
          loading="lazy"
          width={508}
          height={236}
          sizes="100vw"
          alt=""
          src="/Rectangle 242.png"
        />
        <section className={styles.testimonialInfo}>
          <Image
            className={styles.quoteLeftIcon}
            width={36}
            height={39}
            sizes="100vw"
            alt=""
            src="/Quote-Left@2x.png"
          />
          <div className={styles.asAMother}>
            As a mother, I watched my child grow with confidence, learning
            skills that are shaping a brighter future!
          </div>
          <Link href="/story-1" className={styles.testimonialAction}>
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
        </section>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <h2 className={styles.voicesOfImpact}>Voices of Impact</h2>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
