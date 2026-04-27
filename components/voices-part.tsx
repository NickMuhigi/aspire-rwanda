import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./voices-part.module.css";

export type VoicesPartType = {
  className?: string;
};

const VoicesPart: NextPage<VoicesPartType> = ({ className = "" }) => {
  return (
    <section className={[styles.voicesPart, className].join(" ")}>
      <div className={styles.viewsImpcat}>
        <div className={styles.viewsImpcatChild} />
        <div className={styles.areaVoiced}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.voicesOfImpact}>Voices of Impact</h2>
          </div>
          <section className={styles.quoteLeftRectParent}>
            <div className={styles.quoteLeftRect}>
              <Image
                className={styles.quoteLeftIcon}
                loading="lazy"
                width={43}
                height={47}
                sizes="100vw"
                alt=""
                src="/Quote-Left@2x.png"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <Image
                className={styles.frameItem}
                width={543}
                height={252}
                sizes="100vw"
                alt=""
                src="/Rectangle-253@2x.png"
              />
              <div className={styles.whatStartedAsASmallOpportWrapper}>
                <div className={styles.whatStartedAs}>
                  What started as a small opportunity has completely changed my path. Today,<br />
                  I am building a future I never thought possible.
                </div>
                <div className={styles.readMoreContainer}>
                  <Link href="/story-2" className={styles.readMoreLink}>
                    <span className={styles.readMore}>Read More</span>
                    <Image
                      className={styles.readMoreArrow}
                      width={26}
                      height={14.7}
                      sizes="100vw"
                      alt=""
                      src="/Arrow-29.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default VoicesPart;
