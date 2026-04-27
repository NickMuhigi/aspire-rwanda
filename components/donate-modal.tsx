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
            Your contribution directly empowers women, youth, and families across Rwanda.
          </p>
        </div>

        {/* Body */}
        <div className={styles.body}>

          {/* Mobile Money */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Mobile Money</p>
            <div className={styles.momoCode}>
              <div>
                <div className={styles.momoCodeNumber}>7954608</div>
                <div className={styles.momoCodeLabel}>MTN MoMo Code</div>
              </div>
              <CopyButton value="7954608" />
            </div>
          </div>

          <div className={styles.divider}>OR BANK TRANSFER</div>

          {/* Bank details */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Bank Details</p>
            <Row label="Bank Name" value="BANK OF KIGALI" />
            <Row label="Account Name" value="OUR PAST INITIATIVE" />
            <Row label="Swift Code" value="BKIGRWRW" />
            <Row label="Bank Address" value="PLOT 790 KN4 Av no.12" />
          </div>

          {/* RWF Account */}
          <div className={styles.accountCard}>
            <p className={styles.accountCardTitle}>RWF Account</p>
            <Row label="Account No." value="100033930687" />
            <Row label="IBAN" value="RW41040100033930687646" />
          </div>

          {/* USD Account */}
          <div className={styles.accountCard}>
            <p className={styles.accountCardTitle}>USD Account</p>
            <Row label="Account No." value="100033930768" />
            <Row label="IBAN" value="RW03040100033930768840" />
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
