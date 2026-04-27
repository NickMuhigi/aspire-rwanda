import type { NextPage } from "next";
import Image from "next/image";
import styles from "./story-content.module.css";

export type StoryContentType = {
  className?: string;
};

const StoryContent: NextPage<StoryContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.storyContent, className].join(" ")}>
      <div className={styles.storyContentChild} />
      <div className={styles.storyInner}>
        <div className={styles.storyTitle}>
          <div className={styles.storyTitleChild} />
          <h2 className={styles.ourStory}>Our Story</h2>
        </div>
        <div className={styles.storyDetails}>
          <div className={styles.storyImages}>
            <div className={styles.storyImagesChild} />
            <Image
              className={styles.storyImagesItem}
              loading="lazy"
              width={517}
              height={486}
              sizes="100vw"
              alt=""
              src="/Rectangle 306.png"
            />
          </div>
          <section className={styles.storyDescription}>
            <div className={styles.fromAPatioToAMovementOfParent}>
              <h1 className={styles.fromAPatio}>
                From a Patio to a Movement of Change
              </h1>
              <div className={styles.aspireRwandaWasFoundedFromWrapper}>
                <div className={styles.aspireRwandaWas}>
                  Aspire Rwanda was founded from a deep awareness of the struggles
                  faced by families living in poverty within the founder’s own
                  community.
                  <br />
                  <br />
                  What began as a simple act of openness grew into a grassroots
                  movement, as Peace Ruzage opened her patio as a safe space where
                  women gathered to share, connect, and support one another
                  through hardship. These gatherings built trust, solidarity, and
                  resilience.
                  <br />
                  <br />
                  Adult literacy classes were introduced for women and youth who
                  were illiterate or semi-illiterate, followed by practical skills
                  training to support income generation and self-reliance.
                  <br />
                  <br />
                  In 2009, this initiative became Aspire Rwanda, a registered
                  non-profit organization (NGO No. 79/RGB/NGO/2016), dedicated to
                  community-driven empowerment.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default StoryContent;
