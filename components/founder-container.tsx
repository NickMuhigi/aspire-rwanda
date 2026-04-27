import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./founder-container.module.css";

export type FounderContainerType = {
  className?: string;
};

const FounderContainer: NextPage<FounderContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.founderContainer, className].join(" ")}>
      <div className={styles.founderContent}>
        <div className={styles.founderContentChild} />
        <div className={styles.founderBlock}>
          <section className={styles.founderDetails}>
            <div className={styles.founderHeader}>
              <h2 className={styles.meetOurFounder}>{`MEET OUR FOUNDER `}</h2>
              <h3 className={styles.fromASimple}>
                From a Simple Patio to a<br />
                Platform of Possibilities:<br />
                The Story of Aspire Rwanda.
              </h3>
            </div>
          </section>
          <Link href="/our-past" className={styles.founderReadMore}>
            <span className={styles.readMore}>Read More</span>
            <Image
              className={styles.readMoreArrow}
              loading="lazy"
              width={27}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </Link>
          <div className={styles.founderBlockChild} />
        </div>
        <Image
          className={styles.founderBackgroundIcon}
          loading="lazy"
          width={533}
          height={418}
          sizes="100vw"
          alt=""
          src="/Rectangle 127 (1).png"
        />
      </div>
    </section>
  );
};

export default FounderContainer;
