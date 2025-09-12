import Link from "next/link"
import styles from "./hero.module.css"
import button from "./button.module.css"

export default function HomeHero() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles["hero-content"]}>
                    <h1 style={{ userSelect: "none" }}><span className={styles.rainbowText}>SkullBrain</span></h1>
                    <p style={{ userSelect: "none" }}>The programming language born from internet brainrot that no one asked for, but everyone secretly needed.
                    </p>
                    <div>
                        <Link href="/getting-started" className={button.btn}>Get Started</Link>
                        <Link href="#editor" className={`${button.btn} ${button['btn-secondary']}`}>Try Online</Link>
                    </div>
                </div>
            </section>
        </>
    )
}