// website/app/getting-started/content.js
'use client';

import { useState, useEffect } from 'react';
import { marked } from 'marked';
import styles from './gettingstarted.module.css';
import { DocumentList } from './build';

export function GettingStartedContent({ docs }: { docs : DocumentList}) {
  const [activeDoc, setActiveDoc] = useState(docs.flat.length > 0 ? docs.flat[0].slug : '');
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Convert markdown to HTML when activeDoc changes
    const doc = docs.flat.find(doc => doc.slug === activeDoc && !doc.isCategory);
    if (doc) {
      setHtmlContent(marked(doc.content, { async: false }));
    }
  }, [activeDoc, docs]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Getting Started with <span className={styles.highlight}>Skullbrain</span></h1>

      <div className={styles.content}>
        <nav className={styles.sidebar}>
          <h2 className={styles.navTitle}>Documentation</h2>

          {docs.flat.length > 0 ? (
            <ul className={styles.navList}>
              {docs.flat.map((doc) => {
                if (doc.isCategory) {
                  // Render a category header
                  return (
                    <li key={doc.slug} className={styles.categoryItem}>
                      <div className={styles.categoryName}>
                        {doc.title}
                      </div>
                    </li>
                  );
                } else {
                  // Render a document link with indentation based on level
                  return (
                    <li
                      key={doc.slug}
                      className={activeDoc === doc.slug ? styles.activeNavItem : styles.navItem}
                      style={{ paddingLeft: `${doc.level * 0.75}rem` }}
                    >
                      <button
                        onClick={() => setActiveDoc(doc.slug)}
                        className={styles.navButton}
                      >
                        {doc.title}
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          ) : (
            <p className={styles.emptyMessage}>No documentation found</p>
          )}
        </nav>

        <main className={styles.mainContent}>
          {docs.flat.length > 0 ? (
            <div
              className={styles.docContent}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className={styles.docContent}>
              <h1>Documentation Not Found</h1>
              <p>No documentation files were found in the docs/getting-started directory.</p>
            </div>
          )}

          {/* Add navigation between docs */}
          {docs.flat.length > 0 && (
            <div className={styles.docNavigation}>
              {/* Find previous and next docs excluding categories */}
              {(() => {
                const activeDocs = docs.flat.filter(doc => !doc.isCategory);
                const currentIndex = activeDocs.findIndex(doc => doc.slug === activeDoc);
                const prevDoc = currentIndex > 0 ? activeDocs[currentIndex - 1] : null;
                const nextDoc = currentIndex < activeDocs.length - 1 ? activeDocs[currentIndex + 1] : null;

                return (
                  <>
                    <div className={styles.prevNext}>
                      {prevDoc && (
                        <button
                          onClick={() => setActiveDoc(prevDoc.slug)}
                          className={styles.navPrevButton}
                        >
                          ← Previous: {prevDoc.title}
                        </button>
                      )}

                      {nextDoc && (
                        <button
                          onClick={() => setActiveDoc(nextDoc.slug)}
                          className={styles.navNextButton}
                        >
                          Next: {nextDoc.title} →
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}