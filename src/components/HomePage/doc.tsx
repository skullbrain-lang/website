import styles from "./features.module.css"
import button from "./button.module.css"

export default function Documentation() {
    return (
        <>
            <section id="docs">
                <div>
                    <h2>Documentation</h2>
                    <p style={{ textAlign: "center", marginBottom: "40px" }}>Yes, we actually have documentation. I'm as surprised
                        as you are.</p>
                    <div className={styles.features}>
                        <div className={styles["feature-card"]}>
                            <div className={styles["feature-icon"]}>📚</div>
                            <h3>Language Reference</h3>
                            <p>Complete guide to SkullBrain syntax and core functions.</p>
                            <a href="/getting-started/basics"  className={`${button.btn} ${button['btn-secondary']}`}>Read More</a>
                        </div>
                        <div className={styles["feature-card"]}>
                            <div className={styles["feature-icon"]}>🧰</div>
                            <h3>Standard Library</h3>
                            <p>All the built-in functions and modules you never knew you didn't want.</p>
                            <a href="/std" className={`${button.btn} ${button['btn-secondary']}`}>Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}