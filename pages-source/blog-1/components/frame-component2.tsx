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
    category: "Education",
    src: "/Rectangle 267.png",
    title:
      "The First Steps Matter: Building Lifelong Confidence Through Early Education at Aspire Rwanda.",
    excerpt:
      "Research shows the first five years are the most critical window for development. Aspire Rwanda's nursery programme is designed to make every one of those years count.",
    href: "/blog-2",
  },
  {
    category: "Skills",
    src: "/Rectangle 265.png",
    title:
      "Skills for Life: How Aspire Rwanda's TVET Sponsorship Programme is Shaping Rwanda's Next Generation.",
    excerpt:
      "Aspire Rwanda's TVET programme gives young Rwandans the practical tools and professional grounding they need to step confidently into the world of work.",
    href: "/blog-4",
  },
  {
    category: "Skills",
    src: "/Rectangle 268.png",
    title:
      "How Female Participants Are Finding Independence Through Aspire Rwanda's TVET.",
    excerpt:
      "Aspire Rwanda's TVET programme is breaking down barriers for women and girls, providing practical skills that translate into genuine economic independence.",
    href: "/blog-6",
  },
];

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.readMoreSection, className].join(" ")}>
      <div className={styles.inner}>

        {/* ── Section heading ── */}
        <div className={styles.sectionTop}>
          <h2 className={styles.heading}>Read More</h2>
          <div className={styles.headingRule} />
        </div>

        {/* ── Cards ── */}
        <div className={styles.cardsGrid}>
          {MORE_BLOGS.map((post, i) => (
            <Link key={i} href={post.href} className={styles.card}>

              {/* Category — sits above the image */}
              <span className={styles.category}>{post.category}</span>

              {/* Image */}
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

              {/* Text */}
              <div className={styles.textBlock}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>

            </Link>
          ))}
        </div>

        {/* ── Footer CTA ── */}
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
