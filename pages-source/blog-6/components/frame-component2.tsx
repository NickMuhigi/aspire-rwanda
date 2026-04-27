"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const MORE_BLOGS = [
  {
    category: "Skills",
    src: "/Rectangle 265.png",
    title: "Skills for Life: How Aspire Rwanda's TVET Sponsorship Programme is Shaping Rwanda's Next Generation.",
    excerpt: "Aspire Rwanda's TVET programme gives young Rwandans the practical tools and professional grounding they need to step confidently into the world of work.",
    href: "/blog-4",
  },
  {
    category: "Skills",
    src: "/Rectangle 266.png",
    title: "More Than a Trade: Life Skills and Entrepreneurship at the Heart of Aspire Rwanda's TVET.",
    excerpt: "Aspire Rwanda's TVET programme delivers more than technical training, it equips young people with the mindset, habits, and entrepreneurial thinking to build lasting careers.",
    href: "/blog-5",
  },
  {
    category: "Education",
    src: "/Rectangle 269.png",
    title: "Care That Goes Beyond the Classroom: Aspire Rwanda's Holistic Approach to Early Childhood.",
    excerpt: "True development in early childhood cannot happen in isolation. Our nursery programme extends its reach far beyond classroom walls to support the entire family.",
    href: "/blog-3",
  },
];

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.readMoreSection, className].join(" ")}>
      <div className={styles.inner}>
        <div className={styles.sectionTop}>
          <h2 className={styles.heading}>Read More</h2>
          <div className={styles.headingRule} />
        </div>
        <div className={styles.cardsGrid}>
          {MORE_BLOGS.map((post, i) => (
            <Link key={i} href={post.href} className={styles.card}>
              <span className={styles.category}>{post.category}</span>
              <div className={styles.imgWrap}>
                <Image
                  className={styles.img}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt=""
                  src={post.src}
                  loading="lazy"
                />
              </div>
              <div className={styles.textBlock}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.footerRule} />
          <Link href="/blog" className={styles.seeMore}>
            See More Stories
            <Image
              className={styles.seeMoreArrow}
              width={20}
              height={13}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
