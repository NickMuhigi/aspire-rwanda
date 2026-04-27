import type { NextPage } from "next";
import About from "../components/about";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import GroupComponent from "../components/group-component";
import styles from "./about-us.module.css";

const AboutUs: NextPage = () => {
  return (
    <div className={styles.aboutUs}>
      <About />
      <FrameComponent2 />
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsChild} />
      <main className={styles.frameMain}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <FrameComponent3 />
        </div>
      </main>
      <FrameComponent4 />
      <FrameComponent5 />
      <GroupComponent />
    </div>
  );
};

export default AboutUs;
