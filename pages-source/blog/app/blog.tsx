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
        alt=""
        src="/Rectangle-264@2x.png"
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
