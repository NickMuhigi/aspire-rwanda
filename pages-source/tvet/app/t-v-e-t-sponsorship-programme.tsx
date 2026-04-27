import type { NextPage } from "next";
import Image from "next/image";
import Programme from "../components/programme";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component4";
import GroupComponent from "../components/group-component";
import styles from "./t-v-e-t-sponsorship-programme.module.css";

const TVETSponsorshipProgramme: NextPage = () => {
  return (
    <div className={styles.tvetSponsorshipProgramme}>
      <Programme />
      <Image
        className={styles.heroBoxIcon}
        width={1440}
        height={668}
        sizes="100vw"
        alt=""
        src="/Gemini_Generated_Image_wmku3iwmku3iwmku (1).png"
      />
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.challengeResponse}>
        <div className={styles.challengeFoundedParent}>
          <div className={styles.challengeFounded}>
            <h2 className={styles.founded}>Founded</h2>
            <div className={styles.challengeWrapper}>
              <h2 className={styles.challenge}>CHALLENGE</h2>
            </div>
          </div>
          <h2 className={styles.blankField}>2010</h2>
          <section className={styles.programNurseryParent}>
            <div className={styles.programNursery}>
              <div className={styles.programTitle}>
                <h2 className={styles.programFocus}>Program Focus</h2>
                <h2 className={styles.tvet}>TVET</h2>
              </div>
            </div>
            <div className={styles.youthWhoSeek}>
              Youth who seek to enroll in technical and vocational training face
              significant barriers that prevent them from accessing
              opportunities to build practical, employable skills. Coming from
              poor families, they often lack the financial means
              to afford tuition, learning materials, and basic living expenses.
              In addition, limited career guidance, mentorship, and exposure to
              the job market can leave them uncertain about their future paths.{" "}
              <br />
              <br />
              Without access to relevant training and support, these young
              people risk remaining unemployed or trapped in unstable,
              low-income work, limiting their ability to achieve independence
              and contribute meaningfully to their communities, preventing them
              from reaching their full potential or building a stable future for
              themselves.
            </div>
          </section>
          <div className={styles.responseParent}>
            <h2 className={styles.response}>RESPONSE</h2>
            <div className={styles.atAspireRwanda2}>
              We work to remove these barriers by sponsoring youth through our
              TVET sponsorship program. We cover the costs that would otherwise
              prevent them from enrolling in training programs and ensure they
              have what they need to stay and succeed. But our support goes
              beyond funding. We walk alongside them through mentorship, career
              guidance, and personal development, helping them build both skills
              and confidence.
              <br />
              <br />
              By focusing on practical training and real-world readiness, we
              prepare young people to enter the workforce, start their own
              ventures, and become independent. Our goal is not just to help
              them learn a trade, but to equip them with the tools and mindset
              to create lasting change in their own lives.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <GroupComponent />
    </div>
  );
};

export default TVETSponsorshipProgramme;
