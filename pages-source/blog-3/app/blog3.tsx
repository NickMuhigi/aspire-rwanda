import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog3.module.css";

const Blog3: NextPage = () => {
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
            src="/Gemini_Generated_Image_nzsmhdnzsmhdnzsm (1).png"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                Support for the Whole Family
                <br />
              </b>
              <span>
                A child cannot flourish in isolation. When a family is under
                stress, struggling with poverty, unstable housing, or the
                demands of informal work, that stress finds its way into the
                home and into the child's experience of the world. At Aspire
                Rwanda, we recognise that supporting a child means supporting
                the family around them.
                <br />
                <br />
                Our nursery programme builds strong relationships with parents
                and caregivers from the very beginning. Through regular
                parent meetings, home visits, and open-door communication,
                we ensure that the learning that happens in the classroom is
                reinforced and celebrated at home. Families are partners in
                their child's development, not passive observers.
                <br />
                <br />
              </span>
              <b>
                On-Site Childcare That Enables Mothers to Work
                <br />
              </b>
              <span>
                One of the most significant ways our nursery extends its impact
                is by enabling mothers to participate in economic activities.
                Many of the families we serve depend on informal, daily labour
                for income, work that requires long hours away from home.
                Without safe, reliable childcare, mothers are often forced to
                choose between earning an income and caring for their children.
                <br />
                <br />
                Our nursery removes that impossible choice. By providing a
                secure, stimulating environment for children during working
                hours, we give mothers the freedom to work, study, or participate
                in skills training, knowing their children are in safe and
                capable hands. This creates a cycle of empowerment that
                benefits the entire family.
                <br />
                <br />
              </span>
              <b>
                Health and Nutrition as Part of Learning
                <br />
              </b>
              <span>
                A hungry child cannot learn. A sick child cannot concentrate.
                At Aspire Rwanda, we understand that physical wellbeing and
                cognitive development are inseparable. That is why health and
                nutrition are not afterthoughts in our programme, they are
                integral to it.
                <br />
                <br />
                Children receive a nutritious meal each day, providing the
                energy their growing bodies and minds need to engage fully with
                learning. Our staff are trained to identify signs of illness or
                developmental concern, and we connect families to local health
                services when needed. A healthy child is not only better able
                to learn today, they are building the physical resilience that
                will support them throughout their lives.
                <br />
                <br />
              </span>
              <b>
                Community Partnerships That Strengthen Our Impact
                <br />
              </b>
              <span>
                No single organisation can address the full complexity of
                childhood poverty and vulnerability. At Aspire Rwanda, we work
                within the broader community, building partnerships with local
                health workers, community leaders, and other organisations to
                create a web of support around the families we serve.
                <br />
                <br />
                These partnerships allow us to connect families to services
                beyond what we can offer directly: health clinics, legal
                assistance, adult literacy programmes, and livelihood support.
                By situating our nursery within this larger ecosystem, we
                amplify our impact and contribute to a more resilient community
                for every child in our care.
                <br />
                <br />
              </span>
              <b>
                A Safe Space When Home is Uncertain
                <br />
              </b>
              <span>
                For some children, home can be a place of tension, instability,
                or trauma. Our nursery provides a consistent, predictable, and
                emotionally safe environment where every child is welcomed,
                valued, and protected. For children navigating difficult
                circumstances at home, the nursery can be a lifeline, a place
                where they feel seen, heard, and cared for.
                <br />
                <br />
                Our educators are trained in trauma-informed approaches, enabling
                them to support children who may be carrying emotional burdens
                beyond their years. Through patient, attentive care, we help
                children to process their experiences and build the resilience
                they need to face life's challenges with hope rather than fear.
                <br />
                <br />
              </span>
              <b>
                Looking Forward Together
                <br />
              </b>
              <span>
                At Aspire Rwanda, we believe that early childhood education is
                one of the most powerful tools we have for breaking cycles of
                poverty and building more equitable futures. Our holistic
                approach, one that reaches beyond the classroom to support
                families, health, and community, is how we ensure that our
                impact is deep, lasting, and real.
                <br />
                <br />
                Every child who passes through our doors is not just learning
                their letters and numbers. They are discovering who they are,
                building the confidence to dream, and taking their first steps
                toward a future that holds genuine possibility.
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

export default Blog3;
