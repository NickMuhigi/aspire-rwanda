"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle279: string;
  cHILDRENs?: string;
  aSPIRENURSERYSCHOOL?: string;
  subtract: string;
  href?: string;

  /** Style props */
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
  cHILDRENsWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameDivBackgroundImage,
  rectangle279,
  cHILDRENs,
  cHILDRENsWidth,
  aSPIRENURSERYSCHOOL,
  href,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  const cHILDRENsStyle: CSSProperties = useMemo(() => {
    return {
      width: cHILDRENsWidth,
    };
  }, [cHILDRENsWidth]);

  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDivStyle}>
        <Image
          className={styles.frameItem}
          width={563}
          height={464}
          sizes="100vw"
          alt=""
          src={rectangle279}
        />
        <div className={styles.childrensParent}>
          <h1 className={styles.childrens} style={cHILDRENsStyle}>
            {cHILDRENs}
          </h1>
          <div className={styles.aspireNurserySchool}>
            {aSPIRENURSERYSCHOOL}
          </div>
        </div>
        {href ? (
          <Link href={href} className={styles.readMoreParent}>
            <span className={styles.readMore}>Read More</span>
            <Image
              className={styles.readMoreArrow}
              width={22}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </Link>
        ) : (
          <button className={styles.readMoreParent} type="button">
            <span className={styles.readMore}>Read More</span>
            <Image
              className={styles.readMoreArrow}
              width={22}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default FrameComponent;
