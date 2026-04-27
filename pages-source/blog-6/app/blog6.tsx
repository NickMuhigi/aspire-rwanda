import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import styles from "./blog6.module.css";

const Blog6: NextPage = () => {
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
            src="/Gemini_Generated_Image_8rpsru8rpsru8rps (1).png"
          />
          <div className={styles.aSafeSpaceForExplorationCWrapper}>
            <div className={styles.aSafeSpaceContainer}>
              <b>
                The Challenges Women Face in Accessing Skills Training
                <br />
              </b>
              <span>
                In many communities across Rwanda, structural barriers continue
                to limit women's access to vocational education and economic
                opportunity. These barriers are rarely dramatic or explicit , 
                they are woven into the fabric of daily life: the expectation
                that women will prioritise household responsibilities over
                professional development, the lack of safe transport to training
                centres, the absence of childcare that makes full-time study
                impossible, and the deep-seated belief, held by women
                themselves as much as by anyone else, that certain trades and
                professions are simply not for them.
                <br />
                <br />
                At Aspire Rwanda, we believe that addressing these barriers is
                not optional. It is central to our mission. A TVET programme
                that does not actively work to include women is a programme that
                leaves half of its potential impact on the table.
                <br />
                <br />
              </span>
              <b>
                Creating a Safe and Supportive Environment
                <br />
              </b>
              <span>
                When women and girls feel safe, physically, emotionally, and
                socially, they are far more able to learn, take risks, and
                grow. Aspire Rwanda is deliberate about creating that environment
                within our TVET programme.
                <br />
                <br />
                We work with training partners who understand the importance of
                gender-sensitive pedagogy. We ensure that women are supported
                by female mentors and staff members who can speak to their
                specific experiences. We address attitudes that could undermine
                women's confidence or sense of belonging, among participants
                as well as trainers. And we create space for women to share
                their challenges with one another, building the peer networks
                that are so essential to sustained participation and eventual
                success.
                <br />
                <br />
              </span>
              <b>
                Skills That Open Doors
                <br />
              </b>
              <span>
                The trades available through Aspire Rwanda's TVET programme
                represent genuine pathways to economic independence for women.
                Tailoring, catering, and beauty therapy offer flexible,
                self-employment opportunities that women can structure around
                their family responsibilities. Electrical installation and
                plumbing, trades that women have historically been discouraged
                from entering, are fields where skilled practitioners are in
                high demand and where female professionals are increasingly
                valued and sought after.
                <br />
                <br />
                For many of the women who join our programme, completing their
                certification is the first time in their lives they have had
                formal, documented proof of their competence. That certificate
                is more than a piece of paper, it is evidence of what they are
                capable of, and a foundation on which to build a future defined
                by their own choices.
                <br />
                <br />
              </span>
              <b>
                Beyond the Classroom: Building Confidence and Agency
                <br />
              </b>
              <span>
                Technical skills and professional confidence are not the only
                things women gain from Aspire Rwanda's TVET programme. Many
                participants describe a deeper shift in how they see themselves
                and what they believe they deserve.
                <br />
                <br />
                Women who enter the programme often struggle with self-doubt
                and a sense of worthlessness shaped by years of limited
                opportunity and, in some cases, difficult personal circumstances.
                Through the combination of skills training, life skills
                education, and peer community, they discover a sense of agency
               , an understanding that they are not simply subject to the
                circumstances of their lives, but active participants in shaping
                them.
                <br />
                <br />
              </span>
              <b>
                Stories of Transformation
                <br />
              </b>
              <span>
                The impact of our work with women in TVET is best understood
                through the lives it has changed. Women who arrived at our
                programme uncertain and afraid have left it with qualifications,
                business plans, and an entirely new sense of their own
                possibilities. Mothers who feared their children would repeat
                their own cycle of missed opportunity have found ways to invest
                in their families' futures while building something of their own.
                <br />
                <br />
                These transformations are not just personal victories, they are
                proof that when women are genuinely supported to access skills
                and economic opportunity, entire communities change for the
                better.
                <br />
                <br />
              </span>
              <b>
                Our Commitment to Gender-Inclusive TVET
                <br />
              </b>
              <span>
                Aspire Rwanda remains committed to ensuring that gender equity
                is not a peripheral concern in our TVET programme, but a
                foundational principle. We continue to refine our approach,
                learn from the women we serve, and advocate for the systemic
                changes that will make quality vocational training accessible
                to every woman and girl who seeks it.
                <br />
                <br />
                Because when women rise, they rarely rise alone. They bring
                their children, their families, and their communities with them.
                That is the kind of change we are working toward, and the kind
                of future we believe is possible.
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

export default Blog6;
