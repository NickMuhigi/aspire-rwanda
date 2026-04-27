import type { NextPage } from "next";
import Image from "next/image";
import styles from "./program-dates-container.module.css";

export type ProgramDatesContainerType = {
  className?: string;
  program?: string;
  allPrograms?: string;
};

const ProgramDatesContainer: NextPage<ProgramDatesContainerType> = ({
  className = "",
  program,
  allPrograms,
}) => {
  return (
    <div className={[styles.programDatesContainer, className].join(" ")}>
      <div className={styles.program}>{program}</div>
      <div className={styles.frameParent}>
        <div className={styles.allProgramsParent}>
          <div className={styles.allPrograms}>{allPrograms}</div>
          <div className={styles.expandArrowWrapper}>
            <Image
              className={styles.expandArrowIcon}
              width={21}
              height={33}
              sizes="100vw"
              alt=""
              src="/Expand-Arrow@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default ProgramDatesContainer;
