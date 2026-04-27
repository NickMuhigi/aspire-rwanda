"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./month-container.module.css";

export type MonthContainerType = {
  className?: string;
  jan?: string;

  /** Style props */
  monthContainerPadding?: CSSProperties["padding"];
  dateLabelWidth?: CSSProperties["width"];
  dateLabelPadding?: CSSProperties["padding"];
  janContainerWidth?: CSSProperties["width"];
  janMinWidth?: CSSProperties["minWidth"];
};

const MonthContainer: NextPage<MonthContainerType> = ({
  className = "",
  monthContainerPadding,
  dateLabelWidth,
  dateLabelPadding,
  janContainerWidth,
  jan,
  janMinWidth,
}) => {
  const monthContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: monthContainerPadding,
    };
  }, [monthContainerPadding]);

  const dateLabelStyle: CSSProperties = useMemo(() => {
    return {
      width: dateLabelWidth,
      padding: dateLabelPadding,
    };
  }, [dateLabelWidth, dateLabelPadding]);

  const janContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: janContainerWidth,
    };
  }, [janContainerWidth]);

  const janStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: janMinWidth,
    };
  }, [janMinWidth]);

  return (
    <div
      className={[styles.monthContainer, className].join(" ")}
      style={monthContainerStyle}
    >
      <div className={styles.monthContainerChild} />
      <div className={styles.dateLabel} style={dateLabelStyle}>
        <div className={styles.th}>30th</div>
      </div>
      <div className={styles.janContainer} style={janContainerStyle}>
        <h2 className={styles.jan} style={janStyle}>
          {jan}
        </h2>
      </div>
      <h3 className={styles.janSplit}>2026</h3>
    </div>
  );
};

export default MonthContainer;
