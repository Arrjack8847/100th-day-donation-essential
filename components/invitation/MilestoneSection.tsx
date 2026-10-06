"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MilestoneSection.module.css";
import { SectionDecor, SectionDivider } from "../decor/SiteDecor";

const burstSymbols = ["♡", "✦", "♡", "✧", "♡", "✦"];

export default function MilestoneSection() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isReacting, setIsReacting] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const playSurprise = () => {
    if (isReacting) return;

    setIsReacting(true);
    setHasPlayed(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsReacting(false), 720);
  };

  return (
    <section
      className={styles.section}
      data-reveal
      aria-label="Celebrating one hundred days"
      data-motion-section="milestone"
    >
      <div className={styles.paperGlow} aria-hidden="true" />
      <SectionDecor variant="milestone" />

      <div className={styles.inner}>
        <div className={styles.portraitStage} data-motion-role="milestone-portrait">
          <button
            type="button"
            className={`${styles.portraitButton} ${isReacting ? styles.isShaking : ""}`}
            onClick={playSurprise}
            aria-label="Tap the baby for a little visual surprise"
          >
            <img
              className={styles.portrait}
              src="/photo_2026-09-28_14-18-19-Photoroom.webp"
              alt="Our little one celebrating 100 days"
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            <span
              className={`${styles.tapHeart} ${isReacting ? styles.tapHeartActive : ""}`}
              aria-hidden="true"
            >
              ♡
            </span>

            <span
              className={`${styles.surpriseBurst} ${isReacting ? styles.surpriseBurstActive : ""}`}
              aria-hidden="true"
            >
              {burstSymbols.map((symbol, index) => (
                <i key={`${symbol}-${index}`}>{symbol}</i>
              ))}
            </span>
          </button>

          <div
            className={`${styles.assetDoodles} ${isReacting ? styles.assetDoodlesReacting : ""}`}
            aria-hidden="true"
          >
            <img
              className={`${styles.doodleAsset} ${styles.sparkleLeft}`}
              src="/sparkle-doodle.webp"
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <img
              className={`${styles.doodleAsset} ${styles.sparkleRight}`}
              src="/sparkle-doodle.webp"
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <img
              className={`${styles.doodleAsset} ${styles.heartLeft}`}
              src="/components/heart-doodle.webp"
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <img
              className={`${styles.doodleAsset} ${styles.heartRight}`}
              src="/components/heart-doodle.webp"
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>

        <p
          className={`${styles.tapHint} ${hasPlayed ? styles.tapHintUsed : ""}`}
          aria-hidden="true"
        >
          tap for a little surprise ♡
        </p>

        <div className={styles.message} data-motion-role="milestone-message">
          <img
            className={styles.textArtwork}
            src="/text.webp"
            alt="100 Days of Love"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div data-motion-role="milestone-divider">
          <SectionDivider variant="simple" />
        </div>

        <div className={styles.bannerWrap} data-motion-role="milestone-banner" aria-hidden="true">
          <img
            className={styles.banner}
            src="/banner.webp"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
