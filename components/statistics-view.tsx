"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import SkilledSet from "./skilled-set";
import DonateButton from "./donate-button";
import styles from "./statistics-view.module.css";

export type StatisticsViewType = {
  className?: string;
};

const StatisticsView: NextPage<StatisticsViewType> = ({ className = "" }) => {
  const [skilledSetItems] = useState([
    {
      skilledSetWidth: undefined,
      skilledSetPadding: undefined,
      emptySymbol: "300+",
      emptySymbolWidth: undefined,
      womenTrainedInLifeAndVocationa: "children and youth involved",
    },
    {
      skilledSetWidth: undefined,
      skilledSetPadding: undefined,
      emptySymbol: "55:45",
      emptySymbolWidth: undefined,
      womenTrainedInLifeAndVocationa: "boy to girl ratio",
    },
    {
      skilledSetWidth: undefined,
      skilledSetPadding: undefined,
      emptySymbol: "95%",
      emptySymbolWidth: undefined,
      womenTrainedInLifeAndVocationa: "employment rate after sponsorship",
    },
  ]);
  return (
    <section className={[styles.statisticsView, className].join(" ")}>
      <div className={styles.changeOverall}>
        <div className={styles.impactOverAll}>
          <div className={styles.impactOverAllChild} />
          <h2 className={styles.statistics}>Statistics</h2>
        </div>
        <div className={styles.measuresLabel}>
          <section className={styles.measuringMetrics}>
            <div className={styles.successFactor}>
              <h2
                className={styles.measuringChangeThe}
              >{`Measuring Change: ‎ The Impact We’ve Made. `}</h2>
              <div className={styles.resultsMetric}>
                <div className={styles.eachSuccessStory}>
                  Each success story reflects tangible results of our work the
                  people empowered to create livelihoods, communities
                  strengthened, and futures reimagined. Our impact is the
                  lasting change and hope we help cultivate across Rwanda.
                </div>
              </div>
            </div>
            <div className={styles.donationsBox}>
              <DonateButton className={styles.donateParent}>
                <span className={styles.donate}>Donate</span>
                <Image
                  className={styles.donateArrow}
                  width={22}
                  height={14.7}
                  sizes="100vw"
                  alt=""
                  src="/Arrow-29.svg"
                />
              </DonateButton>
            </div>
          </section>
          <section className={styles.trainedWomenArea}>
            {skilledSetItems.map((item, index) => (
              <SkilledSet
                key={index}
                skilledSetWidth={item.skilledSetWidth}
                skilledSetPadding={item.skilledSetPadding}
                emptySymbol={item.emptySymbol}
                emptySymbolWidth={item.emptySymbolWidth}
                womenTrainedInLifeAndVocationa={
                  item.womenTrainedInLifeAndVocationa
                }
              />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default StatisticsView;
