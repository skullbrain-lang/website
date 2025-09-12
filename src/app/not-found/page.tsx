'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './404.module.css';

// Meme phrases that will randomly display
const memePhrases = [
  "404 BRAIN NOT FOUND",
  "SKILL ISSUE DETECTED",
  "ERROR: BRAIN.EXE HAS STOPPED WORKING",
  "YOUR CODE IS IN ANOTHER CASTLE",
  "SEGMENTATION FAULT: BRAIN CORRUPTED",
  "TOUCH GRASS EXCEPTION: PATH NOT FOUND",
  "*DIES FROM CRINGE*",
  "WHO ASKED (ERROR 404)",
  "NO BITCHES?",
  "BRAINROT OVERFLOW EXCEPTION"
];

// Glitch text component
const GlitchText = ({ text }: { text: string }) => {
  return <span className={styles.glitch} data-text={text}>{text}</span>;
};

export default function NotFound() {
  const [phrase, setPhrase] = useState(memePhrases[0]);
  const [count, setCount] = useState(0);
  const [isVibing, setIsVibing] = useState(false);

  // Change phrase randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase(memePhrases[Math.floor(Math.random() * memePhrases.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Skull vibe handler
  const handleSkullClick = () => {
    setCount(count + 1);

    if (count >= 4) {
      setIsVibing(!isVibing);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.staticOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <GlitchText text="404" />
        </h1>

        <div
          className={`${styles.skull} ${isVibing ? styles.vibing : ''}`}
          onClick={handleSkullClick}
        >
          <pre className={styles.skullArt}>
            {`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⢠⣿⣿⣿⣿⠙⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠙⢿⣿⣿⣿⢻⣿⣿⣿⡇
    ⠀⣿⣿⣿⣿⡏⠀⠀⠙⠻⢿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠹⠛⠋⠀⣿⣿⣿⡇
    ⠀⣿⣿⣿⣿⣷⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣾⣿⣿⣿⡇
    ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⠁
    ⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀
    ⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⠿⠿⠿⠿⠿⠟⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀
`}
          </pre>
        </div>

        <h2 className={styles.subtitle}>{phrase}</h2>

        <p className={styles.message}>
          The page you're looking for has been consumed by brainrot.
          <br />It's probably busy making TikToks instead of serving content.
        </p>

        <div className={styles.buttonContainer}>
          <Link href="/" className={styles.button}>
            Go Home
          </Link>

          <Link href="/getting-started" className={styles.button}>
            Getting Started
          </Link>
        </div>

        <div className={styles.easterEgg}>
          {isVibing && (
            <div className={styles.codeBlock}>
              <code>
                <span className={styles.comment}>// Brain.js has encountered a fatal error</span><br />
                <span className={styles.keyword}>const</span> <span className={styles.variable}>brain</span> = <span className={styles.keyword}>require</span>(<span className={styles.string}>'./brain.js'</span>);<br />
                <span className={styles.keyword}>try</span> {'{'}<br />
                &nbsp;&nbsp;<span className={styles.variable}>brain</span>.<span className={styles.function}>think</span>();<br />
                {'}'} <span className={styles.keyword}>catch</span> (error) {'{'}<br />
                &nbsp;&nbsp;<span className={styles.variable}>console</span>.<span className={styles.function}>log</span>(<span className={styles.string}>'skill issue'</span>);<br />
                &nbsp;&nbsp;<span className={styles.variable}>window</span>.<span className={styles.function}>location</span> = <span className={styles.string}>'/touch-grass'</span>;<br />
                {'}'}
              </code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}