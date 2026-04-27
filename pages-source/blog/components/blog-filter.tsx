"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog-filter.module.css";

const ALL_BLOGS = [
  {
    title: "Inside the Nursery Experience: Nurturing Curiosity, Creativity, and Confidence in Young Learners.",
    href: "/blog-1",
    category: "Nursery",
    date: "2026-04-18",
    image: "/N.jpg",
  },
  {
    title: "Skills for Life: How Aspire Rwanda's TVET Sponsorship Programme is Shaping Rwanda's Next Generation.",
    href: "/blog-4",
    category: "TVET",
    date: "2026-04-10",
    image: "/WhatsApp Image 2026-04-25 at 7.15.29 PM.jpg",
  },
  {
    title: "More Than a Trade: Life Skills and Entrepreneurship at the Heart of Aspire Rwanda's TVET.",
    href: "/blog-5",
    category: "TVET",
    date: "2026-03-28",
    image: "/Gemini_Generated_Image_iyjmbaiyjmbaiyjm (1).png",
  },
  {
    title: "The First Steps Matter: Building Lifelong Confidence Through Early Education at Aspire Rwanda.",
    href: "/blog-2",
    category: "Nursery",
    date: "2026-03-15",
    image: "/602caa5a97eb4428ab65ede9ac99aaf6.png",
  },
  {
    title: "How Female Participants Are Finding Independence Through Aspire Rwanda's TVET.",
    href: "/blog-6",
    category: "TVET",
    date: "2026-02-20",
    image: "/Gemini_Generated_Image_8rpsru8rpsru8rps (1).png",
  },
  {
    title: "Care That Goes Beyond the Classroom: Aspire Rwanda's Holistic Approach to Early Childhood.",
    href: "/blog-3",
    category: "Nursery",
    date: "2026-01-25",
    image: "/Gemini_Generated_Image_nzsmhdnzsmhdnzsm (1).png",
  },
];

export default function BlogFilter() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [program, setProgram] = useState("All programs");
  const [dateSort, setDateSort] = useState("Newest");
  const [activeSearch, setActiveSearch] = useState("");
  const [activeProgram, setActiveProgram] = useState("All programs");
  const [activeDateSort, setActiveDateSort] = useState("Newest");

  function applyFilter() {
    setActiveSearch(search);
    setActiveProgram(program);
    setActiveDateSort(dateSort);
  }

  const results = ALL_BLOGS
    .filter((b) => activeProgram === "All programs" || b.category === activeProgram)
    .filter((b) => !activeSearch || b.title.toLowerCase().includes(activeSearch.toLowerCase()))
    .sort((a, b) =>
      activeDateSort === "Newest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  return (
    <div className={styles.wrapper}>
      {/* ── Mobile filter toggle (hidden on desktop) ── */}
      <button
        className={styles.filterToggle}
        onClick={() => setFilterOpen((o) => !o)}
      >
        <span>Filter</span>
        <span className={styles.toggleArrow}>{filterOpen ? "▲" : "▼"}</span>
      </button>

      {/* ── Search / filter panel ── */}
      <aside className={`${styles.filterPanel}${filterOpen ? " " + styles.filterPanelOpen : ""}`}>
        <div className={styles.searchBox}>
          <div className={styles.searchBoxInner}>
            <div className={styles.searchPrompt}>
              <input
                className={styles.searchHere}
                type="text"
                placeholder="SEARCH HERE ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Image
              className={styles.searchIcon}
              src="/Search@2x.png"
              width={28}
              height={29}
              alt=""
            />
          </div>
        </div>
        <div className={styles.filterInner}>

          {/* Program */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Program</label>
            <div className={styles.selectRow}>
              <select
                className={styles.select}
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="All programs">All programs</option>
                <option value="Nursery">Nursery</option>
                <option value="TVET">TVET</option>
              </select>
              <Image
                className={styles.arrow}
                src="/Expand-Arrow@2x.png"
                width={21}
                height={33}
                alt=""
              />
            </div>
            <div className={styles.divider} />
          </div>

          {/* Dates */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Dates</label>
            <div className={styles.selectRow}>
              <select
                className={styles.select}
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Older">Older</option>
              </select>
              <Image
                className={styles.arrow}
                src="/Expand-Arrow@2x.png"
                width={21}
                height={33}
                alt=""
              />
            </div>
            <div className={styles.divider} />
          </div>

          {/* Submit */}
          <div className={styles.submitWrap}>
            <button className={styles.submitButton} type="button" onClick={applyFilter}>
              <span className={styles.submitText}>Submit</span>
              <Image
                className={styles.submitArrow}
                width={22}
                height={14.7}
                sizes="100vw"
                alt=""
                src="/Arrow-29.svg"
              />
            </button>
          </div>

        </div>
      </aside>

      {/* ── Blog card list ── */}
      <div className={styles.results}>
        {results.length === 0 ? (
          <p className={styles.empty}>No posts found.</p>
        ) : (
          results.map((blog) => (
            <div key={blog.href} className={styles.card}>
              <Link href={blog.href} className={styles.cardImageLink}>
                <Image
                  className={styles.cardImage}
                  width={636}
                  height={342}
                  sizes="(max-width: 750px) 100vw, 318px"
                  quality={90}
                  alt=""
                  src={blog.image}
                />
              </Link>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{blog.category}</span>
                <Link href={blog.href} className={styles.cardLink}>
                  <div className={styles.cardTitle}>{blog.title}</div>
                  <Image
                    className={styles.cardArrow}
                    width={140}
                    height={15}
                    sizes="100vw"
                    alt=""
                    src="/Arrow-29-blue-long.svg"
                  />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
