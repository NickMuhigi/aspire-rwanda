import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.heroContentWrapper, className].join(" ")}>
      <div className={styles.heroContent}>
        <section className={styles.heroContainerWrapper}>
          <div className={styles.heroContainer}>
            <div className={styles.layingStrongFoundationsThroParent}>
              <div className={styles.layingStrongFoundations}>
                Laying Strong Foundations Through Early Community Empowerment
                And Grassroots Development Initiatives Across Rwanda!
              </div>
            </div>
            <div className={styles.ourJourneyBegan}>
              Our journey began with a clear belief in the power of practical,
              locally driven solutions that address everyday challenges at
              their core.
              <br />
              <br />
              Through this approach, we began laying the groundwork for much
              stronger, more resilient communities, creating meaningful
              pathways toward dignity, opportunity, and lasting change.
            </div>
            <Link href="#our-past-projects" className={styles.exploreParent}>
              <span className={styles.explore}>Explore</span>
              <Image
                className={styles.exploreArrow}
                width={22}
                height={14.7}
                sizes="100vw"
                alt=""
                src="/Arrow-29.svg"
              />
            </Link>
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <Image
              className={styles.frameChild}
              loading="lazy"
              width={291}
              height={439}
              sizes="100vw"
              alt=""
              src="/Rectangle-284@2x.png"
            />
            <Image
              className={styles.frameItem}
              loading="lazy"
              width={291}
              height={135}
              sizes="100vw"
              alt=""
              src="/Rectangle-287@2x.png"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <Image
              className={styles.frameInner}
              loading="lazy"
              width={278}
              height={263}
              sizes="100vw"
              alt=""
              src="/Rectangle-285@2x.png"
            />
            <div className={styles.imageOverlays}>
              <div className={styles.overlayOne} />
              <Image
                className={styles.overlayTwoIcon}
                loading="lazy"
                width={263}
                height={320}
                sizes="100vw"
                alt=""
                src="/Overlay-Two@2x.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrameComponent1;
