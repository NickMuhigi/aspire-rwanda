"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component1111.module.css";

export type FrameComponent1111Type = {
  className?: string;
};

const DESCRIPTIONS: Record<string, string> = {
  GISOZI:
    "Vocational and business skills training, supported by on-site childcare, helping women and youth build pathways",
  KINYINYA:
    "Agricultural support through local cooperatives, contributing to community livelihoods.",
  RUTUNGA:
    "Commercial agriculture, literacy, and business skills training, combined with health, rights, and childcare support",
};

const LOCATIONS = ["GISOZI", "KINYINYA", "RUTUNGA"];

const FrameComponent1111: NextPage<FrameComponent1111Type> = ({
  className = "",
}) => {
  const [openItem, setOpenItem] = useState<string>("GISOZI");

  const toggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? prev : id));
  };

  return (
    <section
      className={[styles.locationsContainerWrapper, className].join(" ")}
    >
      <div className={styles.locationsContainer}>
        <div className={styles.locationsContainerChild} />
        <section className={styles.locationsHeader}>
          <div className={styles.headerLocation}>
            <div className={styles.headerLocationChild} />
            <h2 className={styles.locations}>Locations</h2>
          </div>
          <div className={styles.locationImage}>
            <Image
              className={styles.geminiGeneratedImage8jwyao8Icon}
              loading="lazy"
              width={533}
              height={474}
              sizes="100vw"
              alt=""
              src="/Gemini_Generated_Image_8jwyao8jwyao8jwy 2 (1).png"
            />
          </div>
        </section>
        <section className={styles.innerChangeWrapper}>
          <div className={styles.innerChange}>
            <h1 className={styles.plantingLastingChange}>
              Planting Lasting Change <br />
            Where It Matters
            </h1>
            <div className={styles.frameParent}>
              {LOCATIONS.map((loc, index) => {
                const isOpen = openItem === loc;
                return (
                  <div key={loc} className={styles.accordionItem}>
                    {index > 0 && (
                      <div className={styles.nestedBreak}>
                        <div className={styles.nestedBreakChild} />
                      </div>
                    )}
                    <div
                      className={styles.accordionRow}
                      onClick={() => toggle(loc)}
                    >
                      <div className={styles.locationWrapper}>
                        <div className={styles.locationDot} />
                      </div>
                      <div className={styles.gisoziLabel}>
                        <h2 className={styles.locationName}>{loc}</h2>
                      </div>
                      <div className={styles.locationWrapper}>
                        {isOpen ? (
                          <Image
                            className={styles.subtractIcon}
                            width={16}
                            height={16}
                            sizes="100vw"
                            alt=""
                            src="/Subtract1@2x.png"
                          />
                        ) : (
                          <Image
                            className={styles.plusMathIcon}
                            width={17}
                            height={19}
                            sizes="100vw"
                            alt=""
                            src="/Plus-Math@2x.png"
                          />
                        )}
                      </div>
                    </div>
                    {isOpen && (
                      <div className={styles.skillsCaption}>
                        <div className={styles.vocationalAndBusiness}>
                          {DESCRIPTIONS[loc]}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className={styles.locationDivider}>
                <div className={styles.nestedBreakChild} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent1111;
