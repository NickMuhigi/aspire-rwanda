import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainHeroWrapper, className].join(" ")}>
      <div className={styles.mainHero}>
        <div className={styles.innerHero}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.theYouthOf}>
              The Youth Of Today Are The Leaders Of Tomorrow.
            </h2>
          </div>
          <h1 className={styles.buildingSkillsConfidence}>
            Building Skills, Confidence, & <br />
            Future for Rwanda’s Youth.
          </h1>
        </div>
        <div className={styles.learnMoreParent}>
          <Link href="/about-ar" className={styles.learnMoreButton}>
            <span className={styles.learnMore}>Learn More</span>
            <Image
              className={styles.learnMoreArrow}
              width={29}
              height={23}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
