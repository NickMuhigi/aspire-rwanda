"use client";
import type { NextPage } from "next";
import { useMemo, useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./skilled-set.module.css";

export type SkilledSetType = {
  className?: string;
  emptySymbol?: string;
  womenTrainedInLifeAndVocationa?: string;
  skilledSetWidth?: CSSProperties["width"];
  skilledSetPadding?: CSSProperties["padding"];
  emptySymbolWidth?: CSSProperties["width"];
};

function parseStatValue(val: string) {
  // Handle "55:45" ratio format
  if (val.includes(":")) {
    const [a, b] = val.split(":");
    return { type: "ratio" as const, a: parseInt(a), b: parseInt(b) };
  }
  // Handle "300+", "95%" etc
  const match = val.match(/^(\D*)(\d+)(\D*)$/);
  if (match) {
    return { type: "number" as const, prefix: match[1], value: parseInt(match[2]), suffix: match[3] };
  }
  return { type: "static" as const, display: val };
}

const DURATION = 1800;

const SkilledSet: NextPage<SkilledSetType> = ({
  className = "",
  skilledSetWidth,
  skilledSetPadding,
  emptySymbol = "",
  emptySymbolWidth,
  womenTrainedInLifeAndVocationa,
}) => {
  const parsed = useMemo(() => parseStatValue(emptySymbol), [emptySymbol]);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(emptySymbol);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || parsed.type === "static") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          // ease-out cubic
          const ease = 1 - Math.pow(1 - progress, 3);

          if (parsed.type === "number") {
            const current = Math.round(ease * parsed.value);
            setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);
          } else if (parsed.type === "ratio") {
            const ca = Math.round(ease * parsed.a);
            const cb = Math.round(ease * parsed.b);
            setDisplay(`${ca}:${cb}`);
          }

          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed]);

  const skilledSetStyle: CSSProperties = useMemo(
    () => ({ width: skilledSetWidth, padding: skilledSetPadding }),
    [skilledSetWidth, skilledSetPadding]
  );

  const emptySymbolStyle: CSSProperties = useMemo(
    () => ({ width: emptySymbolWidth }),
    [emptySymbolWidth]
  );

  return (
    <div
      ref={ref}
      className={[styles.skilledSet, className].join(" ")}
      style={skilledSetStyle}
    >
      <div className={styles.skilledSetChild} />
      <div className={styles.impactColumn}>
        <div className={styles.impactDetails}>
          <h2 className={styles.emptySymbol} style={emptySymbolStyle}>
            {display}
          </h2>
          <div className={styles.womenTrainedIn}>
            {womenTrainedInLifeAndVocationa}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilledSet;
