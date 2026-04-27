import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgramDatesContainer from "./program-dates-container";
import styles from "./search-area-container.module.css";

export type SearchAreaContainerType = {
  className?: string;
};

const SearchAreaContainer: NextPage<SearchAreaContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.searchAreaContainer, className].join(" ")}>
      <div className={styles.searchColumn}>
        <div className={styles.searchFields}>
          <div className={styles.searchFieldsChild} />
          <div className={styles.searchBox}>
            <div className={styles.searchBoxChild} />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.searchPrompt}>
                <div className={styles.searchHere}>SEARCH HERE ...</div>
              </div>
              <Image
                className={styles.searchIcon}
                width={28}
                height={29}
                sizes="100vw"
                alt=""
                src="/Search@2x.png"
              />
            </div>
          </div>
          <div className={styles.programListWrapper}>
            <div className={styles.programList}>
              <ProgramDatesContainer
                program="Program"
                allPrograms="All programs"
              />
              <ProgramDatesContainer program="Dates" allPrograms="Newest" />
            </div>
          </div>
          <div className={styles.submitAreaWrapper}>
            <button className={styles.submitButton} type="button">
              <span className={styles.submit}>Submit</span>
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
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <Image
            className={styles.frameItem}
            width={318}
            height={171}
            sizes="100vw"
            alt=""
            src="/Exploration-Image@2x.png"
          />
          <Image
            className={styles.frameItem}
            width={318}
            height={171}
            sizes="100vw"
            alt=""
            src="/Exploration-Image@2x.png"
          />
        </div>
        <div className={styles.postListing}>
          <div className={styles.postItems}>
            <div className={styles.postContent}>
              <Link href="/blog-1" className={styles.postDetails}>
                <div className={styles.insideTheNursery}>
                  Inside the Nursery Experience: Nurturing Curiosity,
                  Creativity, and Confidence in Young Learners.
                </div>
                <Image
                  className={styles.postDetailsChild}
                  width={140}
                  height={15}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue-long.svg"
                />
              </Link>
            </div>
            <div className={styles.postContent}>
              <Link href="/blog-2" className={styles.postDetails}>
                <div className={styles.insideTheNursery}>
                  The First Steps Matter: Building Lifelong Confidence Through
                  Early Education at Aspire Rwanda.
                </div>
                <Image
                  className={styles.postDetailsChild}
                  width={140}
                  height={15}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29-blue-long.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAreaContainer;
