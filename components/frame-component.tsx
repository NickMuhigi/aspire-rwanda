"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  programsThatLeaveNoOneBehind?: string;
  initiativesReachVulnerable?: string;
  iconSrc?: string;
  useReducedIcon?: boolean;
  useFixedIconContainer?: boolean;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivWidth?: CSSProperties["width"];
  communityAreaMinWidth?: CSSProperties["minWidth"];
  programsThatLeaveWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameDivFlex,
  frameDivMinWidth,
  frameDivWidth,
  communityAreaMinWidth,
  programsThatLeaveNoOneBehind,
  programsThatLeaveWidth,
  initiativesReachVulnerable,
  iconSrc = "/First-Container.svg",
  useReducedIcon = false,
  useFixedIconContainer = false,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
      width: frameDivWidth,
    };
  }, [frameDivFlex, frameDivMinWidth, frameDivWidth]);

  const communityAreaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: communityAreaMinWidth,
    };
  }, [communityAreaMinWidth]);

  const programsThatLeaveStyle: CSSProperties = useMemo(() => {
    return {
      width: programsThatLeaveWidth,
    };
  }, [programsThatLeaveWidth]);

  const iconContainerClassName = useFixedIconContainer
    ? `${styles.overAllImpact} ${styles.overAllImpactFixed}`
    : styles.overAllImpact;

  const iconClassName = useReducedIcon
    ? `${styles.firstContainerIcon} ${styles.firstContainerIconReduced}`
    : styles.firstContainerIcon;

  const iconWidth = useReducedIcon ? 27 : 53;
  const iconHeight = useReducedIcon ? 22 : 48;

  return (
    <div
      className={[styles.overAllImpactParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={iconContainerClassName}>
        <div className={styles.overAllImpactChild} />
        <Image
          className={iconClassName}
          loading="lazy"
          width={iconWidth}
          height={iconHeight}
          sizes="100vw"
          alt=""
          src={iconSrc}
        />
      </div>
      <div className={styles.communityArea} style={communityAreaStyle}>
        <div className={styles.behindImpact}>
          <h2
            className={styles.programsThatLeave}
            style={programsThatLeaveStyle}
          >
            {programsThatLeaveNoOneBehind}
          </h2>
          <div className={styles.initiativesReachVulnerable}>
            {initiativesReachVulnerable}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
