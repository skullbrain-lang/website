import styles from "./features.module.css"

export default function Features() {
    return (
        <>
            <section id="features" className={styles.features}>
                <div>
                    <h2>So... Features?</h2>
                    <div className={styles.features}>
                        <div className={styles["feature-card"]}>
                            <div className={styles["feature-icon"]}>🤯</div>
                            <h3>Maximum Brainrot</h3>
                            <p>Syntax inspired by the worst internet memes and trends. It's so bad, it's good!</p>
                        </div>
                        <div className={styles["feature-card"]}>
                            <div className={styles["feature-icon"]}>🧩</div>
                            <h3>Confusing By Design</h3>
                            <p>If you understand it immediately, we've failed. Embrace the chaos!</p>
                        </div>

                        <div className={styles["feature-card"]}>
                            <div className={styles["feature-icon"]}>🤡</div>
                            <h3>Comic Sans Energy</h3>
                            <p>Code that looks like it was written by your 9-year-old cousin who just discovered computers.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}