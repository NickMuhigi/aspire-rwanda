"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./space-details.module.css";

export type SpaceDetailsType = {
  className?: string;
  communitySupportSpaces?: string;
  weCreatedSafeSpacesWhereWomen?: string;

  /** Style props */
  skillsProgrammePadding?: CSSProperties["padding"];
  communitySupportSpacesWidth?: CSSProperties["width"];
  weCreatedSafeHeight?: CSSProperties["height"];
};

const SpaceDetails: NextPage<SpaceDetailsType> = ({
  className = "",
  skillsProgrammePadding,
  communitySupportSpaces,
  communitySupportSpacesWidth,
  weCreatedSafeSpacesWhereWomen,
  weCreatedSafeHeight,
}) => {
  const skillsProgrammeStyle: CSSProperties = useMemo(() => {
    return {
      padding: skillsProgrammePadding,
    };
  }, [skillsProgrammePadding]);

  const communitySupportSpacesStyle: CSSProperties = useMemo(() => {
    return {
      width: communitySupportSpacesWidth,
    };
  }, [communitySupportSpacesWidth]);

  const weCreatedSafeStyle: CSSProperties = useMemo(() => {
    return {
      height: weCreatedSafeHeight,
    };
  }, [weCreatedSafeHeight]);

  return (
    <section className={[styles.spaceDetails, className].join(" ")}>
      <div className={styles.skillsProgramme} style={skillsProgrammeStyle}>
        <div className={styles.skillsProgrammeChild} />
        <h2
          className={styles.communitySupportSpaces}
          style={communitySupportSpacesStyle}
        >
          {communitySupportSpaces}
        </h2>
        <div className={styles.weCreatedSafe} style={weCreatedSafeStyle}>
          {weCreatedSafeSpacesWhereWomen}
        </div>
      </div>
    </section>
  );
};

export default SpaceDetails;
