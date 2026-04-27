import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle266: string;
  title: string;
  href: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangle266,
  title,
  href,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <Image
        className={styles.frameChild}
        width={318}
        height={171}
        sizes="100vw"
        alt=""
        src={rectangle266}
      />
      <div className={styles.frameWrapper}>
        <Link href={href} className={styles.frameParent}>
          <div className={styles.insideTheNursery}>{title}</div>
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
  );
};

export default FrameComponent;
