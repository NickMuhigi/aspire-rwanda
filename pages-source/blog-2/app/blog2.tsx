import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog2.module.css";

const Blog2: NextPage = () => {
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
            src="/602caa5a97eb4428ab65ede9ac99aaf6.png"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                Why Early Years Matter Most
                <br />
              </b>
              <span>
                Research consistently shows that the first five years of a
                child's life are the most critical window for brain development.
                During this period, children form the neural pathways that will
                shape their ability to learn, regulate emotions, and build
                relationships for the rest of their lives. For children growing
                up in poverty or instability, access to quality early childhood
                education can be the single most powerful intervention available.
                <br />
                <br />
                At Aspire Rwanda, we take this responsibility seriously. Our
                nursery programme is intentionally designed around the science of
                early development, ensuring that every child who comes through
                our doors receives the stimulation, care, and encouragement they
                need to thrive.
                <br />
                <br />
              </span>
              <b>
                A Structured Day Built Around Discovery
                <br />
              </b>
              <span>
                Routine is essential for young children. It provides a sense of
                security, builds self-regulation, and creates a predictable
                rhythm that allows learning to flourish. At Aspire Rwanda, each
                day is carefully structured to balance guided learning with free
                exploration.
                <br />
                <br />
                Children begin with morning circle time, where they greet one
                another, sing songs, and discuss the day ahead. This is followed
                by focused learning activities, phonics, numeracy, and language
               , before a period of guided play that allows children to apply
                what they've learned in creative, open-ended ways. Rest,
                nutrition, and outdoor activity are woven throughout the day to
                support physical as well as cognitive development.
                <br />
                <br />
              </span>
              <b>
                The Role of Play in Early Development
                <br />
              </b>
              <span>
                Play is not the opposite of learning, it is one of its most
                powerful forms. When children engage in play, they practice
                language, negotiate with peers, solve problems, and build
                emotional resilience. At Aspire Rwanda, we never treat play as
                optional or supplementary. It is central to everything we do.
                <br />
                <br />
                Our classrooms are stocked with locally made toys, puzzles, and
                materials that invite exploration. Teachers facilitate without
                directing, asking questions that stretch children's thinking and
                deepen their understanding. Through play, children discover that
                learning is not something that happens to them, it is something
                they actively do.
                <br />
                <br />
              </span>
              <b>
                Language, Literacy, and Listening
                <br />
              </b>
              <span>
                Strong communication skills are foundational to every aspect of
                a child's future. Children who enter primary school with a rich
                vocabulary and basic literacy skills are significantly more
                likely to succeed academically and socially. At Aspire Rwanda,
                language development is embedded in every part of the day.
                <br />
                <br />
                Teachers read aloud to children daily, modelling fluency,
                expression, and comprehension. Children are encouraged to tell
                stories, ask questions, and describe their experiences. Through
                songs, rhymes, and group discussions, they build phonological
                awareness and a love of language that stays with them long after
                they leave our nursery.
                <br />
                <br />
              </span>
              <b>
                Nurturing Emotional Intelligence
                <br />
              </b>
              <span>
                Intellectual development without emotional awareness leaves
                children ill-equipped for the complexities of life. At Aspire
                Rwanda, we give equal attention to helping children understand
                and manage their feelings, a skill that research increasingly
                identifies as a stronger predictor of life success than cognitive
                ability alone.
                <br />
                <br />
                Children learn to name their emotions, to pause before reacting,
                and to empathise with the experiences of others. Conflict
                resolution is taught through gentle facilitation, helping
                children develop the tools they need to navigate relationships
                with confidence and care.
                <br />
                <br />
              </span>
              <b>
                A Foundation That Lasts
                <br />
              </b>
              <span>
                The impact of a strong early education reaches far beyond primary
                school. Children who receive quality early childhood support are
                more likely to complete secondary school, earn stable incomes,
                and raise healthier families of their own. At Aspire Rwanda, we
                are not just investing in childhood, we are investing in the
                long-term future of Rwanda.
                <br />
                <br />
                Every child who walks out of our nursery carries with them the
                seeds of confidence, curiosity, and capability. Those seeds,
                carefully planted and tended in the earliest years, have the
                power to grow into something truly remarkable.
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

export default Blog2;
