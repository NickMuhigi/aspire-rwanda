import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog1.module.css";

const Blog1: NextPage = () => {
  return (
    <div className={styles.blog1}>
      <FrameComponent className="shared-nav-story" />
      <FrameComponent1 />
      <main className={styles.explorationContainerWrapper}>
        <div className={styles.explorationContainer}>
          <Image
            className={styles.explorationImageIcon}
            loading="lazy"
            width={1231}
            height={568}
            sizes="100vw"
            alt=""
            src="/N.jpg"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                A Safe Space for Exploration
                <br />
              </b>
              <span>
                Children are naturally curious. In our nursery classrooms, that
                curiosity is welcomed and encouraged. We create a safe,
                supportive space where children feel comfortable asking
                questions, trying new things, and expressing themselves freely.
                Whether it’s discovering colors through play, exploring nature,
                or engaging with stories, every activity is designed to spark
                wonder and excitement. 
                <br />
                <br />
              </span>
              <b>
                Learning Through Play
                <br />
              </b>
              <span>
                At Aspire Rwanda, we understand that play is one of the most
                effective ways children learn. Our approach blends structured
                guidance with free play, allowing children to develop cognitive,
                social, and emotional skills organically. Through games, songs,
                art, and group activities, children learn how to communicate,
                collaborate, and solve problems, all while having fun. 
                <br />
                <br />
              </span>
              <b>
                Fostering Creativity
                <br />
              </b>
              <span>
                Creativity is at the heart of our nursery experience. We provide
                opportunities for children to draw, build, imagine, and create
                without limits. These activities not only develop fine motor
                skills but also help children build confidence in their ideas
                and abilities. By encouraging self-expression, we empower
                children to think independently and embrace their uniqueness. 
                <br />
                <br />
              </span>
              <b>
                Building Confidence Early
                <br />
              </b>
              <span>
                Confidence grows when children feel seen, heard, and valued. Our
                educators focus on positive reinforcement, celebrating each
                child’s efforts and achievements, big or small. As children learn
                to complete tasks, interact with peers, and express their
                thoughts, they develop a strong sense of self-worth that
                supports their future learning journey. 
                <br />
                <br />
              </span>
              <b>
                A Community of Care
                <br />
              </b>
              <span>
                Our nursery is a community where children, teachers, and
                families work together. We believe that strong partnerships with
                parents and caregivers are essential to a child’s development.
                By maintaining open communication and shared goals, we ensure
                that every child receives consistent support both at school and
                at home. 
                <br />
                <br />
              </span>
              <b>
                Preparing for the Future
                <br />
              </b>
              <span>
                The skills developed during the nursery years go far beyond
                academics. At Aspire Rwanda, we focus on nurturing well-rounded
                individuals who are curious, creative, and confident. These
                qualities not only prepare children for primary education but
                also equip them to navigate life with resilience and enthusiasm.
              </span>
            </div>
          </div>
        </div>
      </main>
      <FrameComponent2 />
      <GroupComponent />
    </div>
  );
};

export default Blog1;
