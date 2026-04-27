"use client";

import { useCallback, useState, useEffect, type FormEvent } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component1.module.css";
import DonateModal from "./donate-modal";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const [searchText, setSearchText] = useState("");
  const [donateOpen, setDonateOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const query = searchText.trim();
      if (!query || typeof window === "undefined") return;
      const found = (window as any).find?.(query);
      if (!found) window.alert(`No results found for "${query}" on this page.`);
    },
    [searchText]
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutExpanded(false);
    setWorkExpanded(false);
  };

  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />

        <div className={styles.logoAndNav}>
          <div className={styles.frameWrapper}>
            <div className={styles.logo3Parent}>
              <Link href="/" className={styles.logoLink} aria-label="Go to homepage" onClick={closeMenu}>
                <Image
                  className={styles.logo3Icon}
                  loading="lazy"
                  width={118}
                  height={51}
                  sizes="100vw"
                  alt="Aspire Rwanda"
                  src="/Logo-3@2x.png"
                />
              </Link>
              <div className={styles.lineWrapper}>
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>

          <nav className={styles.mainNav} aria-label="Primary navigation">
            <Link href="/" className={styles.navLink}>HOME</Link>

            <div className={styles.navDropdown}>
              <button type="button" className={styles.navTrigger}>
                <span>ABOUT</span>
                <span className={styles.navCaret} aria-hidden="true" />
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="/about-ar" className={styles.dropdownItem}>WHO WE ARE</Link>
                <Link href="/our-past" className={styles.dropdownItem}>OUR PAST</Link>
              </div>
            </div>

            <div className={styles.navDropdown}>
              <button type="button" className={styles.navTrigger}>
                <span>WORK</span>
                <span className={styles.navCaret} aria-hidden="true" />
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="/nursery" className={styles.dropdownItem}>ASPIRE NURSERY SCHOOL</Link>
                <Link href="/tvet" className={styles.dropdownItem}>TVET SPONSORSHIP PROGRAMME</Link>
              </div>
            </div>

            <Link href="/blog" className={styles.navLink}>BLOG</Link>
            <Link href="/contact" className={styles.navLink}>CONTACT</Link>
          </nav>
        </div>

        <div className={styles.frameParent3}>
          <form className={styles.lineParent} onSubmit={handleSearch}>
            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="SEARCH HERE..."
                aria-label="Search text on this page"
              />
              <button type="submit" className={styles.searchButton} aria-label="Search">
                <Image
                  className={styles.searchIcon2}
                  width={23}
                  height={23}
                  sizes="100vw"
                  alt=""
                  src="/Search@2x.png"
                />
              </button>
            </div>
          </form>

          <button className={styles.rectangleGroup} onClick={() => setDonateOpen(true)}>
            <div className={styles.rectangleDiv} />
            <b className={styles.donate2}>DONATE</b>
          </button>
        </div>

        {/* Mobile right — DONATE + hamburger, mobile only */}
        <div className={styles.mobileRight}>
          <button className={styles.mobileDonateCta} onClick={() => setDonateOpen(true)}>
            DONATE
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
        </div>

        {donateOpen && <DonateModal onClose={() => setDonateOpen(false)} />}
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className={styles.mobileMenu} aria-label="Mobile navigation">
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>HOME</Link>

            <div className={styles.mobileNavSection}>
              <button
                className={styles.mobileNavToggle}
                onClick={() => setAboutExpanded((o) => !o)}
                aria-expanded={aboutExpanded}
              >
                <span>ABOUT</span>
                <span className={`${styles.mobileNavChevron}${aboutExpanded ? " " + styles.mobileNavChevronOpen : ""}`} />
              </button>
              {aboutExpanded && (
                <div className={styles.mobileSubLinks}>
                  <Link href="/about-ar" className={styles.mobileNavSub} onClick={closeMenu}>WHO WE ARE</Link>
                  <Link href="/our-past" className={styles.mobileNavSub} onClick={closeMenu}>OUR PAST</Link>
                </div>
              )}
            </div>

            <div className={styles.mobileNavSection}>
              <button
                className={styles.mobileNavToggle}
                onClick={() => setWorkExpanded((o) => !o)}
                aria-expanded={workExpanded}
              >
                <span>WORK</span>
                <span className={`${styles.mobileNavChevron}${workExpanded ? " " + styles.mobileNavChevronOpen : ""}`} />
              </button>
              {workExpanded && (
                <div className={styles.mobileSubLinks}>
                  <Link href="/nursery" className={styles.mobileNavSub} onClick={closeMenu}>ASPIRE NURSERY SCHOOL</Link>
                  <Link href="/tvet" className={styles.mobileNavSub} onClick={closeMenu}>TVET SPONSORSHIP PROGRAMME</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>BLOG</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>CONTACT</Link>
            <button
              className={styles.mobileNavDonate}
              onClick={() => { setDonateOpen(true); closeMenu(); }}
            >
              DONATE
            </button>
          </nav>
        </div>
      )}
    </section>
  );
};

export default FrameComponent1;
