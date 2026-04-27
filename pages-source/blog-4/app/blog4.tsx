import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog4.module.css";

const Blog4: NextPage = () => {
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
            src="/WhatsApp Image 2026-04-25 at 7.15.29 PM.jpg"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                What the TVET Programme Offers
                <br />
              </b>
              <span>
                Aspire Rwanda's Technical and Vocational Education and Training
                (TVET) Sponsorship Programme provides young people from
                vulnerable backgrounds with access to accredited vocational
                training at recognised institutions across Rwanda. Participants
                are sponsored to complete certified training in trades such as
                carpentry, tailoring, plumbing, electrical installation, and
                catering, skills that are in genuine demand across the country
                and that translate directly into income-generating opportunities.
                <br />
                <br />
                Beyond the technical certification, the programme includes life
                skills training, entrepreneurship modules, and ongoing mentorship
               , ensuring that graduates are equipped not just with a trade, but
                with the confidence, vision, and practical understanding to build
                sustainable livelihoods.
                <br />
                <br />
              </span>
              <b>
                Who We Serve
                <br />
              </b>
              <span>
                The TVET Sponsorship Programme targets young people between the
                ages of 16 and 30 who have been unable to access further
                education or stable employment due to financial hardship. Many
                participants left school prematurely, forced out by the cost of
                fees, family obligations, or the simple need to contribute to
                household survival.
                <br />
                <br />
                Without intervention, these young people face a lifetime of
                informal, low-paid, and precarious work. With the right support,
                they can acquire skills that fundamentally change their
                trajectory, creating not just individual opportunity, but
                broader economic contribution to their communities and to Rwanda
                as a whole.
                <br />
                <br />
              </span>
              <b>
                Hands-On Training That Translates to Real Opportunities
                <br />
              </b>
              <span>
                One of the most important features of vocational training is its
                direct connection to the world of work. Unlike purely academic
                pathways, TVET prepares young people for specific, identifiable
                roles in the labour market. Participants learn by doing, working
                with real tools, real materials, and real clients in supervised
                training environments.
                <br />
                <br />
                This practical orientation means that by the time a participant
                completes their training, they are not just qualified on paper , 
                they are genuinely ready to work. Many of Aspire Rwanda's
                graduates go on to find employment within months of completing
                the programme, while others use their newly acquired skills to
                launch their own small businesses.
                <br />
                <br />
              </span>
              <b>
                Building More Than Technical Skills
                <br />
              </b>
              <span>
                Technical competence is only one part of what Aspire Rwanda's
                TVET programme develops. Through life skills training integrated
                into the programme, participants also build communication skills,
                professional habits, and emotional resilience.
                <br />
                <br />
                They learn how to work in teams, how to manage time effectively,
                how to present themselves to employers, and how to navigate the
                challenges that come with starting out in the world of work.
                These complementary skills are often the difference between
                finding a job and keeping it, between starting a business and
                growing it.
                <br />
                <br />
              </span>
              <b>
                The Ripple Effect on Families and Communities
                <br />
              </b>
              <span>
                When a young person gains a stable income, the benefits extend
                far beyond the individual. Families gain financial stability.
                Younger siblings are more likely to stay in school. Parents
                experience reduced stress and improved wellbeing. Communities
                benefit from the goods and services that newly skilled workers
                provide.
                <br />
                <br />
                Aspire Rwanda has seen this ripple effect firsthand in the
                communities we work within. Graduates who return to their
                neighbourhoods with new skills and steady incomes become role
                models, demonstrating to younger generations that a different
                future is possible. In this way, every investment in a single
                young person multiplies into broader community change.
                <br />
                <br />
              </span>
              <b>
                Looking Ahead
                <br />
              </b>
              <span>
                Rwanda's development ambitions require a skilled, productive
                workforce. As the country continues to grow and diversify its
                economy, the demand for technically trained workers will only
                increase. Aspire Rwanda's TVET Sponsorship Programme is helping
                to meet that demand, one young person at a time.
                <br />
                <br />
                We remain committed to expanding access, deepening quality, and
                ensuring that the young people we serve are genuinely prepared
                to contribute to and benefit from Rwanda's future. Because when
                young people have the skills to succeed, everyone benefits.
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

export default Blog4;
