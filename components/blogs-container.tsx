import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogs-container.module.css";

export type BlogsContainerType = {
  className?: string;
};

const FEATURED_BLOGS = [
  {
    href: "/blog-1",
    src: "/N.jpg",
    alt: "Nursery school children",
    title: "Inside the Nursery Experience: Nurturing Curiosity, Creativity, and Confidence in Young Learners.",
    titleClass: "whyInvestingIn",
    itemClass: "blogItemLeft",
  },
  {
    href: "/blog-4",
    src: "/WhatsApp Image 2026-04-25 at 7.15.29 PM.jpg",
    alt: "TVET programme students",
    title: "How Aspire Rwanda's TVET Programme is Shaping Rwanda's Next Generation.",
    titleClass: "howEmpoweringYouth",
    itemClass: "blogItemMiddle",
  },
  {
    href: "/blog-6",
    src: "/Gemini_Generated_Image_8rpsru8rpsru8rps (1).png",
    alt: "Female TVET participants",
    title: "How Female Participants Are Finding Independence Through Aspire Rwanda's TVET.",
    titleClass: "storiesFromThe",
    itemClass: "blogItemRight",
  },
];

const BlogsContainer: NextPage<BlogsContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.blogsContainer, className].join(" ")}>
      <div className={styles.blogsBlock}>
        <div className={styles.blogsHeader}>
          <div className={styles.blogsLabel}>
            <div className={styles.blogMain}>
              <div className={styles.blogMainChild} />
              <h2 className={styles.blogs}>Blogs</h2>
            </div>
          </div>
          <h2 className={styles.recentBlogs}>Recent Blogs</h2>
        </div>
        <div className={styles.blogsEntries}>
          {FEATURED_BLOGS.map((post, i) => (
            <div key={i} className={styles.blogEntry}>
              <div className={styles.blogImgWrap}>
                <Image
                  fill
                  sizes="(max-width: 800px) 150px, 400px"
                  quality={90}
                  alt={post.alt}
                  src={post.src}
                  className={styles.blogImg}
                />
              </div>
              <div className={styles[post.itemClass]}>
                <Link href={post.href} className={styles[post.titleClass]}>
                  {post.title}
                </Link>
                <Image
                  className={styles.blogArrow}
                  width={140}
                  height={15}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue-long.svg"
                />
              </div>
            </div>
          ))}
        </div>
        <section className={styles.blogNavigation}>
          <div className={styles.frameParent}>
            <div className={styles.moreBlogsGrid}>
              <div className={styles.moreBlogsSpacer} />
              <div className={styles.moreBlogsContainer}>
                <Link href="/blog" className={styles.linkButton}>
                  <span className={styles.moreBlogs}>More Blogs</span>
                  <Image
                    className={styles.moreBlogsArrow}
                    width={21}
                    height={14.7}
                    sizes="100vw"
                    alt=""
                    src="/Arrow-29.svg"
                  />
                </Link>
              </div>
              <div className={styles.moreBlogsSpacer} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogsContainer;
