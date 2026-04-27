import type { NextPage } from "next";
import Image from "next/image";
import styles from "./partners-container.module.css";

export type PartnersContainerType = {
  className?: string;
};

const PartnersContainer: NextPage<PartnersContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.partnersContainer, className].join(" ")}>
      <div className={styles.partnersHeader}>
        <div className={styles.partnersTitle}>
          <div className={styles.partnersTitleChild} />
          <h2 className={styles.partners}>Partners</h2>
        </div>
        <div className={styles.partnersContent}>
          <div className={styles.partnersLogo}>
            <h2 className={styles.buildingLastingImpact}>
              Building Lasting Impact Through<br />
              The Valued Partners Who Have<br />
              Supported And Grown With Us !
            </h2>
          </div>
          <div className={styles.partnerLogos}>
            <div className={styles.partnerLogosChild} />
            <div className={styles.miscImages}>
              <div className={styles.logoPair}>
                <div className={styles.logoPairChild} />
                <Image
                  className={styles.images2Icon}
                  loading="lazy"
                  width={44}
                  height={89}
                  sizes="100vw"
                  alt=""
                  src="/images-2@2x.png"
                />
              </div>
              <div className={styles.logoPair2}>
                <div className={styles.logoPairItem} />
                <Image
                  className={styles.coat042Icon}
                  loading="lazy"
                  width={87}
                  height={95}
                  sizes="100vw"
                  alt=""
                  src="/Coat-04-2@2x.png"
                />
              </div>
            </div>
            <div className={styles.miscImages}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <Image
                  className={styles.usaidLogoPng2Icon}
                  loading="lazy"
                  width={124}
                  height={92}
                  sizes="100vw"
                  alt=""
                  src="/usaid-logo-png-2@2x.png"
                />
              </div>
              <div className={styles.giz2Parent}>
                <Image
                  className={styles.giz2Icon}
                  loading="lazy"
                  width={87}
                  height={70}
                  sizes="100vw"
                  alt=""
                  src="/giz-2@2x.png"
                />
                <div className={styles.frameItem} />
              </div>
            </div>
            <div className={styles.miscImages}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <Image
                  className={styles.saveTheChildren201762Icon}
                  loading="lazy"
                  width={95}
                  height={98}
                  sizes="100vw"
                  alt=""
                  src="/save-the-children-2017-6-2@2x.png"
                />
              </div>
              <div className={styles.mastercardFeaturedImage1080Parent}>
                <Image
                  className={styles.mastercardFeaturedImage1080Icon}
                  loading="lazy"
                  width={162}
                  height={94}
                  sizes="100vw"
                  alt=""
                  src="/mastercard-featured-image-1080x628-2@2x.png"
                />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersContainer;
