import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className={styles.marquee} style={{ userSelect: "none" }}>
                <div className={styles.marqueeContent}>
                    🔥 NOT PRODUCTION READY 🔥 CERTIFIED BRAINROT 🔥 USE AT YOUR OWN RISK 🔥 MAY CAUSE LOSS OF SANITY 🔥 NOT FOR
                    SERIOUS DEVELOPERS 🔥 MEME STATUS: MAXIMUM 🔥
                </div>
            </div>

            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.wiggle}>💀</span>
                            <span className={styles.wiggle} style={{ animationDelay: '0.2s' }}>🧠</span>
                            SkullBrain
                        </Link>
                        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                            <Link href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                            <Link href="/#examples" onClick={() => setMobileMenuOpen(false)}>Examples</Link>
                            {/* TODO: Implement this editor page once the interperteer is done with basic ide feature support */}
                            <Link href="/editor" onClick={() => setMobileMenuOpen(false)}>Online Editor</Link>
                            <Link href="/getting-started" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
                            <a href="https://github.com/Deaths-Door/SkullBrain" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>GitHub</a>
                        </div>
                        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}