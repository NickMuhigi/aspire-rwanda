"use client";
import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import StoryContent from "../components/story-content";
import GroupComponent from "../components/group-component";
import styles from "./our-past.module.css";

const OurPast: NextPage = () => {
  return (
    <div className={styles.ourPast}>
      <div className={styles.header}>
        <FrameComponent />
        <FrameComponent1 />
      </div>
      <main className={styles.storyContentParent}>
        <StoryContent />
        <section id="our-past-projects" className={styles.pastProjects} style={{ scrollMarginTop: "80px" }}>

          <div className={styles.sectionLabel}>
            <div className={styles.pastPill}>
              <h2 className={styles.pastPillText}>Our Past Projects</h2>
            </div>
            <div className={styles.labelLine} />
          </div>

          <div className={styles.photoGrid}>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection@2x.png"
                  width={444}
                  height={339}
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>01</span>
                <h3 className={styles.photoTitle}>Adult Literacy Programmes:</h3>
                <p className={styles.photoDesc}>
                  We provided literacy classes for women and youth who had missed
                  formal education, helping them build reading, writing, and
                  numeracy skills while gaining confidence and new opportunities.
                </p>
              </div>
            </div>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection1@2x.png"
                  width={444}
                  height={339}
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>02</span>
                <h3 className={styles.photoTitle}>Community Support Spaces:</h3>
                <p className={styles.photoDesc}>
                  We created safe spaces where women could connect, share
                  experiences, and support one another, building stronger
                  relationships and a sense of belonging.
                </p>
              </div>
            </div>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection2@2x.png"
                  width={444}
                  height={339}
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>03</span>
                <h3 className={styles.photoTitle}>Vocational & Practical Skills Training:</h3>
                <p className={styles.photoDesc}>
                  Through hands-on training, individuals gained practical skills
                  that enabled them to start small services, create products, and
                  earn a sustainable income.
                </p>
              </div>
            </div>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection3@2x.png"
                  width={444}
                  height={339}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>04</span>
                <h3 className={styles.photoTitle}>Entrepreneurship & Business Training:</h3>
                <p className={styles.photoDesc}>
                  Participants were equipped with financial literacy and business
                  skills to help them plan, manage, and grow small enterprises
                  into reliable sources of income.
                </p>
              </div>
            </div>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection4@2x.png"
                  width={444}
                  height={339}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>05</span>
                <h3 className={styles.photoTitle}>Micro-Seed Funding Support:</h3>
                <p className={styles.photoDesc}>
                  Small-scale financial support helped individuals turn ideas
                  into reality, enabling them to start or expand
                  income-generating activities.
                </p>
              </div>
            </div>

            <div className={styles.photoCard}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection5@2x.png"
                  width={444}
                  height={339}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>06</span>
                <h3 className={styles.photoTitle}>Agricultural Training:</h3>
                <p className={styles.photoDesc}>
                  We supported families with improved farming techniques to
                  boost productivity, strengthen food security, and increase
                  household income.
                </p>
              </div>
            </div>

            <div className={[styles.photoCard, styles.photoCardCenter].join(" ")}>
              <div className={styles.photoFrame}>
                <Image
                  className={styles.photoImg}
                  src="/Projects-Collection6@2x.png"
                  width={444}
                  height={339}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={styles.photoMeta}>
                <span className={styles.photoNum}>07</span>
                <h3 className={styles.photoTitle}>Health & Social Awareness Programmes:</h3>
                <p className={styles.photoDesc}>
                  We delivered awareness sessions on health, hygiene, and social
                  wellbeing, helping communities make informed choices and
                  improve quality of life.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <GroupComponent />
    </div>
  );
};

export default OurPast;
