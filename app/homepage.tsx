import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent111 from "../components/frame-component111";
import FrameComponent1111 from "../components/frame-component1111";
import FrameComponent11111 from "../components/frame-component11111";
import OurProjectsSection from "../components/our-projects-section";
import InsightsColumn from "../components/insights-column";
import StatisticsView from "../components/statistics-view";
import FounderContainer from "../components/founder-container";
import BlogsContainer from "../components/blogs-container";
import FooterContainer from "../components/footer-container";
import styles from "./homepage.module.css";

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <Image
        className={styles.headingIcon}
        width={1440}
        height={661}
        sizes="100vw"
        alt=""
        src="/Rectangle 249 (1).png"
      />
      <FrameComponent1 />
      <FrameComponent11 />
      <Image
        className={styles.subtractIcon}
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/Subtract1@2x.png"
      />
      <Image
        className={styles.plusMathIcon}
        loading="lazy"
        width={19}
        height={19}
        sizes="100vw"
        alt=""
        src="/Plus-Math@2x.png"
      />
      <Image
        className={styles.plusMathIcon2}
        width={19}
        height={19}
        sizes="100vw"
        alt=""
        src="/Plus-Math@2x.png"
      />
      <FrameComponent111 />
      <FrameComponent1111 />
      <OurProjectsSection />
      <InsightsColumn />
      <StatisticsView />
      <FounderContainer />
      <BlogsContainer />
      <FooterContainer />
    </div>
  );
};

export default Homepage;
