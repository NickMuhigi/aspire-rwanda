import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog5.module.css";

const Blog5: NextPage = () => {
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
            src="/Gemini_Generated_Image_iyjmbaiyjmbaiyjm (1).png"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                Why Life Skills Matter in Vocational Training
                <br />
              </b>
              <span>
                A carpenter who cannot manage money will struggle to run a
                business. A tailor who cannot communicate clearly with clients
                will find it hard to grow a clientele. Technical skills provide
                the foundation for economic independence, but it is life skills
                that allow people to build something lasting on top of that
                foundation.
                <br />
                <br />
                At Aspire Rwanda, this understanding is embedded in the design
                of our TVET Sponsorship Programme from the very beginning. Life
                skills are not an afterthought or an optional module, they are
                a core component of every participant's journey, woven
                throughout the programme alongside technical training.
                <br />
                <br />
              </span>
              <b>
                Communication, Discipline, and Teamwork
                <br />
              </b>
              <span>
                The workplace demands more than expertise. It demands the ability
                to listen actively, speak clearly, and collaborate with others
                toward shared goals. For many young people entering Aspire
                Rwanda's programme, these are skills that have never been
                explicitly taught or practised.
                <br />
                <br />
                Through structured group activities, role-play exercises, and
                facilitated discussions, participants learn how to express
                themselves professionally, receive feedback constructively, and
                support their teammates effectively. They learn the value of
                punctuality, consistency, and follow-through, habits that
                employers value and that customers notice.
                <br />
                <br />
              </span>
              <b>
                Financial Literacy and Money Management
                <br />
              </b>
              <span>
                One of the most transformative components of Aspire Rwanda's life
                skills curriculum is financial literacy. Many of our participants
                have grown up in households where money was always scarce and
                where financial planning was simply not possible. For them,
                learning to budget, save, and invest is genuinely revelatory.
                <br />
                <br />
                Participants learn how to track income and expenses, set aside
                savings, and make intentional decisions about how to allocate
                what they earn. They are introduced to basic accounting concepts
                relevant to small businesses and to the importance of separating
                personal and business finances. These skills, once learned, tend
                to ripple outward, participants share them with family members
                and bring them into the households they will eventually build.
                <br />
                <br />
              </span>
              <b>
                Entrepreneurship Training: From Employee to Business Owner
                <br />
              </b>
              <span>
                Not every TVET graduate will find formal employment. In Rwanda's
                current economic context, many will need to create their own
                opportunities, whether through self-employment, freelance work,
                or establishing a small enterprise. Aspire Rwanda's
                entrepreneurship training prepares participants for exactly this
                reality.
                <br />
                <br />
                Participants learn how to identify market opportunities, develop
                simple business plans, price their services fairly, and attract
                and retain customers. They are guided through the process of
                thinking like a business owner, not just an employee, which
                fundamentally shifts how they relate to their own skills and
                capabilities. Several graduates have gone on to establish
                thriving micro-enterprises within months of completing the
                programme.
                <br />
                <br />
              </span>
              <b>
                Setting Goals and Building a Vision
                <br />
              </b>
              <span>
                Many young people who arrive at Aspire Rwanda's programme carry
                a heavy sense of limitation, a belief, shaped by years of
                hardship and missed opportunity, that certain futures are simply
                not available to them. One of the most profound aspects of our
                life skills training is the work of dismantling those beliefs
                and replacing them with something more expansive and more true.
                <br />
                <br />
                Through guided goal-setting exercises, vision-building workshops,
                and regular conversations with mentors who have overcome similar
                challenges, participants begin to articulate what they actually
                want from their lives, and to see, perhaps for the first time,
                a credible path toward getting there.
                <br />
                <br />
              </span>
              <b>
                The Long-Term Impact
                <br />
              </b>
              <span>
                The life skills Aspire Rwanda's participants develop are not
                temporary tools for navigating a training programme. They are
                enduring capacities, ways of thinking and being that will serve
                them across every dimension of their lives, for decades to come.
                <br />
                <br />
                Graduates who communicate effectively become better partners and
                parents. Those who manage money well build financial security
                for their families. Those who think entrepreneurially contribute
                to the vitality of their communities. In investing in life
                skills, Aspire Rwanda is investing in the full humanity of the
                young people we serve, and in a future where they are able to
                show up as their whole, capable selves.
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

export default Blog5;
