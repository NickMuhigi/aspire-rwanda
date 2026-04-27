import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const BLOGS = [
  {
    title: "Care That Goes Beyond the Classroom: Aspire Rwanda's Holistic Approach to Early Childhood.",
    href: "/blog-3",
  },
  {
    title: "Skills for Life: How Aspire Rwanda's TVET Programme is Shaping Rwanda's Next Generation.",
    href: "/blog-4",
  },
  {
    title: "More Than a Trade: Life Skills and Entrepreneurship at the Heart of Aspire Rwanda's TVET.",
    href: "/blog-5",
  },
  {
    title: "How Female Participants Are Finding Independence Through Aspire Rwanda's TVET.",
    href: "/blog-6",
  },
];

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.allPostsContainerWrapper, className].join(" ")}>
      <div className={styles.allPostsContainer}>
        <div className={styles.blogPostEntries}>
          {BLOGS.map((blog, i) => (
            <FrameComponent
              key={i}
              rectangle266="/Exploration-Image@2x.png"
              title={blog.title}
              href={blog.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
