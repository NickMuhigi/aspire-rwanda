"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./donate-modal.module.css";

type Props = { onClose: () => void };

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      className={`${styles.copyBtn}${copied ? " " + styles.copied : ""}`}
      onClick={copy}
      type="button"
    >
      {copied ? "COPIED ✓" : "COPY"}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowLabel}>{label}</span>
      <span className={styles.rowValue}>{value}</span>
      <CopyButton value={value} />
    </div>
  );
}

export default function DonateModal({ onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className={styles.modal} role="dialog" aria-modal="true">

        {/* Header */}
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
          <p className={styles.headerLabel}>Support the Mission</p>
          <h2 className={styles.headerTitle}>ASPIRE RWANDA</h2>
          <p className={styles.headerSub}>
            Your contribution children and the youth across Rwanda.
          </p>
        </div>

        {/* Body */}
        <div className={styles.body}>

          {/* Bank details */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Bank Details</p>
            <Row label="Bank Name" value="Guaranty Trust Bank (Rwanda) Limited" />
            <Row label="Bank Address" value="KN 3 AVE, 20 Nyarugenge/Kigali/Rwanda, P.O BOX 331" />
            <Row label="Swift Code" value="GTBIRWRK" />
          </div>

          {/* RWF Account */}
          <div className={styles.accountCard}>
            <p className={styles.accountCardTitle}>RWF Account</p>
            <Row label="Account No." value="2110078526" />
          </div>

          <p className={styles.footerNote}>
            Every contribution — big or small — plants lasting change.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
