import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.openingDoorsThroughEducatioParent}>
          <div className={styles.openingDoorsThrough}>
            Opening Doors Through Education For The Children And The Youth:
            Through early childhood learning and vocational training
            opportunities.
          </div>
          <div className={styles.aspireRwandaOpensPathwaysFWrapper}>
            <div className={styles.aspireRwandaOpens}>
              Aspire Rwanda opens pathways for children and
              youth from poor families through two core programs: a nursery that nurtures early
              learning and care, and a TVET sponsorship program that equips
              youth with practical skills for future employment opportunities.
            </div>
          </div>
        </section>
        <section className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <Image
              className={styles.frameItem}
              loading="lazy"
              width={485}
              height={445}
              sizes="100vw"
              alt=""
              src="/Rectangle 172 (2).png"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent2;
