import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component11111.module.css";

export type FrameComponent11111Type = {
  className?: string;
};

const FrameComponent11111: NextPage<FrameComponent11111Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.projectHolderWrapper, className].join(" ")}>
      <div className={styles.projectHolder}>
        <div className={styles.projectContent}>
          <div className={styles.projectContentChild} />
          <h2 className={styles.ourProjects}>Our Projects</h2>
        </div>
        <div className={styles.projectsCluster}>
          <section className={styles.growthProject}>
            <div className={styles.pathwayProject}>
              <div className={styles.pathwayDetail}>
                <h2 className={styles.growthImpactContainer}>
                  <span className={styles.firstLine}>Growth &amp; Impact: Creating</span>
                  <br />
                  <span className={styles.growth}>Pathways to Independence</span>
                </h2>
                <div className={styles.rwandaProject}>
                  <div className={styles.exploreAspireRwandas}>
                    Explore Aspire Rwanda’s focused projects that equip children and youth from poor families<br />
                    with practical skills, and the confidence to shape their futures.
                  </div>
                </div>
              </div>
            </div>
            <Link href="/nursery">
              <Image
                className={styles.growthProjectChild}
                loading="lazy"
                width={521}
                height={305}
                sizes="100vw"
                alt=""
                src="/Rectangle-154@2x.png"
              />
            </Link>
          </section>
          <section className={styles.childcareSet}>
            <div className={styles.detailsHolder}>
              <Link href="/about-ar#active-projects" className={styles.readMoreParent}>
                <span className={styles.readMore}>Read More</span>
                <Image
                  className={styles.readMoreArrow}
                  width={23}
                  height={14.7}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29.svg"
                />
              </Link>
            </div>
            <Link href="/nursery" className={styles.descriptionLabel}>
              <h3
                className={styles.childcareEarly}
              >{`Childcare & Early Learning Support`}</h3>
              <div className={styles.nurturingProject}>
                <b className={styles.providingASafe}>
                  Providing a safe, nurturing space where children learn and<br />
                  grow allowing mothers to fully participate in training and
                  work opportunities.
                </b>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11111;
