"use client";
import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateButton from "./donate-button";
import styles from "./footer-container.module.css";

export type FooterContainerType = {
  className?: string;
};

const FooterContainer: NextPage<FooterContainerType> = ({ className = "" }) => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (subscribeEmail.trim()) {
      setSubscribed(true);
    }
  };

  const backToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={[styles.footerContainer, className].join(" ")}>
      <div className={styles.footerMain}>
        <div className={styles.topRow}>
          <Image
            className={styles.logo}
            loading="lazy"
            width={132}
            height={56}
            sizes="100vw"
            alt="Aspire Rwanda"
            src="/Logo-5@2x.png"
          />
          <div className={styles.socials}>
            <a className={styles.socialLink} href="#" aria-label="LinkedIn">
              <Image
                className={styles.socialIcon}
                loading="lazy"
                width={23}
                height={23}
                sizes="100vw"
                alt=""
                src="/LinkedIn@2x.png"
              />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Facebook">
              <Image
                className={styles.socialIcon}
                loading="lazy"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/Facebook@2x.png"
              />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram">
              <Image
                className={styles.socialIcon}
                loading="lazy"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/Instagram@2x.png"
              />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <p className={styles.aboutText}>
              Aspire Rwanda is a registered NGO dedicated to lifting vulnerable
              youth, women, and men out of poverty through education and
              vocational training.
            </p>

            <div className={styles.subscribeBlock}>
              <h3 className={styles.subscribeTitle}>Subscribe</h3>
              {subscribed ? (
                <div className={styles.subscribeDone}>DONE</div>
              ) : (
                <div className={styles.subscribeRow}>
                  <input
                    type="email"
                    className={styles.emailInput}
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    placeholder="Please Enter Your Email Address..."
                    onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                  />
                  <button className={styles.subscribeButton} type="button" onClick={handleSubscribe}>
                    <span>Subscribe</span>
                    <Image
                      className={styles.subscribeArrow}
                      width={20}
                      height={14}
                      sizes="100vw"
                      alt=""
                      src="/Arrow-29.svg"
                    />
                  </button>
                </div>
              )}
            </div>

            {/* desktop only — hidden on mobile */}
            <a
              className={styles.backToTopDesktop}
              href="#"
              onClick={backToTop}
            >
              <span className={styles.backToTopIcon}>
                <Image loading="lazy" width={26} height={27} sizes="100vw" alt="" src="/Chevron-Up@2x.png" />
              </span>
              <span className={styles.backToTopText}>Back To Top</span>
            </a>
          </div>

          <div className={styles.middleColumn}>
            <div className={styles.middleColumnLinks}>
              <div className={styles.linkGroup}>
                <h3 className={styles.sectionTitle}>Quick Links</h3>
                <div className={styles.navLinks}>
                  <Link href="/" className={styles.footerLink}>HOME</Link>
                  <Link href="/about-ar" className={styles.footerLink}>ABOUT</Link>
                  <Link href="/blog" className={styles.footerLink}>BLOG</Link>
                  <Link href="/contact" className={styles.footerLink}>CONTACT</Link>
                </div>
              </div>
              <div className={styles.middleRightStack}>
                <div className={styles.linkGroup}>
                  <h3 className={styles.sectionTitle}>Help Transform Lives</h3>
                  <DonateButton tag="a" className={styles.footerLink}>DONATE</DonateButton>
                </div>
                {/* mobile only — hidden on desktop */}
                <a
                  className={styles.backToTopMobile}
                  href="#"
                  onClick={backToTop}
                >
                  <span className={styles.backToTopIcon}>
                    <Image loading="lazy" width={26} height={27} sizes="100vw" alt="" src="/Chevron-Up@2x.png" />
                  </span>
                  <span className={styles.backToTopText}>Back To Top</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mapColumn}>
            <iframe
              className={styles.mapFrame}
              title="KG 685 St, Kigali"
              src="https://www.google.com/maps?q=KG+685+St,+Kigali&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapLabel}>KG 685 St, Kigali</div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>© 2026 Aspire Rwanda. All rights reserved.</div>
    </footer>
  );
};

export default FooterContainer;
