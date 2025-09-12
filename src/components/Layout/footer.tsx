import styles from "./footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>SkullBrain - The programming language that answers the question nobody asked.</p>
                    <p>Created with 100% irony and 0% practicality.</p>
                    <div className={styles.socialLinks}>
                        <a href="#">💀</a>
                        <a href="#">🧠</a>
                        <a href="#">🤯</a>
                        <a href="#">🤡</a>
                    </div>
                    <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888' }}>
                        © 2025 SkullBrain - Use at your own risk. We are not responsible for lost brain cells.
                    </p>
                </div>
            </footer>
        </>
    )
}