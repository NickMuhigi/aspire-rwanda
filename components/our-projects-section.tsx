import Image from "next/image";
import Link from "next/link";
import styles from "../app/homepage.module.css";

export default function OurProjectsSection() {
  return (
    <section className={styles.ourProjectsSection}>
      <div className={styles.ourProjectsInner}>
        <div className={styles.ourProjectsTwoCol}>
          <div className={styles.ourProjectsLeft}>
            <div className={styles.ourProjectsPill}>
              <h2 className={styles.ourProjectsPillText}>Our Projects</h2>
            </div>
            <h2 className={styles.ourProjectsHeading}>
              <span className={styles.ourProjectsFirstLine}>Growth &amp; Impact: Creating</span>
              <br />
              <span>Pathways to Independence</span>
            </h2>
            <div className={styles.ourProjectsExplore}>
              Explore Aspire Rwanda&apos;s focused projects that equip children and youth from poor families with practical <br />skills, and the confidence to shape their futures.
            </div>
            <Link href="/about-ar#active-projects" className={styles.ourProjectsReadMore}>
              <span className={styles.ourProjectsReadMoreText}>Read More</span>
              <Image
                className={styles.ourProjectsReadMoreArrow}
                width={23}
                height={14.7}
                sizes="100vw"
                alt=""
                src="/Arrow-29.svg"
              />
            </Link>
          </div>
          <div className={styles.ourProjectsRight}>
            <Link href="/nursery" className={styles.ourProjectsImageLink}>
              <Image
                className={styles.ourProjectsImage}
                width={521}
                height={305}
                sizes="100vw"
                alt=""
                src="/Rectangle 154.png"
              />
            </Link>
            <Link href="/nursery" className={styles.ourProjectsChildcareLink}>
              <h3 className={styles.ourProjectsChildcareTitle}>
                {`Childcare & Early Learning Support`}
              </h3>
              <div className={styles.ourProjectsChildcareBody}>
                <b className={styles.ourProjectsChildcareDesc}>
                  Providing a safe, nurturing space where children learn and<br />
                  grow allowing mothers to fully participate in training and
                  work opportunities.
                </b>
              </div>
            </Link>
            <Link href="/tvet" className={styles.ourProjectsTvetLink}>
              <Image
                className={styles.ourProjectsImage}
                loading="lazy"
                width={521}
                height={305}
                sizes="100vw"
                alt=""
                src="/Rectangle 250.png"
              />
              <div className={styles.ourProjectsTvetContent}>
                <h3 className={styles.ourProjectsTvetTitle}>
                  {`TVET Sponsorship & Skill Development`}
                </h3>
                <div className={styles.ourProjectsTvetBodyWrapper}>
                  <b className={styles.ourProjectsTvetDesc}>
                    Sponsoring youth from poor families to access the
                    vocational skills training and build pathways to meaningful
                    employment opportunities.
                  </b>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
