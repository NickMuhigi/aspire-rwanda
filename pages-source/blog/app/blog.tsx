import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/header";
import BlogFilter from "../components/blog-filter";
import GroupComponent from "../components/group-component";
import styles from "./blog.module.css";

const Blog: NextPage = () => {
  return (
    <div className={styles.blog}>
      <Header />
      <Image
        className={styles.blogChild}
        width={1440}
        height={424}
        sizes="100vw"
        quality={100}
        alt=""
        src="/WhatsApp Image 2026-05-04 at 11.11.40 AM.jpg"
      />
      <div className={styles.blogInner}>
        <div className={styles.updatesContainerParent}>
          <div className={styles.updatesContainer}>
            <b className={styles.latestUpdates}>LATEST UPDATES</b>
          </div>
          <BlogFilter />
        </div>
      </div>
      <GroupComponent />
    </div>
  );
};

export default Blog;
